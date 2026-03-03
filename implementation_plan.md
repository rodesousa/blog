# Implementation Plan

## Phase 1: Setup du projet React Router v7
**Status:** ✅ DONE
- [x] Initialiser un projet React Router v7 avec Vite (`create-react-router`)
- [x] Configurer TypeScript (strict mode, inclus dans le template)
- [x] Installer l'adapter Vercel (`@vercel/react-router` — pas `@react-router/vercel`)
- [x] Configurer `vite.config.ts` et `react-router.config.ts` (vercelPreset ajouté)
- [x] Vérifier que le build de base fonctionne (`npm run build` ✓, typecheck ✓)
- [x] `vercel.json` non nécessaire — le preset gère la configuration automatiquement
- [x] Commit initial du projet vide

**Notes:**
- Projet créé dans `app/` à la racine du repo (sous-dossier du repo Hugo)
- Versions: react-router 7.12.0, @vercel/react-router (latest), TypeScript 5.9, Tailwind CSS v4
- Le package Vercel s'appelle `@vercel/react-router` (et non `@react-router/vercel`)
- `vercelPreset()` importé depuis `@vercel/react-router/vite` dans `react-router.config.ts`

---

## Phase 2: Infrastructure MDX et parsing du contenu
**Status:** ✅ DONE
- [x] Installer `unified` + `remark-parse` + `remark-gfm` + `remark-rehype` + `rehype-stringify` (pipeline serveur, pas de Vite plugin MDX)
- [x] Installer `gray-matter` pour parser le frontmatter
- [x] Configurer Shiki pour le syntax highlighting via `@shikijs/rehype` (theme: github-dark)
- [x] Configurer `remark-gfm` (tables, strikethrough, task lists)
- [x] Tester le rendu du post `bad_tools` — frontmatter parsé, HTML généré correctement
- [x] Pipeline de lecture depuis `content/posts/[slug]/index.{fr,en}.md`
- [x] Module `app/lib/posts.ts` exposant `getAllPosts(locale)` et `getPostBySlug(slug, locale)`

**Notes:**
- Décision: pipeline serveur `unified/remark/rehype` plutôt que `@mdx-js/rollup` (plus simple pour SSR loaders)
- Content directory: `app/content/posts/[slug]/` — un post copié pour test (`bad_tools`), migration complète en Phase 5
- `getAllPosts()` filtre les drafts, trie par date décroissante
- `getPostBySlug()` retourne `contentHtml` (string HTML)  + frontmatter complet
- `featuredImage` extrait depuis `resources[name=featured-image].src` dans le frontmatter Hugo

---

## Phase 3: Structure des routes et routing i18n
**Status:** ✅ DONE
- [x] Définir la convention de routing : `/posts/[slug]` (FR) + `/en/posts/[slug]` (EN)
- [x] Créer la route homepage `/` (liste des posts FR)
- [x] Créer la route `/en` (liste des posts EN)
- [x] Créer la route `/posts/[slug]` (post FR)
- [x] Créer la route `/en/posts/[slug]` (post EN)
- [x] Créer la route `/about` et `/en/about`
- [x] Mettre en place un helper `useLocale()` ou un layout racine gérant la locale
- [x] Lien de switch de langue (FR ↔ EN) dans le header

**Notes:**
- Routes définies via `routes.ts` config (pas de file-based routing automatique)
- Convention: routes FR à la racine, routes EN préfixées `/en/`
- `app/lib/locale.ts` expose `useLocale()` (détection URL) et `getAlternateUrl()` (switch FR↔EN)
- 404 via `throw new Response(...)` (évite `data()` déprécié)
- About pages = stubs pour l'instant (contenu migré en Phase 5)
- typecheck + build passent sans erreurs

---

## Phase 4: Layout et composants UI de base
**Status:** ✅ DONE
- [x] Créer le layout racine (`root.tsx`) avec `<html>`, `<head>`, `<body>`
- [x] Composant `Header` : titre du blog + navigation (Posts, About, GitHub)
- [x] Composant `Footer` : copyright, licence CC BY-NC 4.0
- [x] Composant `PostCard` : thumbnail + titre + date + tags pour la liste
- [x] Composant `PostLayout` : layout d'un article (titre, date, tags, contenu, image featured)
- [x] CSS de base (Tailwind CSS — prose styles custom pour le contenu article)
- [x] Favicon et manifest (`public/favicon.ico`, `public/site.webmanifest`)
- [ ] Composant `TableOfContents` : généré depuis les headings du MDX (reporté à Phase 5+)

**Notes:**
- Components in `app/app/components/`: Header, Footer, PostCard, PostLayout
- Header uses `useLocale()` internally — locale-aware nav and language switch
- Root layout (`root.tsx`) wraps all pages with Header + `<main max-w-3xl>` + Footer
- Prose styles written as custom CSS in `app.css` (no @tailwindcss/typography needed)
- TableOfContents deferred — not critical for v1
- `public/site.webmanifest` added and linked in root.tsx
- typecheck ✓ build ✓

