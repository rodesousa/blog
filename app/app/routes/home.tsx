import { Link, useLocation } from "react-router";
import { getAllPosts } from "../lib/posts";
import { getAlternateUrl } from "../lib/locale";
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
  const location = useLocation();

  return (
    <main>
      <header>
        <h1>rdesousa.fr</h1>
        <nav>
          <Link to="/about">À propos</Link>
          <Link to={getAlternateUrl(location.pathname)}>EN</Link>
        </nav>
      </header>

      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link to={`/posts/${post.slug}`}>
              <h2>{post.frontmatter.title}</h2>
              <time dateTime={post.frontmatter.date}>
                {new Date(post.frontmatter.date).toLocaleDateString("fr-FR", {
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
