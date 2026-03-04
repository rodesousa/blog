import { Link } from "react-router";
import { getAllPosts } from "../../lib/posts";
import { buildPageMeta } from "../../lib/seo";
import type { Route } from "./+types/posts";

export async function loader() {
  const posts = getAllPosts("en");
  return { posts };
}

export function meta(): Route.MetaDescriptors {
  return buildPageMeta({
    title: "All Posts — rdesousa.fr",
    description: "All articles by Roberto De Sousa.",
    path: "/en/posts",
    locale: "en",
  });
}

export default function EnPosts({ loaderData }: Route.ComponentProps) {
  const { posts } = loaderData;

  const byYear = posts.reduce<Record<string, typeof posts>>((acc, post) => {
    const year = new Date(post.frontmatter.date).getFullYear().toString();
    (acc[year] ??= []).push(post);
    return acc;
  }, {});

  const years = Object.keys(byYear).sort((a, b) => Number(b) - Number(a));

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">
        All Posts
      </h1>

      {years.map((year) => (
        <section key={year} className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
            {year}
          </h2>
          <ul>
            {byYear[year].map((post) => {
              const d = new Date(post.frontmatter.date);
              const day = String(d.getDate()).padStart(2, "0");
              const month = String(d.getMonth() + 1).padStart(2, "0");
              return (
                <li key={post.slug} className="flex justify-between items-baseline py-1.5 border-b border-gray-100 dark:border-gray-800 last:border-b-0">
                  <Link
                    to={`/en/posts/${post.slug}`}
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {post.frontmatter.title}
                  </Link>
                  <span className="text-sm text-gray-400 dark:text-gray-500 ml-4 shrink-0">
                    {day}-{month}
                  </span>
                </li>
              );
            })}
          </ul>
        </section>
      ))}
    </div>
  );
}
