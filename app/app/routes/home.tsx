import { getAllPosts } from "../lib/posts";
import { PostCard } from "../components/PostCard";
import type { Route } from "./+types/home";

export async function loader() {
  const posts = getAllPosts("fr");
  return { posts };
}

export function meta() {
  return [
    { title: "rdesousa.fr — Ingénierie & Management" },
    {
      name: "description",
      content:
        "Blog de Roberto De Sousa sur l'ingénierie logicielle, Elixir, et le management.",
    },
  ];
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const { posts } = loaderData;

  return (
    <div>
      {posts.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-500">Aucun article pour l'instant.</p>
      ) : (
        posts.map((post) => (
          <PostCard key={post.slug} post={post} locale="fr" />
        ))
      )}
    </div>
  );
}
