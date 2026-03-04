import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeShiki from "@shikijs/rehype";
import rehypeStringify from "rehype-stringify";

export type Locale = "fr" | "en";

// Bundle all markdown files at build time via Vite glob imports.
// This ensures content is available in serverless environments (Vercel)
// where fs access to project files is not guaranteed at runtime.
const postFiles = import.meta.glob<string>(
  "../../content/posts/**/*.md",
  { query: "?raw", import: "default", eager: true }
);

const aboutFiles = import.meta.glob<string>(
  "../../content/about/*.md",
  { query: "?raw", import: "default", eager: true }
);

export interface PostFrontmatter {
  title: string;
  date: string;
  lastmod?: string;
  draft?: boolean;
  author?: string;
  description?: string;
  tags?: string[];
  categories?: string[];
  featuredImage?: string;
}

export interface Post {
  slug: string;
  locale: Locale;
  frontmatter: PostFrontmatter;
  contentHtml: string;
}

export interface PostMeta {
  slug: string;
  locale: Locale;
  frontmatter: PostFrontmatter;
}

async function markdownToHtml(content: string, slug?: string): Promise<string> {
  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeShiki, { theme: "github-dark" })
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(content);

  let html = String(result);

  if (slug) {
    html = html.replace(
      /(<img[^>]*?\ssrc=")(?!\/|https?:)([^"]+)"/gi,
      `$1/posts/${slug}/$2"`
    );
  }

  return html;
}

function parseFrontmatter(raw: string): { data: Record<string, unknown>; content: string } {
  return matter(raw) as { data: Record<string, unknown>; content: string };
}

function extractFeaturedImage(data: Record<string, unknown>): string | undefined {
  const resources = data.resources as Array<{ name: string; src: string }> | undefined;
  return resources?.find((r) => r.name === "featured-image")?.src ?? undefined;
}

function rawToPostMeta(raw: string, slug: string, locale: Locale): PostMeta | null {
  const { data } = parseFrontmatter(raw);
  if (data.draft === true) return null;

  return {
    slug,
    locale,
    frontmatter: {
      title: (data.title as string) ?? "",
      date: data.date ? String(data.date) : "",
      lastmod: data.lastmod ? String(data.lastmod) : undefined,
      draft: (data.draft as boolean) ?? false,
      author: data.author as string | undefined,
      description: data.description as string | undefined,
      tags: (data.tags as string[]) ?? [],
      categories: (data.categories as string[]) ?? [],
      featuredImage: extractFeaturedImage(data),
    },
  };
}

export function hasPostLocale(slug: string, locale: Locale): boolean {
  const key = `../../content/posts/${slug}/index.${locale}.md`;
  const raw = postFiles[key];
  if (!raw) return false;
  const { data } = parseFrontmatter(raw);
  return data.draft !== true;
}

export function getAllPosts(locale: Locale = "fr"): PostMeta[] {
  const posts: PostMeta[] = [];

  for (const [key, raw] of Object.entries(postFiles)) {
    const match = key.match(/\/([^/]+)\/index\.(fr|en)\.md$/);
    if (!match) continue;
    const [, slug, fileLoc] = match;
    if (fileLoc !== locale) continue;
    const post = rawToPostMeta(raw, slug, locale);
    if (post) posts.push(post);
  }

  return posts.sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
  );
}

export async function getAboutPage(
  locale: Locale = "fr"
): Promise<{ title: string; description: string; contentHtml: string } | null> {
  const key = `../../content/about/index.${locale}.md`;
  const raw = aboutFiles[key];
  if (!raw) return null;

  const { data, content } = parseFrontmatter(raw);
  const contentHtml = await markdownToHtml(content);

  return {
    title: (data.title as string) ?? "",
    description: (data.description as string) ?? "",
    contentHtml,
  };
}

export async function getPostBySlug(
  slug: string,
  locale: Locale = "fr"
): Promise<Post | null> {
  const key = `../../content/posts/${slug}/index.${locale}.md`;
  const raw = postFiles[key];
  if (!raw) return null;

  const { data, content } = parseFrontmatter(raw);
  if (data.draft === true) return null;

  const contentHtml = await markdownToHtml(content, slug);

  return {
    slug,
    locale,
    frontmatter: {
      title: (data.title as string) ?? "",
      date: data.date ? String(data.date) : "",
      lastmod: data.lastmod ? String(data.lastmod) : undefined,
      draft: (data.draft as boolean) ?? false,
      author: data.author as string | undefined,
      description: data.description as string | undefined,
      tags: (data.tags as string[]) ?? [],
      categories: (data.categories as string[]) ?? [],
      featuredImage: extractFeaturedImage(data),
    },
    contentHtml,
  };
}
