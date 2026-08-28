import { SITE_URL } from "../lib/seo";

export function loader() {
  const content = `# Default: allow everything
User-agent: *
Allow: /

# ---- AI search / retrieval bots: ALLOWED (citation eligibility) ----
User-agent: OAI-SearchBot
Allow: /
User-agent: ChatGPT-User
Allow: /
User-agent: Claude-SearchBot
Allow: /
User-agent: Claude-User
Allow: /
User-agent: PerplexityBot
Allow: /
User-agent: Perplexity-User
Allow: /

# ---- AI training bots: BLOCKED (no effect on search citations) ----
User-agent: GPTBot
Disallow: /
User-agent: ClaudeBot
Disallow: /
User-agent: Google-Extended
Disallow: /
User-agent: CCBot
Disallow: /
User-agent: meta-externalagent
Disallow: /
User-agent: Bytespider
Disallow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;

  return new Response(content, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
