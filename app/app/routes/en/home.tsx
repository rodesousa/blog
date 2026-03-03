import { Link, useLocation } from "react-router";
import { getAllPosts } from "../../lib/posts";
import { getAlternateUrl } from "../../lib/locale";
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
  const location = useLocation();

  return (
    <main>
      <header>
        <h1>rdesousa.fr</h1>
        <nav>
          <Link to="/en/about">About</Link>
          <Link to={getAlternateUrl(location.pathname)}>FR</Link>
        </nav>
      </header>

      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link to={`/en/posts/${post.slug}`}>
              <h2>{post.frontmatter.title}</h2>
              <time dateTime={post.frontmatter.date}>
                {new Date(post.frontmatter.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              {post.frontmatter.description && (
                <p>{post.frontmatter.description}</p>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
