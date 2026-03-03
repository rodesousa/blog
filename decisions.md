# Decisions

**Adapter Vercel pour React Router v7** — Le package correct est `@vercel/react-router` (publié par Vercel), pas `@react-router/vercel` (n'existe pas sur npm). Le preset `vercelPreset()` est importé depuis `@vercel/react-router/vite` et ajouté dans `react-router.config.ts`. Rejeté: `@react-router/vercel` (404 sur npm), configuration manuelle via `vercel.json` (moins riche, pas de bundle splitting per-route).

**Emplacement du projet React Router** — Créé dans `app/` à la racine du repo blog Hugo existant. Le repo contient donc les deux stacks pendant la migration. Rejeté: créer un repo séparé (complexifie le workflow), remplacer directement la racine (risque de casser l'existant pendant la migration).

**Pipeline Markdown → HTML (Phase 2)** — Utilise un pipeline serveur `unified` + `remark-parse` + `remark-gfm` + `remark-rehype` + `@shikijs/rehype` + `rehype-stringify`. Le contenu est rendu côté serveur dans les loaders React Router, le HTML est passé à la route et rendu via `dangerouslySetInnerHTML`. Rejeté: `@mdx-js/rollup` (Vite plugin, adapté aux imports statiques mais complexe pour des routes dynamiques avec slug variable), `@mdx-js/mdx` en runtime (compilation JSX à la volée, overhead et sécurité).

**Format contenu dans l'app** — Fichiers markdown dans `app/content/posts/[slug]/index.{fr,en}.md`, images dans `app/content/posts/[slug]/`. Convention calquée sur Hugo (`index.fr.md` / `index.en.md` pour le bilingue). Rejeté: référencer directement `exampleSite/content/posts/` (couplage fort au repo Hugo, difficile à déployer sur Vercel).

**`lang` attribute dynamique dans root.tsx** — Le loader root détecte la locale via `url.pathname.startsWith("/en")` et retourne `{ lang }`. La fonction `Layout` utilise `useRouteLoaderData<typeof loader>("root")` pour lire `lang` et l'injecter dans `<html lang={lang}>`. Rejeté: `lang="fr"` hardcodé (incorrect pour les pages EN, Lighthouse accessibility fail), détecter la locale dans chaque route et la passer via context (couplage fort, duplication).
