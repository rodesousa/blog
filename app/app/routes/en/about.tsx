import { buildPageMeta } from "../../lib/seo";
import type { Route } from "./+types/about";

export function meta(): Route.MetaDescriptors {
  return buildPageMeta({
    title: "About — rdesousa.fr",
    description: "About Roberto De Sousa, software engineer and manager.",
    path: "/en/about",
    locale: "en",
  });
}

export default function EnAbout() {
  return (
    <article>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
        About
      </h1>
      <p className="text-gray-600 dark:text-gray-400">
        Content coming soon — migration in Phase 5.
      </p>
    </article>
  );
}
