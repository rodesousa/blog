import { getPostBySlug } from "../../lib/posts";
import { PostLayout } from "../../components/PostLayout";
import type { Route } from "./+types/post";

export async function loader({ params }: Route.LoaderArgs) {
  const post = await getPostBySlug(params.slug, "en");
  if (!post) throw new Response("Post not found", { status: 404 });
  return { post };
}

export function meta({ data }: Route.MetaArgs) {
  if (!data) return [{ title: "Post not found" }];
  const { post } = data;
  return [
    { title: `${post.frontmatter.title} — rdesousa.fr` },
    { name: "description", content: post.frontmatter.description ?? "" },
  ];
}

export default function EnPost({ loaderData }: Route.ComponentProps) {
  const { post } = loaderData;
  return <PostLayout post={post} locale="en" />;
}
