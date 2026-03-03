import { getAllPosts } from "../../lib/posts";
import { PostCard } from "../../components/PostCard";
import type { Route } from "./+types/home";

export async function loader() {
  const posts = getAllPosts("en");
  return { posts };
}

export function meta() {
  return [
    { title: "rdesousa.fr — Engineering & Management" },
    {
      name: "description",
      content:
        "Roberto De Sousa's blog on software engineering, Elixir, and management.",
    },
  ];
}

export default function EnHome({ loaderData }: Route.ComponentProps) {
  const { posts } = loaderData;

  return (
    <div>
      {posts.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-500">No posts yet.</p>
      ) : (
        posts.map((post) => (
          <PostCard key={post.slug} post={post} locale="en" />
        ))
      )}
    </div>
  );
}
