import { getAllPosts } from "../../lib/posts";
import { PostCard } from "../../components/PostCard";
import { buildPageMeta } from "../../lib/seo";
import type { Route } from "./+types/home";

export async function loader() {
  const posts = getAllPosts("en");
  return { posts };
}

export function meta(): Route.MetaDescriptors {
  return buildPageMeta({
    title: "rdesousa.fr — Engineering & Management",
    description:
      "Roberto De Sousa's blog on software engineering, Elixir, and management.",
    path: "/en",
    locale: "en",
  });
}

export default function EnHome({ loaderData }: Route.ComponentProps) {
  const { posts } = loaderData;

  return (
    <div>
      <h1 className="sr-only">
        rdesousa.fr — Engineering & Management: articles by Roberto De Sousa
      </h1>
      {posts.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-500">No posts yet.</p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} locale="en" />
          ))}
        </div>
      )}
    </div>
  );
}
