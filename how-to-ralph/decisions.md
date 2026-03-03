# Decisions

**Routing i18n: fichiers séparés par locale** — Routes FR à la racine (`/`, `/posts/:slug`, `/about`) et routes EN préfixées `/en/` (`/en`, `/en/posts/:slug`, `/en/about`). Chaque locale a son propre fichier de route. Rejeté: fichier unique avec paramètre de locale (plus complexe, moins explicite), i18n routing via middleware.

**404 dans les loaders: `throw new Response(...)`** — `throw new Response("...", { status: 404 })` utilisé à la place de `throw data(...)` (API dépréciée). Rejeté: `data()` de react-router (deprecation warning TypeScript).

**Relative image paths: regex post-processing** — Après génération HTML par unified/rehype, regex replace sur `<img src="...">` non-absolu pour préfixer `/posts/${slug}/`. Rejeté: rehype-raw + plugin HAST (dépendance non installée, plus complexe), modification manuelle des posts (maintenance lourde).
