export const SITE_URL = "https://rdesousa.fr";
export const SITE_TITLE = "rdesousa.fr";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/avatar.png`;

type Locale = "fr" | "en";
type MetaEntry = Record<string, unknown>;

function ogLocale(locale: Locale) {
  return locale === "fr" ? "fr_FR" : "en_US";
}

function altLocale(locale: Locale): Locale {
  return locale === "fr" ? "en" : "fr";
}

export function buildPageMeta({
  title,
  description,
  path,
  locale,
  ogImage = DEFAULT_OG_IMAGE,
  alternatePath,
}: {
  title: string;
  description: string;
  path: string;
  locale: Locale;
  ogImage?: string;
  alternatePath?: string;
}): MetaEntry[] {
  const canonicalUrl = `${SITE_URL}${path}`;
  const alt = altLocale(locale);
  const altPath =
    alternatePath ??
    (locale === "fr"
      ? `/en${path === "/" ? "" : path}`
      : path.slice(3) || "/");
  const altUrl = `${SITE_URL}${altPath}`;

  return [
    { title },
    { name: "description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: ogImage },
    { property: "og:url", content: canonicalUrl },
    { property: "og:site_name", content: SITE_TITLE },
    { property: "og:locale", content: ogLocale(locale) },
    { property: "og:locale:alternate", content: ogLocale(alt) },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: ogImage },
    { tagName: "link", rel: "canonical", href: canonicalUrl },
    { tagName: "link", rel: "alternate", hrefLang: locale, href: canonicalUrl },
    { tagName: "link", rel: "alternate", hrefLang: alt, href: altUrl },
    {
      tagName: "link",
      rel: "alternate",
      hrefLang: "x-default",
      href: locale === "fr" ? canonicalUrl : altUrl,
    },
  ];
}

export function buildPostMeta({
  title,
  description,
  slug,
  locale,
  ogImage = DEFAULT_OG_IMAGE,
  publishedTime,
  modifiedTime,
  tags = [],
  hasAlternate = false,
}: {
  title: string;
  description: string;
  slug: string;
  locale: Locale;
  ogImage?: string;
  publishedTime?: string;
  modifiedTime?: string;
  tags?: string[];
  hasAlternate?: boolean;
}): MetaEntry[] {
  const postPath = locale === "fr" ? `/posts/${slug}` : `/en/posts/${slug}`;
  const canonicalUrl = `${SITE_URL}${postPath}`;
  const alt = altLocale(locale);

  const meta: MetaEntry[] = [
    { title },
    { name: "description", content: description },
    { property: "og:type", content: "article" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: ogImage },
    { property: "og:url", content: canonicalUrl },
    { property: "og:site_name", content: SITE_TITLE },
    { property: "og:locale", content: ogLocale(locale) },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: ogImage },
    { tagName: "link", rel: "canonical", href: canonicalUrl },
    { tagName: "link", rel: "alternate", hrefLang: locale, href: canonicalUrl },
  ];

  if (publishedTime) {
    meta.push({ property: "article:published_time", content: publishedTime });
  }
  if (modifiedTime) {
    meta.push({ property: "article:modified_time", content: modifiedTime });
  }
  for (const tag of tags ?? []) {
    meta.push({ property: "article:tag", content: tag });
  }

  if (hasAlternate) {
    const altPath =
      locale === "fr" ? `/en/posts/${slug}` : `/posts/${slug}`;
    const altUrl = `${SITE_URL}${altPath}`;
    meta.push({ property: "og:locale:alternate", content: ogLocale(alt) });
    meta.push({ tagName: "link", rel: "alternate", hrefLang: alt, href: altUrl });
    meta.push({
      tagName: "link",
      rel: "alternate",
      hrefLang: "x-default",
      href: `${SITE_URL}/posts/${slug}`,
    });
  }

  // JSON-LD Article structured data
  const jsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: canonicalUrl,
    image: ogImage,
    author: {
      "@type": "Person",
      name: "Roberto De Sousa",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Person",
      name: "Roberto De Sousa",
      url: SITE_URL,
    },
    inLanguage: locale,
  };
  if (publishedTime) jsonLd.datePublished = publishedTime;
  if (modifiedTime) jsonLd.dateModified = modifiedTime;
  if (tags && tags.length > 0) jsonLd.keywords = tags.join(", ");

  meta.push({ "script:ld+json": jsonLd });

  return meta;
}
