import { Link, useLocation } from "react-router";
import { getPostBySlug } from "../lib/posts";
import { getAlternateUrl } from "../lib/locale";
import type { Route } from "./+types/post";

export async function loader({ params }: Route.LoaderArgs) {
  const post = await getPostBySlug(params.slug, "fr");
  if (!post) throw new Response("Post non trouvé", { status: 404 });
  return { post };
}

export function meta({ data }: Route.MetaArgs) {
  if (!data) return [{ title: "Post non trouvé" }];
  const { post } = data;
  return [
    { title: `${post.frontmatter.title} — rdesousa.fr` },
    { name: "description", content: post.frontmatter.description ?? "" },
  ];
}

export default function Post({ loaderData }: Route.ComponentProps) {
  const { post } = loaderData;
  const location = useLocation();

  return (
    <main>
      <header>
        <Link to="/">← Accueil</Link>
        <Link to={getAlternateUrl(location.pathname)}>EN</Link>
      </header>

      <article>
        <h1>{post.frontmatter.title}</h1>
        <time dateTime={post.frontmatter.date}>
          {new Date(post.frontmatter.date).toLocaleDateString("fr-FR", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        {post.frontmatter.tags && post.frontmatter.tags.length > 0 && (
          <ul>
            {post.frontmatter.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        )}
        <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
      </article>
    </main>
  );
}
