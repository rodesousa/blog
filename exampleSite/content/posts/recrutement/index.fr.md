---
weight: 1
title: "Est-ce qu’on mesure vraiment la compétence technique avec une épreuve de livecoding ?"
date: 2025-07-27T15:34:40+08:00
lastmod: 2025-07-27T15:34:40+08:00
draft: false
author: "Roberto"
description: "Est-ce qu’on mesure vraiment la compétence technique avec une épreuve de livecoding ?"
images: []
resources:
- name: "featured-image"
  src: "featured-image.png"
tags: ["recrutement", "organisation", "management"]
categories: ["recrutement", "organisation", "management"]

lightgallery: true
---

---

Je vois le processus de recrutement technique comme **la vitrine de l'organisation de l'équipe**. C’est la première chose que le candidat perçoit : le type d’interactions, les mots utilisés pour décrire la stack, l’ambiance, les outils.

## Recrutement tech : une suite d'étapes qui peuvent être mal calibrées

En grossissant un peu le trait, un processus de recrutement tech ressemble à :

- Un entretien RH, *mesure la motivation/l'intérêt*
- **Une session de livecoding, mesure la compétence/technique**
- Discussion *culture-fit*, *mesure la compatibilité*


---

Faisons un focus sur le livecoding en posant la question suivante :

<div style="display: flex; justify-content: center;">

# **Est-ce qu'on mesure vraiment la compétence technique avec une épreuve de livecoding ?**

</div>

---

**IMHO, absolument pas.**

---

Je pense que c'est même un poil blessant. Sur ~ 1h, dans un environnement qui ne reflète en rien les conditions de travail réelles, je ne vois pas comment on peut évaluer sérieusement le niveau technique d'un candidat.

J'ai passé beaucoup d'entretien, même quand je ne cherchais pas. Une sorte de challenge. Mais depuis 4/5 ans, dès que le test du livecoding arrive, je suis extrêmement frustré.

## Il était une fois

