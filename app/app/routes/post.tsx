import { getPostBySlug, hasPostLocale } from "../lib/posts";
import { PostLayout } from "../components/PostLayout";
import { buildPostMeta, DEFAULT_OG_IMAGE, SITE_URL } from "../lib/seo";
import type { Route } from "./+types/post";

export async function loader({ params }: Route.LoaderArgs) {
  const post = await getPostBySlug(params.slug, "fr");
  if (!post) throw new Response("Post non trouvé", { status: 404 });
  const hasAlternate = hasPostLocale(params.slug, "en");

  return { post, hasAlternate };
}

export function meta({ data }: Route.MetaArgs): Route.MetaDescriptors {
  if (!data) return [{ title: "Post non trouvé" }];
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
    locale: "fr",
    ogImage,
    publishedTime: frontmatter.date,
    modifiedTime: frontmatter.lastmod,
    tags: frontmatter.tags,
    hasAlternate,
  });
}

export default function Post({ loaderData }: Route.ComponentProps) {
  const { post } = loaderData;
  return <PostLayout post={post} locale="fr" />;
}
