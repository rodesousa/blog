import { getPostBySlug, hasPostLocale } from "../../lib/posts";
import { PostLayout } from "../../components/PostLayout";
import { buildPostMeta, DEFAULT_OG_IMAGE, SITE_URL } from "../../lib/seo";
import type { Route } from "./+types/post";

export async function loader({ params }: Route.LoaderArgs) {
  const post = await getPostBySlug(params.slug, "en");
  if (!post) throw new Response("Post not found", { status: 404 });
  const hasAlternate = hasPostLocale(params.slug, "fr");

  return { post, hasAlternate };
}

export function meta({ data }: Route.MetaArgs): Route.MetaDescriptors {
  if (!data) return [{ title: "Post not found" }];
  const { post, hasAlternate } = data;
  const { frontmatter } = post;
  const ogImage = frontmatter.featuredImage
    ? `${SITE_URL}/posts/${post.slug}/${frontmatter.featuredImage}`
    : DEFAULT_OG_IMAGE;

  return buildPostMeta({
    title: `${frontmatter.title} — rdesousa.fr`,
    breadcrumbName: frontmatter.title,
    description: frontmatter.description ?? "",
    slug: post.slug,
    locale: "en",
    ogImage,
    publishedTime: frontmatter.date,
    modifiedTime: frontmatter.lastmod,
    tags: frontmatter.tags,
    hasAlternate,
  });
}

export default function EnPost({ loaderData }: Route.ComponentProps) {
  const { post } = loaderData;
  return <PostLayout post={post} locale="en" />;
}
