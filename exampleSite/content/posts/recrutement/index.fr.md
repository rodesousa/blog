---
weight: 1
title: "Mon problème avec les processus de recrutement de type livecoding ou TP à la maison"
date: 2025-07-27T15:34:40+08:00
lastmod: 2025-07-27T15:34:40+08:00
draft: false
author: "Roberto"
description: "Mon problème avec les processus de recrutement de type livecoding ou TP à la maison"
images: []
resources:
- name: "featured-image"
  src: "featured-image.png"
tags: ["recrutement", "organination", "management"]
categories: ["recrutement", "organination", "management"]

lightgallery: true
---

---

Je vois le processus de recrutement technique comme **la vitrine de l'organisation de l'équipe**. C’est la première chose que le candidat perçoit : le type d’interactions, les mots utilisés pour décrire la stack, l’ambiance, les outils... Et dans la très grande majorité des cas, **cette vitrine est tristement décevante**.

## Recrutement tech : une suite d'étapes mal calibrées

En grossissant un peu le trait, un processus de recrutement tech ressemble à :

- Un entretien RH, *mesure la motivation/l'intérêt*
- Une session de livecoding, *mesure la compétence/technique*
- Discussion *culture-fit*, *mesure la compatibilité*

---

Est-ce qu'on mesure vraiment la compétence technique avec une épreuve de livecoding ou TP à la maison ?

---

**Non, définitivement non.**

---

C'est même un poil insultant de le penser. Sur ~ 1h, dans un environnement qui ne reflète en rien les conditions de travail réelles... il est impossible d’évaluer sérieusement le niveau technique de cette manière.

---

Au fond, ce qu’on mesure, c’est **la capacité à suivre des instructions sur une tâche arbitraire**.

---

Avant j'aimais passer des entretiens, j'en ai même passé quand je ne cherchais pas. Une sorte de challenge. Mais depuis 4/5 ans, dès que le test du live coding arrive, j'ai la boule au ventre. Pas que j'ai peur, mais parce qu'**on ne me prend pas au sérieux**. Je n'aime pas aller dans un endroit où on ne me prend pas au sérieux.

## La der des ders

### Histoire

