import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("en", "routes/en/home.tsx"),
  route("posts/:slug", "routes/post.tsx"),
  route("en/posts/:slug", "routes/en/post.tsx"),
  route("about", "routes/about.tsx"),
  route("en/about", "routes/en/about.tsx"),
  route("sitemap.xml", "routes/sitemap[.xml].ts"),
  route("feed.xml", "routes/feed[.xml].ts"),
  route("robots.txt", "routes/robots[.txt].ts"),
] satisfies RouteConfig;
