import { getAboutPage } from "../lib/posts";
import type { Route } from "./+types/about";

export async function loader() {
  const about = await getAboutPage("fr");
  if (!about) throw new Response("Page introuvable", { status: 404 });
  return { about };
}

export function meta({ data }: Route.MetaArgs) {
  if (!data) return [{ title: "À propos — rdesousa.fr" }];
  return [
    { title: `${data.about.title} — rdesousa.fr` },
    { name: "description", content: data.about.description },
  ];
}

export default function About({ loaderData }: Route.ComponentProps) {
  const { about } = loaderData;
  return (
    <article className="prose">
      <h1>{about.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: about.contentHtml }} />
    </article>
  );
}
