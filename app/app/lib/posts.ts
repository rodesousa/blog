import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeShiki from "@shikijs/rehype";
import rehypeStringify from "rehype-stringify";
import { imageDims } from "./imageDims";

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

export interface TocItem {
  id: string;
  text: string;
  level: number; // 2 (h2) or 3 (h3)
}

export interface Post {
  slug: string;
  locale: Locale;
  frontmatter: PostFrontmatter;
  contentHtml: string;
  toc: TocItem[];
}

export interface PostMeta {
  slug: string;
  locale: Locale;
  frontmatter: PostFrontmatter;
}

// Slugify heading text into a stable anchor id: strip accents, lowercase,
// collapse runs of non-alphanumerics to a single hyphen.
function slugify(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Add an id attribute to every h2/h3 and collect them into a TOC. Ids are
// slugified from the heading text, deduped with -2/-3 suffixes on collision.
function addHeadingIds(html: string): { html: string; toc: TocItem[] } {
  const toc: TocItem[] = [];
  const used = new Map<string, number>();

  const out = html.replace(/<h([23])([^>]*)>(.*?)<\/h\1>/gis, (match, level, attrs, inner) => {
    const text = inner
      .replace(/<[^>]+>/g, "")
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/\s+/g, " ")
      .trim();
    let id = slugify(text);
    if (!id) id = `section-${toc.length + 1}`;
    const seen = used.get(id) ?? 0;
    used.set(id, seen + 1);
    if (seen > 0) id = `${id}-${seen + 1}`;
    toc.push({ id, text, level: Number(level) });
    return `<h${level} id="${id}"${attrs}>${inner}</h${level}>`;
  });

  return { html: out, toc };
}

async function markdownToHtml(
  content: string,
  slug?: string
): Promise<{ html: string; toc: TocItem[] }> {
  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeShiki, { theme: "github-dark" })
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(content);

  let html = String(result);

  // Normalize every <img> in the content:
  // - absolutize relative srcs (relative to the post folder)
  // - inject intrinsic width/height when known (avoids CLS)
  // - add lazy loading + async decoding (unless already present)
  html = html.replace(/<img\b([^>]*?)>/gi, (match, attrs) => {
    const srcMatch = attrs.match(/\ssrc="([^"]+)"/i);
    if (!srcMatch) return match;

    let src = srcMatch[1];
    let newAttrs = attrs;
    if (slug && !/^\//.test(src) && !/^https?:/i.test(src)) {
      const path = `/posts/${slug}/${src}`;
      newAttrs = attrs.replace(/\ssrc="[^"]+"/i, ` src="${path}"`);
      src = path;
    }

    if (!/\bloading=/.test(newAttrs)) {
      newAttrs += ` loading="lazy" decoding="async"`;
    }
    const dims = imageDims(src);
    if (dims && !/\swidth=/.test(newAttrs)) {
      newAttrs += ` width="${dims.width}" height="${dims.height}"`;
    }

    return `<img${newAttrs}>`;
  });

  html = html.replace(/<p>/i, '<p class="lead">');

  const { html: htmlWithIds, toc } = addHeadingIds(html);
  return { html: htmlWithIds, toc };
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
  const { html: contentHtml } = await markdownToHtml(content);

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

  const { html: contentHtml, toc } = await markdownToHtml(content, slug);

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
    toc,
  };
}