---

## Phase 5: Migration du contenu
**Status:** ✅ DONE
- [x] Copier les 7 posts depuis `exampleSite/content/posts/` en adaptant au format MDX si besoin
- [x] Migrer les images de chaque post dans `public/posts/[slug]/`
- [x] Migrer l'avatar (`public/images/avatar.png`)
- [x] Migrer la page About (`index.fr.md`) — route /about et /en/about
- [x] Vérifier le rendu de chaque post (images, code, formatting)
- [x] Vérifier les images `featured-image` de chaque post
- [x] Gérer les blocs Mermaid (client-only render si SSR-unsafe)

**Notes:**
- 6 posts copiés dans `app/content/posts/` (bad_tools déjà existant + 5 nouveaux)
- Posts: llm-feedback-part-1 (FR only), llm-feedback-part-2 (FR only), llm-genius (FR+EN), recrutement (FR only), with-elixir (FR only)
- Images copiées dans `public/posts/[slug]/` — inline images référencées par chemins relatifs (ex: `vibe1.png`) résoudront correctement depuis `/posts/[slug]/`
- `en/about` page: `exampleSite/content/about/index.en.md` est le contenu du thème LoveIt, pas du blog → pas de vraie page EN pour l'about (hors scope)
- About FR migrée: `app/content/about/index.fr.md` + `getAboutPage()` dans `posts.ts` + loader dans `about.tsx`
- Avatar: `public/images/avatar.png`
- shape_mode et dette.md exclus (hors scope)
- Relative image paths fixed: `markdownToHtml(content, slug)` does post-processing regex on `<img src="...">` to rewrite relative paths to `/posts/${slug}/filename`
- No Mermaid code blocks found in posts — only text mentions of "mermaid" — no special handling needed

---

## Phase 6: SEO
**Status:** ✅ DONE
- [x] Composant `<Meta>` réutilisable injecté via `<Links>` React Router
- [x] `<title>` et `<meta name="description">` dynamiques par page
- [x] Open Graph tags (`og:title`, `og:description`, `og:image`, `og:type`)
- [x] Twitter Card tags
- [x] `canonical` URL sur chaque page
- [x] `hreflang` alternates (FR ↔ EN) sur les pages bilingues
- [x] Structured data JSON-LD (type `Article`) sur les posts
- [x] Structured data JSON-LD (type `Person`) sur la page About
- [x] Générer `sitemap.xml` (via loader ou script de build)
- [x] Générer `robots.txt`

**Notes:**
- Approche: helper `app/lib/seo.ts` avec `buildPageMeta()` et `buildPostMeta()` — fonctions retournant des tableaux de MetaDescriptor React Router v7
- OG, Twitter, canonical, hreflang, JSON-LD tous dans le `meta()` export de chaque route (via `{ tagName: "link", ... }` et `{ "script:ld+json": {...} }`)
- `hasPostLocale(slug, locale)` ajouté dans `posts.ts` pour vérifier l'existence d'un post en langue alternative — hreflang alternatif ajouté seulement si la version existe
- `SITE_URL = "https://rdesousa.fr"`, `DEFAULT_OG_IMAGE = avatar.png` (pas de og-image dédiée pour l'instant)
- typecheck ✓ build ✓
- `sitemap.xml`: route loader `routes/sitemap[.xml].ts` — liste toutes les URLs (static + posts FR/EN) avec xhtml:link alternates pour les posts bilingues; Content-Type application/xml; Cache-Control 1h
- `robots.txt`: route loader `routes/robots[.txt].ts` — Allow: *, Sitemap: https://rdesousa.fr/sitemap.xml; Cache-Control 24h
- Routes enregistrées dans `routes.ts`: `sitemap.xml` et `robots.txt`

---

## Phase 7: Déploiement Vercel
**Status:** 🔄 IN_PROGRESS
- [ ] Connecter le repo GitHub à Vercel
- [ ] Configurer les variables d'environnement si nécessaires
- [ ] Vérifier la détection automatique du framework ou configurer manuellement
- [ ] Tester le build Vercel (preview deployment)
- [ ] Vérifier les routes SSR et les assets statiques en production
- [ ] Configurer le domaine `rdesousa.fr` sur Vercel
- [x] Vérifier les redirects (anciens slugs Hugo → nouveaux slugs si différents)
- [ ] Tester le score Lighthouse (Performance, SEO, Accessibility)

**Notes:**
- Slugs identiques entre Hugo et React Router — seule différence : les trailing slashes (Hugo: `/posts/slug/`, RR: `/posts/slug`)
- Trailing slash redirect implémenté dans `root.tsx` loader (301) : strip le `/` final sur toutes les URLs sauf `/`
- typecheck ✓ build ✓
