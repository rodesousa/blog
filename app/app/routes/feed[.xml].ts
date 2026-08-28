import { getAllPosts, getPostBySlug } from "../lib/posts";
import { SITE_TITLE, SITE_URL } from "../lib/seo";

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function toRfc822(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return d.toUTCString();
}

export async function loader() {
  const frPosts = getAllPosts("fr");
  const enPosts = getAllPosts("en");

  // Merge all posts (FR + EN), one entry per locale, sorted by date desc.
  const metas = [
    ...frPosts.map((p) => ({ post: p, locale: "fr" as const })),
    ...enPosts.map((p) => ({ post: p, locale: "en" as const })),
  ].sort(
    (a, b) =>
      new Date(b.post.frontmatter.date).getTime() -
      new Date(a.post.frontmatter.date).getTime()
  );

  const items: string[] = [];
  for (const { post, locale } of metas) {
    const full = await getPostBySlug(post.slug, locale);
    const basePath = locale === "fr" ? "/posts" : "/en/posts";
    const link = `${SITE_URL}${basePath}/${post.slug}`;
    const published = toRfc822(post.frontmatter.date);
    const updated = post.frontmatter.lastmod
      ? toRfc822(post.frontmatter.lastmod)
      : published;

    // Absolutize relative image srcs for feed readers.
    let content = full?.contentHtml ?? "";
    content = content.replace(/src="\/posts\//g, `src="${SITE_URL}/posts/`);

    const description = post.frontmatter.description
      ? `<description>${escapeXml(post.frontmatter.description)}</description>`
      : "";

    const tags = (post.frontmatter.tags ?? [])
      .map((t) => `      <category>${escapeXml(t)}</category>`)
      .join("\n");

    items.push(`    <item>
      <title>${escapeXml(post.frontmatter.title)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${published}</pubDate>
      <lastBuildDate>${updated}</lastBuildDate>
      <dc:creator><![CDATA[Roberto De Sousa]]></dc:creator>
${description ? `      ${description}` : ""}
${tags ? `\n${tags}\n` : ""}
      <content:encoded><![CDATA[${content}]]></content:encoded>
    </item>`);
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
     xmlns:atom="http://www.w3.org/2005/Atom"
     xmlns:dc="http://purl.org/dc/elements/1.1/"
     xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>${escapeXml(SITE_TITLE)}</title>
    <link>${SITE_URL}</link>
    <description>Blog de Roberto De Sousa sur l'ingénierie logicielle, Elixir, et le management.</description>
    <language>fr-fr</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <generator>React Router</generator>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />
    <managingEditor>dessroberto@gmail.com (Roberto De Sousa)</managingEditor>
    <webMaster>dessroberto@gmail.com (Roberto De Sousa)</webMaster>
${items.join("\n")}
  </channel>
</rss>`;

  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