Début 2025, un call avec un CTO plutôt agréable, on convient d'une date d'un test technique en présentiel. Je suis reçu par le CTO, café, 5 min plus tard, on me donne un TD à faire (que j'avais trouvé sur github avant). On m'installe devant un écran, dans un open space, avec d'autres devs à côté. J'ai 1h pour le faire, je suis un peu malade, mais ça va le faire. 1h après, on relève ma copie. Je présente mon code devant 2 devs + le CTO. Je suis nonchalant, agacé de passer ce test.

Avant de présenter mon code, j'apprends que ce test est le premier de l'après midi, et après, il y a un test SQL. Je suis un peu agacé, mais bon, il n'y a pas mille boites qui font de l'elixir en France.

Ça se passe plutôt bien, au bout de quelques échanges, on discute du fait que j'aurais pu utiliser la fonction `send_after/4` pour résoudre l'un des exos. J'explique que je ne la connais pas, conscient que ma proposition fonctionne, mais qu'il y a mieux, en gros j'ai fait un *trade off*.

On commence à discuter des Genserver, des processus erlang et savoir pourquoi je n'ai pas utilisé `send_after/4`.
Je me braque un peu, car j'ai l'impression que je suis pénalisé pour ne pas connaitre une fonction. On me pose "Qu'est-ce que c'est qu'un [DynamicSupervisor](https://hexdocs.pm/elixir/DynamicSupervisor.html)" (coup de bol j'en ai fait chez Pandascore, Sapiologie et Cohortes). J'ai eu la bonne/mauvaise idée de prétendre que je ne savais pas:

> - "Je ne sais pas"
> - "OK, être un senior et ne pas savoir ça, c'est un no go pour nous. On en reste là, merci Roberto"

2 mins plus tard, je suis dehors.

## Ce que je reproche

Avoir un processus qui mesure la compétence technique sur des exercices, des questions générales, et qui n'a aucun lien avec la réalité d'un développeur, **ce n'est pas sérieux**. Et ce n'est pas sérieux pour le candidat, mais aussi pour l'entreprise. Ce que je reproche c'est **le manque de stratégie**.

Est-ce que le livecoding va dans le sens du besoin d'un recrutement ?

Je pense que non. Si c'était vraiment le cas, alors la meilleure réponse ça serait un freelance. Quelqu'un qui sait déjà coder dans le bon langage, très rapidement opérationnel, indépendant.

### Ne meurs pas sans ton piff

Dans les jeux de combat, une expression très française reprise par des joueurs internationnaux, "le piff". Un piff c'est le moment où un joueur fait une action offensive qui ne fait pas sens dans le cours de la partie. C'est le fait de ne pas respecter le plan de jeu, pour faire un coup qui pourrait surprendre l'adversaire.

Je vois le livecoding comme un piff, pas de stratégie, je sais juste faire une manip (du code) qui pourrait me donner l'avantage sur la partie (l'interview).

### Worst presentation

Vous avez déjà vu des compils de présentation ratée de joueur de football professionnel ? [Top worst presentation ever in football](https://www.youtube.com/shorts/dUk_qb7dYj8?time_continue=69&embeds_referring_euri=https%3A%2F%2Fwww.google.com%2F&source_ve_path=MjM4NTE)

Je trouve que c'est aussi ça le livecoding. Un exercice de jonglage. Alors oui il y a une balle (le code) et un joueur (dev), mais c'est pas ça un joueur de foot (développeur).

## Ce que j'aimerais

**Du sérieux et de la stratégie.**

Un recrutement ça se chiffre en dizaine de milliers d'euros. L'implication d'un mauvais recrutement, dizaine/centaine de milliers d'euros.

Explorons d'autres pistes

### System design

Exercice de construction d'une architecture ou de réponse à un problème dev à faire devant un tableau blanc, [draw.io](https://app.diagrams.net/), [excalidraw](https://excalidraw.com/).

Le processus mesure:

- la conception, la logique
- la validation des fondamentaux
- la capacité d'abstraction
- la compréhension de trade off et leur justification
- la capacité à expliquer, communiquer
- ça peut se faire en pair pour mesurer le travail d'équipe

On n'oublie pas que l'une des mesures les plus intéressantes est **la capacité à aller chercher de l'information**. Devant un énoncé, il est très (trop) intéressant d'avoir d'autres éléments pour mieux quadriller l'énoncé :

> Est-ce que je dois designer l'authentification ?
>
> Combien d'utilisateurs par jour en moyenne ?
>
> Le temps de réponse est important ou ça peut être en async ?

### Présentation d'un projet

Laisser le candidat présenter un projet qu'il a fait. On mesure:

- sa communication, présentation
- est-ce que dans sa présentation il y a des choses qui font sens avec ce qu'on fait
- la capacité à expliquer, communiquer

Accompagner d'une séance de question/réponse technique, c'est parfait. Ça marche vraiment avec les profils très expérimentés ou des experts.

### Cooptation

Retravailler avec un ancien collègue qu'on apprécie, c'est reconstituer un binôme qui fonctionne :

- Déjà validé techniquement
- Confiance renforcée

### Hackathon

Faire un hackathon ça demande un peu plus de taff, mais il y a:

- du code
- de la conception
- des échanges
- des trades-off
- des contraintes

La vie d'un projet quoi. On va chercher à renforcer des synergies, s'inspirer de nouvelles pratiques, etc.


### 11 Mbappé ne fait pas une équipe

J'étais un joueur de MMORPG, et j'ai appris très vite que si tu mets que des dps (les personnages qui doivent faire un maximum de dégâts) est rarement une bonne tactique. Pour une question d'efficience et de survie, il faut une **synergie**.

J'ai longtemps pensé que tout le monde devait faire des tests et documenter son code. Ce n'est pas que je ne le pense plus, mais je pense qu'il faut aussi s'appuyer sur les forces. Par exemple, je crois plus au [game day](https://medium.com/paris-chaos-engineering-community/un-gameday-dans-ma-team-un-besoin-de-transmettre-du-savoir-faire-42682477943e) comme outil pédagogique pour responsabiliser et préparer les situations difficiles à venir que d'exiger que toute l'équipe adopte certaines pratiques, en gros, **jouer en équipe**.

C'est pour ça que je pense que l'équipe doit participer à définir le processus de recrutement et écrire la fiche de poste. Collectivement, ils connaissent :

- les forces et les faiblesses
- les sujets a exploré
- leur méthode de travail
- les profils dont ils ont besoin

### Mettre en open source son processus de développement

Je pense que le choix du langage ne devrait pas être pris en compte dans le processus de recrutement, c'est une erreur. C'est trop précieux d'avoir l'intérêt d'un développeur en dehors de la stack technique.

Saša Jurić dans une suite d'article dans [Towards Maintainable Elixir](https://medium.com/@sasa.juric) parle de la nécessité de construire un processus de développement. Quelles sont les méthodes de travail qu'on a envie d'avoir ?

Ce qui est structurant dans une équipe, ce sont les méthodes de travail. Publier ce processus permet de partager une culture, d'ouvrir les critères de sélection en dehors des *soft/hard skills*.

**Voici comment on bosse. Si ça t’inspire, viens.**

Edit 1: Pas le seul, [Live coding sucks](https://hadid.dev/posts/living-coding/)
