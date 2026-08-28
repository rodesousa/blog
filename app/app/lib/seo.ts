import { imageDims } from "./imageDims";

export const SITE_URL = "https://rdesousa.fr";
export const SITE_TITLE = "rdesousa.fr";
export const AUTHOR_NAME = "Roberto De Sousa";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/og-default.png`;
export const DEFAULT_OG_WIDTH = 1200;
export const DEFAULT_OG_HEIGHT = 630;

// Stable entity anchors shared across every page (GEO entity clarity).
export const PERSON_ID = `${SITE_URL}/#person`;
export const ORG_ID = `${SITE_URL}/#org`;

type Locale = "fr" | "en";
type MetaEntry = Record<string, unknown>;

function ogLocale(locale: Locale) {
  return locale === "fr" ? "fr_FR" : "en_US";
}

function altLocale(locale: Locale): Locale {
  return locale === "fr" ? "en" : "fr";
}

export function buildOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: SITE_TITLE,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/images/avatar.png`,
    },
    founder: { "@id": PERSON_ID },
    sameAs: ["https://github.com/rodesousa"],
  };
}

export function buildPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": PERSON_ID,
    name: AUTHOR_NAME,
    url: `${SITE_URL}/about`,
    jobTitle: "Software engineer & CTO",
    knowsAbout: ["Elixir", "Software engineering", "Engineering management", "LLM"],
    sameAs: ["https://github.com/rodesousa"],
  };
}

export function buildBreadcrumbJsonLd(crumbPath: string, crumbName: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Blog",
        item: `${SITE_URL}/posts`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: crumbName,
        item: `${SITE_URL}${crumbPath}`,
      },
    ],
  };
}

function ogImageEntry(
  ogImage: string,
  width?: number,
  height?: number
): MetaEntry[] {
  return [
    { property: "og:image", content: ogImage },
    { property: "og:image:width", content: String(width ?? DEFAULT_OG_WIDTH) },
    { property: "og:image:height", content: String(height ?? DEFAULT_OG_HEIGHT) },
    { name: "twitter:image", content: ogImage },
  ];
}

export function buildPageMeta({
  title,
  description,
  path,
  locale,
  ogImage = DEFAULT_OG_IMAGE,
  ogImageWidth,
  ogImageHeight,
  alternatePath,
}: {
  title: string;
  description: string;
  path: string;
  locale: Locale;
  ogImage?: string;
  ogImageWidth?: number;
  ogImageHeight?: number;
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
    ...ogImageEntry(ogImage, ogImageWidth, ogImageHeight),
    { property: "og:url", content: canonicalUrl },
    { property: "og:site_name", content: SITE_TITLE },
    { property: "og:locale", content: ogLocale(locale) },
    { property: "og:locale:alternate", content: ogLocale(alt) },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
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
  breadcrumbName,
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
  breadcrumbName?: string;
}): MetaEntry[] {
  const postPath = locale === "fr" ? `/posts/${slug}` : `/en/posts/${slug}`;
  const canonicalUrl = `${SITE_URL}${postPath}`;
  const alt = altLocale(locale);

  // Resolve OG image dimensions when we know them (featured images), else default.
  const imgPath = ogImage.replace(SITE_URL, "");
  const dims = imageDims(imgPath);
  const ogW = dims?.width ?? DEFAULT_OG_WIDTH;
  const ogH = dims?.height ?? DEFAULT_OG_HEIGHT;

  const meta: MetaEntry[] = [
    { title },
    { name: "description", content: description },
    { property: "og:type", content: "article" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    ...ogImageEntry(ogImage, ogW, ogH),
    { property: "og:url", content: canonicalUrl },
    { property: "og:site_name", content: SITE_TITLE },
    { property: "og:locale", content: ogLocale(locale) },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
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

  // JSON-LD BlogPosting structured data (GEO entity + citation target)
  const jsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${canonicalUrl}#article`,
    headline: title,
    description,
    url: canonicalUrl,
    image: {
      "@type": "ImageObject",
      url: ogImage,
      width: ogW,
      height: ogH,
    },
    author: {
      "@type": "Person",
      "@id": PERSON_ID,
      name: AUTHOR_NAME,
      url: `${SITE_URL}/about`,
    },
    publisher: {
      "@type": "Organization",
      "@id": ORG_ID,
      name: SITE_TITLE,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/avatar.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
    inLanguage: locale,
    isAccessibleForFree: true,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".lead", "h2"],
    },
  };
  if (publishedTime) jsonLd.datePublished = publishedTime;
  if (modifiedTime) jsonLd.dateModified = modifiedTime;
  if (tags && tags.length > 0) jsonLd.keywords = tags.join(", ");

  meta.push({ "script:ld+json": jsonLd });
  meta.push({
    "script:ld+json": buildBreadcrumbJsonLd(postPath, breadcrumbName ?? title),
  });

  return meta;
}
