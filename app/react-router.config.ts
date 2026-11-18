import { vercelPreset } from "@vercel/react-router/vite";
import type { Config } from "@react-router/dev/config";
import { getAllPosts } from "./app/lib/posts";

export default {
  ssr: true,
  async prerender() {
    const fr = getAllPosts("fr").map((p) => `/posts/${p.slug}`);
    const en = getAllPosts("en").map((p) => `/en/posts/${p.slug}`);

    return [
      "/",
      "/about",
      "/en",
      "/en/about",
      ...fr,
      ...en,
    ];
  },
  presets: [vercelPreset()],
} satisfies Config;
