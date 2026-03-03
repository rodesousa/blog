---
title: "À propos"
description: "À propos de Roberto De Sousa, ingénieur et manager."
---

**Je suis Roberto De Sousa, je suis développeur, + de 10 ans d'expérience.** J'ai navigué entre des postes de dev (back/front), de SRE/devops/archi jusqu'à lead/CTO. Très, très grand fan des langages de programmation fonctionnel mais je suis agnostique des langages.

La stack que j'utilise le plus souvent:

- **Programming language**: Elixir/Typescript/Python
- **Back**: Phoenix
- **API**: FastAPI
- **Front**: Phoenix, Next.js
- **DB**: Postgres, Typesense, Meilisearch, DuckDB
- **AI**: Claude Code

J'ai réalisé en 2019, que le management Agile n'était pas du tout ce qu'il prétendait être. J'ai accompagné [Vincent Cornet](https://www.linkedin.com/in/vincent-cornet-030ab387/) dans un mémoire sur une critique de l'Agile qui m'a intéressé à la sociologie du travail et puis à d'autres types d'organisations. J'ai écrit des articles et pu mettre en place des alternatives comme [shape up](https://basecamp.com/shapeup/shape-up.pdf), [game day](https://medium.com/paris-chaos-engineering-community/un-gameday-dans-ma-team-un-besoin-de-transmettre-du-savoir-faire-42682477943e), et pleins d'autres choses.

Depuis 2023 je me suis lancé dans l'entreprenariat, j'ai cofondé [cohortes](https://www.cohortes.co/), une solution de récolte et d'analyse AI de témoignage de salarié en texte libre pour aider les acteurs de l'amélioration des conditions de travail. J'ai la chance de faire partie de [l'Agora DODES](https://agora-dodes.fr/) et d'être proche des mouvements de [l'ESS](https://www.ess-france.org/) de la [QVCT](https://www.anact.fr/qualite-de-vie-et-des-conditions-de-travail).

Je suis arrivé au bout de ce qu'on cherchait, donc je recherche une nouvelle aventure, en CDI, soit en tant que CTO *hands-on*, early stage, < 50 personnes ou un poste de head of engineering, staff senior engineer.

💡 **Ce qui m'anime : poser une culture tech saine et très ambitieuse.**
- 🙅‍♂️ Pas de culture du rush.
- 🙅‍♂️ Les secteurs de la finance, assurance, banque ne m'intéresse pas
- 🙅‍♂️ Pas de culture du micro management.
- 🙅‍♂️ Pas d'approche industrielle où les devs enchaînent des tickets sans respirer.
- 🚀 Approche projet plutôt que ticket.
- 🚀 Une vraie place pour la veille/formation.
- 🚀 Responsabilisation plutôt que surveillance.
- 🔧 Poser une vision tech solide, capable de guider des choix produit à long terme
- 🔧 Faire grandir les équipes vers l'autonomie, la qualité et la curiosité technique
- 🔧 Travailler main dans la main avec le produit ET les sales pour livrer vite ET bien
- 🔥 ESS, SCOP gros plus
- 🔥 Shape up
- 👎 [Le live coding est-il vraiment une méthode pertinente dans le processus de recrutement ?](/posts/recrutement)

**dessroberto [at] gmail [dot] com**

---

## Expérience

**Depuis Novembre 2023 - Cofondateur & CTO** (Cohortes)

Une solution de récolte et d'analyse AI de témoignage de salarié en texte libre pour aider les acteurs de l'amélioration des conditions de travail. Incubé chez Paris&Co et Willa

+ Construction produit & stratégie
  - Animation d'ateliers de cadrage avec les premiers utilisateurs (syndicats, psychologue du travail, consultants QVCT)
  - Définition de la roadmap produit et technique
+ Développement de partenariats stratégiques
  - Co-rédaction et obtention de financements publics (subventions BPI)
  - Pitchs et présentations avec structures publiques et incubateurs
  - Vibe coding/Copilot pour développer rapidement des MVP dédiés aux démos clients, augmentant la conversion prospects → clients
+ Automatisation de la prospection via un MVP IA
  - Hubspot vers Génération et gestion de la prospection via agent AI (cold email, relance, objections)
  - A/B testing sur les approches → taux de réponse multiplié par 2
+ Stack full Elixir (Phoenix, LiveView): développement d'un SaaS
  - Postgres pour la gestion des utilisateurs et des témoignages
  - Typesense pour recherche sémantique via embeddings, intégré à un système RAG pour des réponses contextuelles et enrichies.
  - Orchestration d'agents AI via Oban pour l'analyse automatisée via LLM self-hosted & cloud
  - Réduction de 90 % le temps d'analyse manuelle, donnant plus de temps à l'interprétation des témoignages
+ Formations données à des profils tech et non-tech : prompting, vibe coding, agents IA

**Février 2022 à Novembre 2023 - Lead Tech** (Sapiologie)

ERP ACV & impact social à destination des TPE/PME

+ Expérience fondatrice qui m'a donné le goût d'entreprendre
  - Co-construction produit avec les fondateurs
  - Rencontres régulières avec des clients
  - Mise en place de Shape Up : organisation du travail par cycles projets, meilleure priorisation et d'engagement
+ Tech lead
+ Stack full Elixir (Phoenix, LiveView): développement de l'ERP
  - Réduction du calcul de l'ACV de 90%
  - Encadrement technique, choix d'architecture, gestion de l'infrastructure
  - Définition et maintien de standards qualité
  - Implémentation d'une base Datomic-like sous Postgres, pour un historique temps réel des modifications et gestion de revert
+ Encadrement technique, choix d'architecture, gestion de l'infra

**Juin 2021 à Février 2022 - Lead Infra** (Arkhn)

Rendre la donnée hospitalière interopérable

+ Pilotage de la modernisation des infrastructures
  - Déploiement et gestion d'infra à l'intérieur des hôpitaux (4 hôpitaux, ~ 100 To de data, ~20 services)
  - Scaleway, ansible, nomad
+ Mise en place et diffusion des bonnes pratiques : TDD, CI/CD
+ Organisation de game days sur les processus de déploiement pour améliorer la résilience et former les équipes
+ Optimisation Postgres dans le cadre de la création des datalake : migration de bases volumineuses (~ 100 To)
    - Utilisation de DBT (CTE) pour structurer les migrations
    - Plusieurs stratégies d'indexage (notamment BRIN)
    - Réduction du temps de traitement des migrations de ~70 %

**Mai 2019 à Octobre 2020 - Développeur Senior** (Pandascore)

Provider de data/metadata de jeu de scène esport

+ Lead technique sur l'API (Elixir/Phoenix/Cowboy/ETL)
  - Développement de fonctionnalités
+ Pont entre les équipes dev, machine learning et infra
  - Standardisation des data contract entre équipes ML / Backend / API (~ 10 personnes) pour gagner en synchros et faciliter les migrations
  - Migration de Helm vers Kustomize pour gagner maintenabilité
  - Formation internes sur Kubernetes, CI/CD

**Fév 2019 à Mai 2019 - SRE** (Thalès Digital Factory, Paris)

Développement d'une plateforme *Kubernetes as the service* pour des services techs de ~100 personnes

+ Conception et déploiement d'une distribution Kubernetes custom sous Rancher
+ Développement de controllers/operators Kubernetes en Golang et Elixir
+ Collaboration directe avec l'équipe Rancher pour optimiser l'intégration
+ Transition interne Helm → Kustomize pour une gestion infra plus robuste
+ Management d'une équipe technique de 7 personnes

**Juil 2016 à Janvier 2019 - SRE** (Ritmx, Paris)

SRE au sein des équipes infra des applications de distribution billetique en Île-de-France

+ Pilotage de la modernisation des infrastructures dans un environnement cloisonné
  - Déploiement et gestion de l'un des premiers clusters Kubernetes bare-metal du secteur public.
  - Migration des environnements internes (~20 services, ~20 servers kubernetes) vers Terraform/GCP/Kubernetes/Helm
  - Lead CI/CD et gestion des logs: Fluent/Prometheus/Thanos
  - Développement de controllers Kubernetes personnalisés en Elixir
+ Transmission des pratiques DevOps dans 5 équipes, ~ 50 personnes
  - Animation de formations internes : Git, Kubernetes, Ansible, Docker.
  - Accompagnement des équipes sur l'adoption de kubernetes
+ Formation interne : Git, Kubernetes, Ansible, Docker
+ Recherche et publication sur une critique des méthodes Agile

**Mars 2016 à Juil 2016 - Développeur Scala** (Keljob.com)

Application de jobboard

+ Développement en Scala avec Play2

**Avr 2015 à Mars 2016 - Consultant DevOps** (Banque de France, Paris)

Banque de France – Pôle Big Data

+ Référent Puppet au sein d'une équipe d'ops dédiée aux stacks Big Data & observabilité
  - Développement de modules Puppet pour déployer et configurer des services distribués : Elasticsearch, MongoDB, Hadoop, Spark
  - Mise en place d'une plateforme de test automatisée pour modules Puppet, via Docker et intégration en Scala
  - Expertise sur la stack ELK : tuning, déploiement et intégration dans l'infra

**Déc 2014 à Avr 2015 - Développeur Java** (VSCt, Paris)

Développeur chez Voyage-SNCF

+ Développement:
  - Java 1.8, AngularJS
  - Évangélisation sur la programmation fonctionnel avec Java 1.8

**Avr 2013 à Nov 2014 - Développeur Java - DevOps** (Sopra, Paris)

Mise en place de https://mailiz.mssante.fr/, plateforme de messagerie sécurisée pour les professionnels de santé

+ Développement de la plateforme web sécurisée
  - Backend Java avec Liferay
  - Batchs en Perl pour traitement de données et intégration avec Elasticsearch.
+ Transition vers l'industrialisation de l'infrastructure
  - Lead sur le déploiement automatisé avec Puppet, lead CI/CD.
  - Configuration de nginx, MySQL, Jenkins, ELK.
  - Environnements de développement reproductibles via Vagrant.
  - Tests de charge via JMeter (scénarios + analyse).

## Formation

2011-2013: Master Ingénierie Informatique - Université Denis Diderot

2007-2011: Licence Informatique - Université Denis Diderot
