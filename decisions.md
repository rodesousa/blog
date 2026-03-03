# Decisions

**Adapter Vercel pour React Router v7** — Le package correct est `@vercel/react-router` (publié par Vercel), pas `@react-router/vercel` (n'existe pas sur npm). Le preset `vercelPreset()` est importé depuis `@vercel/react-router/vite` et ajouté dans `react-router.config.ts`. Rejeté: `@react-router/vercel` (404 sur npm), configuration manuelle via `vercel.json` (moins riche, pas de bundle splitting per-route).

**Emplacement du projet React Router** — Créé dans `app/` à la racine du repo blog Hugo existant. Le repo contient donc les deux stacks pendant la migration. Rejeté: créer un repo séparé (complexifie le workflow), remplacer directement la racine (risque de casser l'existant pendant la migration).
