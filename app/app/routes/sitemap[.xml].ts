import { getAllPosts, hasPostLocale } from "../lib/posts";
import { SITE_URL } from "../lib/seo";

interface SitemapUrl {
  loc: string;
  lastmod?: string;
  priority?: string;
  changefreq?: string;
  alternates?: Array<{ hreflang: string; href: string }>;
}

export async function loader() {
  const frPosts = getAllPosts("fr");
  const enPosts = getAllPosts("en");

  const staticUrls: SitemapUrl[] = [
    { loc: SITE_URL, lastmod: new Date().toISOString().split("T")[0], priority: "1.0", changefreq: "weekly" },
    { loc: `${SITE_URL}/en`, lastmod: new Date().toISOString().split("T")[0], priority: "0.9", changefreq: "weekly" },
    { loc: `${SITE_URL}/about`, priority: "0.8", changefreq: "monthly" },
    { loc: `${SITE_URL}/en/about`, priority: "0.7", changefreq: "monthly" },
  ];

  const postUrls: SitemapUrl[] = frPosts.map((post) => {
    const lastmod = post.frontmatter.lastmod ?? post.frontmatter.date;
    const hasEn = hasPostLocale(post.slug, "en");
    return {
      loc: `${SITE_URL}/posts/${post.slug}`,
      lastmod: lastmod ? lastmod.split("T")[0] : undefined,
      priority: "0.7",
      changefreq: "monthly",
      alternates: hasEn
        ? [
            { hreflang: "fr", href: `${SITE_URL}/posts/${post.slug}` },
            { hreflang: "en", href: `${SITE_URL}/en/posts/${post.slug}` },
          ]
        : undefined,
    };
  });

  const enOnlyPosts: SitemapUrl[] = enPosts
    .filter((p) => !frPosts.some((fr) => fr.slug === p.slug))
    .map((post) => {
      const lastmod = post.frontmatter.lastmod ?? post.frontmatter.date;
      return {
        loc: `${SITE_URL}/en/posts/${post.slug}`,
        lastmod: lastmod ? lastmod.split("T")[0] : undefined,
        priority: "0.6",
        changefreq: "monthly",
        alternates: undefined,
      };
    });

  const allUrls: SitemapUrl[] = [...staticUrls, ...postUrls, ...enOnlyPosts];

  const urlEntries = allUrls
    .map((u) => {
      const lastmodTag = u.lastmod ? `\n    <lastmod>${u.lastmod}</lastmod>` : "";
      const changefreqTag = u.changefreq ? `\n    <changefreq>${u.changefreq}</changefreq>` : "";
      const priorityTag = u.priority ? `\n    <priority>${u.priority}</priority>` : "";
      const xhtmlLinks =
        u.alternates
          ? u.alternates
              .map(
                (alt) =>
                  `\n    <xhtml:link rel="alternate" hreflang="${alt.hreflang}" href="${alt.href}"/>`
              )
              .join("")
          : "";
      return `  <url>\n    <loc>${u.loc}</loc>${lastmodTag}${changefreqTag}${priorityTag}${xhtmlLinks}\n  </url>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urlEntries}
</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
