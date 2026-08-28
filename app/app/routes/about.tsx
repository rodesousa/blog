import { getAboutPage } from "../lib/posts";
import { buildPageMeta, buildPersonJsonLd, SITE_URL } from "../lib/seo";
import type { Route } from "./+types/about";

export async function loader() {
  const about = await getAboutPage("fr");
  if (!about) throw new Response("Page introuvable", { status: 404 });
  return { about };
}

export function meta({ data }: Route.MetaArgs): Route.MetaDescriptors {
  if (!data) return [{ title: "À propos — rdesousa.fr" }];
  const { about } = data;
  return [
    ...buildPageMeta({
      title: `${about.title} — rdesousa.fr`,
      description: about.description,
      path: "/about",
      locale: "fr",
    }),
    {
      "script:ld+json": {
        ...buildPersonJsonLd(),
        description: about.description,
        url: `${SITE_URL}/about`,
      },
    },
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
