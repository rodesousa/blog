import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeShiki from "@shikijs/rehype";
import rehypeStringify from "rehype-stringify";

const CONTENT_DIR = path.join(process.cwd(), "content", "posts");
const ABOUT_DIR = path.join(process.cwd(), "content", "about");

export type Locale = "fr" | "en";

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

async function markdownToHtml(content: string): Promise<string> {
  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeShiki, { theme: "github-dark" })
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(content);
  return String(result);
}

function parsePost(
  filePath: string,
  slug: string,
  locale: Locale
): PostMeta | null {
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data } = matter(raw);
  if (data.draft === true) return null;

  const featuredImage =
    data.resources?.find(
      (r: { name: string; src: string }) => r.name === "featured-image"
    )?.src ?? undefined;

  return {
    slug,
    locale,
    frontmatter: {
      title: data.title ?? "",
      date: data.date ? String(data.date) : "",
      lastmod: data.lastmod ? String(data.lastmod) : undefined,
      draft: data.draft ?? false,
      author: data.author,
      description: data.description,
      tags: data.tags ?? [],
      categories: data.categories ?? [],
      featuredImage,
    },
  };
}

export function getAllPosts(locale: Locale = "fr"): PostMeta[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];

  const slugs = fs
    .readdirSync(CONTENT_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);

  const posts: PostMeta[] = [];
  for (const slug of slugs) {
    const filePath = path.join(CONTENT_DIR, slug, `index.${locale}.md`);
    const post = parsePost(filePath, slug, locale);
    if (post) posts.push(post);
  }

  return posts.sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime()
  );
}

export async function getAboutPage(
  locale: Locale = "fr"
): Promise<{ title: string; description: string; contentHtml: string } | null> {
  const filePath = path.join(ABOUT_DIR, `index.${locale}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const contentHtml = await markdownToHtml(content);

  return {
    title: data.title ?? "",
    description: data.description ?? "",
    contentHtml,
  };
}

export async function getPostBySlug(
  slug: string,
  locale: Locale = "fr"
): Promise<Post | null> {
  const filePath = path.join(CONTENT_DIR, slug, `index.${locale}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  if (data.draft === true) return null;

  const contentHtml = await markdownToHtml(content);

  const featuredImage =
    data.resources?.find(
      (r: { name: string; src: string }) => r.name === "featured-image"
    )?.src ?? undefined;

  return {
    slug,
    locale,
    frontmatter: {
      title: data.title ?? "",
      date: data.date ? String(data.date) : "",
      lastmod: data.lastmod ? String(data.lastmod) : undefined,
      draft: data.draft ?? false,
      author: data.author,
      description: data.description,
      tags: data.tags ?? [],
      categories: data.categories ?? [],
      featuredImage,
    },
    contentHtml,
  };
}
