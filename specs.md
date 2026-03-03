# Specs — Migration Hugo → React Router v7

## Context

Blog personnel de Roberto De Sousa (rdesousa.fr), actuellement construit avec Hugo (thème LoveIt) et hébergé sur Netlify. Le blog couvre des sujets tech (Elixir, LLM/IA) et management (QVCT, recrutement). Il est bilingue FR/EN.

Le thème Hugo LoveIt impose des contraintes fortes : difficile à personnaliser, peu de contrôle sur le SEO (balises meta, structured data, sitemap), et dépendance à un thème tiers qui évolue peu. Le rendu statique Hugo est rigide dès qu'on veut du comportement dynamique.

## Goal

Migrer le blog vers une stack moderne :
- **React Router v7** (framework mode, SSR/SSG hybride)
- **Hébergement Vercel** (edge rendering, meilleur support Next-gen)
- **Contrôle total sur le SEO** : meta tags, Open Graph, Twitter Cards, structured data (JSON-LD), sitemap.xml, robots.txt
- Reproduire fidèlement tout le contenu existant (7 posts + About page)
- Conserver le support MDX pour les posts (avec code highlighting, Mermaid, images)

## Constraints

- **Contenu** : 7 posts markdown existants + page About bilingue (FR/EN) — tout doit être migré
- **Assets** : images par post dans des dossiers dédiés, avatar, favicon, og-image
- **Bilingue** : FR (défaut) + EN, URLs séparées (`/about` vs `/en/about`, ou i18n routing)
- **Vercel** : déploiement via `vercel.json` ou convention automatique, adapter + serverless
- **Pas de CMS** : contenu en fichiers MDX locaux, pas de base de données
- **Pas de Algolia** pour commencer : la recherche est hors scope v1
- **Dépendances choisies** : React Router v7, MDX, Shiki (syntax highlighting), remark-mermaid ou similaire

## Hypotheses

- React Router v7 en framework mode (avec Vite) permet du SSG pour les posts et SSR pour les pages dynamiques
- Vercel détecte automatiquement React Router v7 ou nécessite un adapter `@react-router/vercel`
- MDX + frontmatter (gray-matter ou vfile) suffit pour parser le contenu Hugo existant sans modifications majeures
- Le routing i18n peut être géré via des conventions de fichiers (`/en/posts/[slug]` vs `/posts/[slug]`)
- Les images statiques peuvent être servies depuis `public/` sur Vercel avec optimisation via `<img>` standard (pas de next/image)

## Unknowns

- Adapter Vercel officiel pour React Router v7 : stable ? API finale ?
- Stratégie i18n : fichiers séparés (`index.fr.md` / `index.en.md`) ou frontmatter `lang` + routing ?
- Gestion des diagrammes Mermaid côté serveur vs client (SSR-safe ?)
- Les fichiers `.excalidraw` dans llm-feedback-part-2 : les afficher ou ignorer ?
- Light Gallery (plugin JS Hugo) : remplacer par une lib React ou supprimer ?
- SEO : structured data JSON-LD pour les articles (Article, BreadcrumbList, Person) — scope v1 ?

## Out of Scope

- Recherche Algolia (pas en v1)
- Commentaires
- Analytics (Google Analytics, Plausible, etc.)
- Mode sombre/clair toggle (peut être ajouté après)
- RSS feed (v2)
- Système de partage social (boutons share)
- Migration du thème LoveIt visuellement identique (on fait un design propre from scratch)
- Page Categories / Tags (v2)
- Le post `shape_mode/` (draft/incomplet, hors scope)
- Le fichier `dette.md` (brouillon non publié)
