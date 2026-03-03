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
**Status:** ⏳ PENDING
- [ ] Installer `@mdx-js/rollup` (ou équivalent vite) + plugins remark/rehype
- [ ] Installer `gray-matter` pour parser le frontmatter
- [ ] Configurer Shiki pour le syntax highlighting des blocs de code
- [ ] Configurer `remark-gfm` (tables, strikethrough, task lists)
- [ ] Tester le rendu d'un post existant en MDX
- [ ] Mettre en place le pipeline de lecture des fichiers MDX depuis `content/posts/`
- [ ] Créer un module `lib/posts.ts` exposant `getAllPosts()` et `getPostBySlug(slug)`

**Notes:**

---

## Phase 3: Structure des routes et routing i18n
**Status:** ⏳ PENDING
- [ ] Définir la convention de routing : `/posts/[slug]` (FR) + `/en/posts/[slug]` (EN)
- [ ] Créer la route homepage `/` (liste des posts FR)
- [ ] Créer la route `/en` (liste des posts EN)
- [ ] Créer la route `/posts/[slug]` (post FR)
- [ ] Créer la route `/en/posts/[slug]` (post EN)
- [ ] Créer la route `/about` et `/en/about`
- [ ] Mettre en place un helper `useLocale()` ou un layout racine gérant la locale
- [ ] Lien de switch de langue (FR ↔ EN) dans le header

**Notes:**

---

## Phase 4: Layout et composants UI de base
**Status:** ⏳ PENDING
- [ ] Créer le layout racine (`root.tsx`) avec `<html>`, `<head>`, `<body>`
- [ ] Composant `Header` : titre du blog + navigation (Posts, About, GitHub)
- [ ] Composant `Footer` : copyright, licence CC BY-NC 4.0
- [ ] Composant `PostCard` : thumbnail + titre + date + tags pour la liste
- [ ] Composant `PostLayout` : layout d'un article (titre, date, tags, contenu, image featured)
- [ ] Composant `TableOfContents` : généré depuis les headings du MDX
- [ ] CSS de base (Tailwind CSS ou CSS modules — à choisir)
- [ ] Favicon et manifest (`public/favicon.ico`, `public/site.webmanifest`)

**Notes:**

---

## Phase 5: Migration du contenu
**Status:** ⏳ PENDING
- [ ] Copier les 7 posts depuis `exampleSite/content/posts/` en adaptant au format MDX si besoin
- [ ] Vérifier le rendu de chaque post (images, code, formatting)
- [ ] Migrer les images de chaque post dans `public/posts/[slug]/`
- [ ] Migrer la page About bilingue (`index.fr.md` + `index.en.md`)
- [ ] Migrer l'avatar (`public/images/avatar.png`)
- [ ] Vérifier les images `featured-image` de chaque post
- [ ] Gérer les blocs Mermaid (client-only render si SSR-unsafe)

**Notes:**

---

## Phase 6: SEO
**Status:** ⏳ PENDING
- [ ] Composant `<Meta>` réutilisable injecté via `<Links>` React Router
- [ ] `<title>` et `<meta name="description">` dynamiques par page
- [ ] Open Graph tags (`og:title`, `og:description`, `og:image`, `og:type`)
- [ ] Twitter Card tags
- [ ] `canonical` URL sur chaque page
- [ ] `hreflang` alternates (FR ↔ EN) sur les pages bilingues
- [ ] Structured data JSON-LD (type `Article`) sur les posts
- [ ] Structured data JSON-LD (type `Person`) sur la page About
- [ ] Générer `sitemap.xml` (via loader ou script de build)
- [ ] Générer `robots.txt`

**Notes:**

---

## Phase 7: Déploiement Vercel
**Status:** ⏳ PENDING
- [ ] Connecter le repo GitHub à Vercel
- [ ] Configurer les variables d'environnement si nécessaires
- [ ] Vérifier la détection automatique du framework ou configurer manuellement
- [ ] Tester le build Vercel (preview deployment)
- [ ] Vérifier les routes SSR et les assets statiques en production
- [ ] Configurer le domaine `rdesousa.fr` sur Vercel
- [ ] Vérifier les redirects (anciens slugs Hugo → nouveaux slugs si différents)
- [ ] Tester le score Lighthouse (Performance, SEO, Accessibility)

**Notes:**
