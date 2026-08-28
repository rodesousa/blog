---
weight: 1
title: "J'arrête Claude"
date: 2026-08-28T09:00:00+02:00
lastmod: 2026-08-28T09:00:00+02:00
draft: false
author: "Roberto"
description: "J'arrête mon abonnement Claude à 100€ : le prix cognitif et la dépendance derrière la vélocité des modèles frontier, et le chemin vers une IA locale."
images: []
resources:
- name: "featured-image"
  src: "jarrete.png"
tags: ["Claude Code", "AI"]
categories: ["AI"]

lightgallery: true
---

Un peu comme la clope, c'est dur d'arrêter. Et pour moi, Claude est devenu une addiction. C'est ma deuxième tentative d'arrêt, oxalá c'est la bonne.

## Le problème

En dehors du fait que Dario Amodei est un gros caca et que l'ensemble du **cycle de vie** (publicité pour [sapiologie.com](https://www.sapiologie.com/)) des modèles d'Anthropic (et des autres) est une catastrophe écologique et coloniale, ce qui est aussi dérangeant, c'est la partie cognitive.

<div style="display: flex; justify-content: center;">
  <img src="cognition.png" alt="Cognition — Wikipédia">
</div>

Je pense que c'est la première fois que je pratique quotidiennement quelque chose dans lequel j'ai si peu appris. Je ne dis pas que je n'ai rien appris. Mais si je fais le rapport entre le temps pratiqué, l'usage quotidien et l'expertise acquise, je suis déçu du résultat. C'est quoi le résultat ?

- Je sais prompter
- Je fais plus de tests
- Les plus gros défis techniques sont tous résolus en moins de 24h
- Certains articles/code qui me paraissaient chiants à lire sont devenus faciles à comprendre (merci Feynman) et à réutiliser

Principalement, j'ai augmenté ma vélocité de production. Je ne vais pas faire le pas content, maiiiiis je suis très dépendant de Claude sur deux aspects.

### Claude Code

### Velocity is your God

<div style="display: flex; justify-content: center;">
  <img src="claude-status.png" alt="Claude Code status">
</div>

Aie aie aie. Quand Claude Code est down, ce n'est pas que je ne peux plus coder. Mais j'ai la flemme : *"je vais passer plus de temps à lire du code qu'à avancer dans ce que j'ai à faire. J'ai qu'à attendre que Claude Code revienne."*

Alors ça pourrait être un problème de connaissance de mon code, mais j'écris souvent mes specs. J'ai essayé plein de formats. J'ai créé un [skill](https://github.com/rodesousa/ai-best-practices/blob/master/skills/doc-project/SKILL.md) qui m'aide à sketcher. En ce moment, je suis plus d'humeur à faire des graphs, alors j'ai codé un [excalidraw qui produit du markdown](https://github.com/rodesousa/plomberie). Pour ce qui est de l'après-code, je me fais beaucoup plus de PRs à moi-même pour valider petit à petit le code.

Donc je connais mon code, mais je n'ai pas la vraie architecture dans ma tête. Les concepts sont là, les noms de fichiers sont là, mais pas l'expérience de l'avoir écrit. Très souvent, quand un bug survient, j'ai soit exactement dans ma tête l'endroit où ça pète, soit *"ah oui, je sais pourquoi ça pète"*. Pourquoi ? Parce que j'ai l'expérience de l'avoir écrit. Comme si j'avais indexé le code dans ma tête.

### Modèles frontier, c'est plus fort que toi !

<div style="display: flex; justify-content: center;">
  <img src="tropfort.png" alt="C'est plus fort que toi">
</div>

Qu'est-ce que c'est fort, les Opus, Sonnet. Un abonnement à 100€ et tu n'as plus de problème de dev. Tu peux prompter comme un crado, osef. Tu peux reprompter après pour corriger, pour ajouter des tests, pour ajouter de la sécurité, pour refactorer. Après un temps à mieux gérer les tokens, le dev n'est plus jamais un problème.

Un peu comme quand tu rentres chez toi, t'as la dalle : il y a un japonais, un libanais, un grec dans ta rue. Mais bien sûr qu'il y a beaucoup de chances que tu puisses prendre quelque chose.

Le résultat est là, et ça me donne envie de faire plus, toujours plus. Comme une soif jamais étanchée. Et il n'y a pas longtemps, certains tweets de [@GeoffreyHuntley](https://twitter.com/GeoffreyHuntley) et [@ThePrimeagen](https://twitter.com/ThePrimeagen) m'ont fait réfléchir :

<div style="display: flex; justify-content: center;">
  <img src="nvim.png" alt="Tweet ThePrimeagen - Is making your own harness 2026 the neovim config of 2022?">
</div>

<div style="display: flex; justify-content: center;">
  <img src="jido.png" alt="Tweet Jido 2.0 - 1575 agents indexent un codebase en 7 secondes">
</div>

<div style="display: flex; justify-content: center;">
  <img src="flame.png" alt="Tweet flamegraph des context windows">
</div>

Moi qui avais passé tellement de temps sur mes outils, je me suis aperçu que Claude est tellement fort que je ne me pose même plus la question de l'outil. Juste, je fais.

Un peu comme si mes compétences de cuisine étaient devenues obsolètes parce que dans ma rue, le choix et les prix sont devenus tellement attrayants que juste, je commande.


## Ma réponse

C'est peut-être bizarre de dire ça, mais je ressens que Claude Code m'a aliéné. Il n'y a plus d'effort, tout peut être shapé rapidement et avec beaucoup de qualité. Il n'y a plus de défi technique (dans l'informatique de gestion en tout cas), et c'est dur d'avoir une rigueur sur son travail. Tout le monde a des dizaines de skills et des dizaines de MCP, mais bordel, écrire du markdown toute la journée...

En fait, c'est un sentiment qui ressemble à celui que j'ai eu quand le devops m'a dégoûté, car pour beaucoup de décideurs et de recruteurs, devops c'était *"écrire du yaml toute la journée"*.

Je ne veux plus payer le prix de ma perte cognitive.

Donc ma réponse est de continuer avec de l'IA, parce que c'est un outil incroyable pour plein d'aspects, mais d'arrêter d'être soumis à des mastodontes de l'IA comme Anthropic. (Anticipons aussi quand le prix du token deviendra très très cher)

J'ai pour objectif d'être full IA locale pour le dev et de reprendre du contrôle sur mes outils (je suis en train de prototyper mon propre [harness](https://github.com/rodesousa/elixness)). Mais pour l'instant, je suis dans l'étape où je suis full Hermes, 20€, sous DeepSeek-V4-Flash. Wait and see.