Début 2025, un call avec un CTO plutôt agréable, on convient d'une date d'un test technique en présentiel. Je suis reçu par le CTO, café, 5 min plus tard, on me donne un TD à faire (que j'avais trouvé sur github avant). On m'installe devant un écran, dans un open space, avec d'autres devs à côté. J'ai 1h pour le faire, je suis un peu malade, mais ça va le faire. 1h après, on relève ma copie. Je présente mon code devant 2 devs + le CTO. Je suis nonchalant, agacé de passer ce test. 

Avant de présenter mon code, j'apprends que ce test est le premier de l'après midi, et après il y a un test SQL. Et je ne suis pas très loin du rage quit, mais bon, il n'y a pas mille boites qui font de l'elixir en France.

Ça se passe plutôt bien, au bout de quelques échanges, on discute du fait que j'aurais pu utiliser la fonction `send_after/4` pour résoudre l'un des exos. J'explique que je ne la connais pas, mais que j'ai fait un *trade off*, conscient qu'il y avait mieux, mais qu'avec la contrainte de temps, j'ai choisi une autre solution. 

On commence à discuter des Genserver, des processus erlang et savoir pourquoi je n'ai pas utilisé `send_after/4`.
Je me braque un peu car j'ai l'impression qu'on me demande de réciter un cours sur la gestion des processus. On me pose "Qu'est-ce que c'est qu'un [DynamicSupervisor](https://hexdocs.pm/elixir/DynamicSupervisor.html)". J'en ai fait chez Pandascore, Sapiologie et Cohortes. À partir de là je suis complétement braqué, je finis par décider de répondre:

> - "Je ne sais pas"
> - "OK, être un senior et ne pas savoir ça, c'est un no go pour nous. On en reste là, merci Roberto"

2 mins plus tard, je suis dehors.

### Ce que je reproche

Ce n'est pas assez sérieux.

Je considère que recruter fait partie du processus de pre-onboarding. Et quand le budget que représente un recrutement senior (rien que pour les frais d'agences, frais de plateformes et des frais indirects comme le temps de mobilisation de personne, entre 15 et 30k), ce manque d’investissement est incompréhensible.

Se focaliser sur un exercice, qui ne représente en rien la réalité d'un développeur, pour avoir une estimation technique d'un candidat, c'est ...

Mais, je remercie cette entreprise pour m'avoir fait comprendre quelque chose:

---

# "**C'est la dernière fois que je passe un entretien de type livecoding ou TP à la maison**."

---

## Le recrutement se joue sur des jets de dé

En > 10 ans, j'ai participé trop peu à des réunions de stratégie pour le recrutement. Trop souvent j'ai vu, et fait:

- des recrutements sans préparation
- des fiches de postes non écrites par les devs
- des CV donnés quelques heures avant
- des "on verra bien si quelqu'un match"
- une délégation de la stratégie aux équipes RHs

---
# "**Mais est-ce qu’on veut vraiment recruter sur de la chance ?**"

---

Je pense que très peu d'entreprise assumerait de suivre une stratégie basée sur la chance. Je crois, de manière un peu taquine, que la stratégie majoritaire, oscille entre :

> "No strategy" et "Looking for a unicorn".

Et comme dans beaucoup de secteurs, les développeurs, "les petites mains", n'ont pas assez (ou pas du tout pour la majorité des cas) la main sur les processus organisationnels.

N'oublions pas que:

- 73 % des développeurs déclarent avoir déjà un épisode de *burn‑out*, [The State of Developer Ecosystem 2023](https://blog.jetbrains.com/team/2023/11/20/the-state-of-developer-ecosystem-2023/.)
- 83 % développeurs ont eu un sentiment de *burn-out*, [State of Developer Wellness report 2024](https://www.developernation.net/blog/state-of-developer-wellness-report-2024)
- Le *burn-out* phénomène épidémique dans l'IT, [Developer burnout has reached 'epidemic' proportions — and manual toil is a key factor](https://www.itpro.com/software/development/developer-burnout-has-reached-epidemic-proportions-and-manual-toil-is-a-key-factor)
## Worst presentation

Vous avez déjà vu des compils de présentation ratée de joueur de football professionnel ? [Top worst presentation ever in football](https://www.youtube.com/shorts/dUk_qb7dYj8?time_continue=69&embeds_referring_euri=https%3A%2F%2Fwww.google.com%2F&source_ve_path=MjM4NTE)


Le livecoding c'est ça. On demande à un dev de "jongler" dans des conditions qui ne ressemblent en rien avec la réalité. C'est du show, pas une mise en situation.

Mais qui pense encore que la principale activité d'un dev c'est écrire du code ? Lire du code, le comprendre est nettement plus présent.

J'imagine Vinicius (l'un des meilleurs joueurs de ces dernières années pour ceux du fond) qui après sa présentation ARCHI NULLE se prend un mail:

> OK, être un footballeur pro et ne pas savoir jongler, c'est un no go pour nous. On en reste là, merci Vini

## Les alternatives

### System design

Exercice de construction d'une architecture ou de réponse à un problème dev à faire devant un tableau blanc, [draw.io](https://app.diagrams.net/), [excalidraw](https://excalidraw.com/).

Le processus mesure:

- la conception, la logique
- la validation des fondamentaux
- la capacité d'abstraction
- la compréhension de trade off et leur justification
- la capacité à expliquer, communiquer
- ça peut se faire en pair avec un dev de l'équipe pour mesurer le travail d'équipe

On n'oublie pas que l'une des mesures les plus intéressantes est comment le candidat va aller chercher de l'information. Devant un énoncé, il est très (trop) intéressant d'avoir d'autres éléments pour mieux quadriller l'énoncé :

> Est-ce que je dois designer l'authentification ?
>
> Combien d'utilisateurs par jour en moyenne ?
>
> Le temps de réponse est important ou ça peut être en async ?


### Présentation d'un projet

Ce n'est pas l'inverse du *system design* mais en tout cas c'est une approche un peu inversée. Laisser le candidat présenter un projet qu'il a effectué permet de mesurer:

- sa communication, présentation
- est-ce que dans sa présentation il y a des choses qui font sens avec ce qu'on fait
- la capacité à expliquer, communiquer

Accompagner d'une séance de question/réponse technique, c'est parfait. De mon expérience, ça marche vraiment avec des profils très expérimentés ou des experts sur un sujet.

### Cooptation

Retravailler avec un ancien collègue qu'on apprécie, c'est reconstituer un binôme qui marche. Cela équivaut déjà à une validation technique et culturelle. Pourquoi changer une équipe qui gagne ?

### Hackathon

Faire un hackathon mais en imposant un dev de la boîte dans chaque groupe.

Il y a du code, de la conception, des échanges, des trades-off, des contraintes, la vie d'un projet d'un quoi.

Valider une personne lors d'un hackathon, c'est forcément un premier *green flag*.

## Un recrutement ça se travaille dans le long terme

### Formation

Lors d'un meetup Ocaml chez l'Inria j'ai entendu une phrase que j'ai beaucoup aimé:

> Recruter un dev c'est simple, s'il fait du Ocaml c'est qu'il est fort

Je pense que le choix du langage ne devrait pas être pris en compte dans le processus de recrutement, au mieux le paradigme (OOP, FP). 

La formation doit répondre dans ce cas de figure, SURTOUT pour les seniors. C'est beaucoup trop précieux pour une entreprise d'avoir un intérêt d'un senior en dehors de la stack technique. C'est des armes supplémentaires, une vision plus élargie etc. Pas sur qu'attendre le messi soit la meilleure stratégie.

### 11 Mbappé ne fait pas une équipe

J'étais un joueur de MMORPG (Ragnarok, Guild Wars, Aion), j'ai appris très vite que si tu mets que des dps (les personnages qui doivent faire un maximun de dégats) est rarement une bonne tactique. Pour une question d'efficience et de survie il faut une **synergie**.

J'ai longtemps pensé que tout le monde devait faire des tests et documenter son code. C'est pas que je ne le pense plus, mais je pense qu'il faut s'appuyer sur les forces des membres d'une équipe et trouver une synergie. Si on oblige quelqu'un à faire quelque chose qu'il ne croit pas, cela réduit ses capacités et ça ne vaut pas le coup.

Par exemple, je crois plus au [game day](https://medium.com/paris-chaos-engineering-community/un-gameday-dans-ma-team-un-besoin-de-transmettre-du-savoir-faire-42682477943e) comme outil pédagogique pour responsabiliser et préparer les situations difficiles à venir que d'exiger que toute l'équipe adopte certaines pratiques.

C'est pour ça que je pense que **l'équipe doit participer** à définir le besoin en recrutement et écrire la fiche de poste. Collectivement, ils connaissent les forces et les faiblesses et seront les meilleurs à aiguiller le besoin. Ce qui compte, c'est la complémentarité des profils avec la cohérence de la stratégie tech que le CTO mène.


