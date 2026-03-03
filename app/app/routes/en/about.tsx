import { getAboutPage } from "../../lib/posts";
import { buildPageMeta, SITE_URL } from "../../lib/seo";
import type { Route } from "./+types/about";

export async function loader() {
  const about = await getAboutPage("en");
  if (!about) throw new Response("Page not found", { status: 404 });
  return { about };
}

export function meta({ data }: Route.MetaArgs): Route.MetaDescriptors {
  if (!data) return [{ title: "About — rdesousa.fr" }];
  const { about } = data;
  return [
    ...buildPageMeta({
      title: `${about.title} — rdesousa.fr`,
      description: about.description,
      path: "/en/about",
      locale: "en",
    }),
    {
      "script:ld+json": {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Roberto De Sousa",
        url: SITE_URL,
        description: about.description,
        sameAs: ["https://github.com/rodesousa"],
      },
    },
  ];
}

export default function EnAbout({ loaderData }: Route.ComponentProps) {
  const { about } = loaderData;
  return (
    <article className="prose">
      <h1>{about.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: about.contentHtml }} />
    </article>
  );
}
