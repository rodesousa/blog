---
title: "About ME"
date: 2019-08-02T11:04:49+08:00
draft: false
description: "About Me"
images: []

lightgallery: true

math:
  enable: true
---

**Je suis Roberto De Sousa, je suis devéloppeur, + de 10 ans d'expérience.** J'ai navigué entre des postes de dev (back/front), de SRE/devops/archi jusqu'à lead/CTO. Très, très grand fan des langages de programation fonctionnel et surtout de la stack elixir **mais fermé à aucun langage** *but i'm afraid by rust*.

J'ai réalisé en 2019, que le management Agile n'était pas du tout ce qu'il prétendait être. J'ai accompagné [Vincent Cornet](https://www.linkedin.com/in/vincent-cornet-030ab387/) dans un mémoire sur une critique de l'Agile qui m'a interessé à la sociologie du travail et puis à d'autres types d'organisations. J'ai écrit des articles et pu mettre en place des alternatives comme [shape up](https://basecamp.com/shapeup/shape-up.pdf), des mandats révocable à la place de lead tech, [game day](https://medium.com/paris-chaos-engineering-community/un-gameday-dans-ma-team-un-besoin-de-transmettre-du-savoir-faire-42682477943e), et pleins d'autres choses.

Depuis 2023 je me suis lancé dans l'entreprenariat, j'ai cofondé [cohortes](https://www.cohortes.co/), une solution de récolte et d'analyse AI de témoignage de salarié en texte libre pour aider les acteurs de l'amélioration des conditions de travail. J'ai la chance de pouvoir faire partie de [l'Agora DODES](https://agora-dodes.fr/) et d'être proche des mouvements de [l'ESS](https://www.ess-france.org/) de la [QVCT](https://www.anact.fr/qualite-de-vie-et-des-conditions-de-travail)

En ce moment je recherche une nouvelle boîte, en CDI, en tant que CTO (< 50 personnes) ou un poste de lead dev à forte valeur tech **with AI**. Faire profiter de ma double casquette, stratégique et technique.

💡 **Ce qui m’anime : poser une culture tech saine et très ambitieuse.**
- 🙅‍♂️ Pas de culture du rush.
- 🙅‍♂️ Pas de culture du micro management.
- 🙅‍♂️ Pas d’approche industrielle où les devs enchaînent des tickets sans respirer.
- 🚀 Approche projet plutôt que ticket.
- 🚀 Une vraie place pour la veille/formation.
- 🚀 Responsabilisation plutôt que surveillance.

**Important**

- 🙅‍♂️ Les secteurs de la finance, assurance, banque ne m'interresse pas
- 🔥 ESS, SCOP gros plus :)
- 👎 Le process de livecoding, c'est non: <a href="/recrutement/">Mon problème avec les processus de recrutement de type livecoding ou TP à la maison</a>

**dessroberto [at] gmail [dot] com**

---
----

Expérience
--------------------

**Depuis Novembre 2023 - Cofondateur & CTO** (Cohortes)

Une solution de récolte et d'analyse AI de témoignage de salarié en texte libre pour aider les acteurs de l'amélioration des conditions de travail. Incubé chez Paris&Co et Willa

+ Dirigé la récolte des besoins, défini la roadmap technique, prospection, pitch, développement de partenariat
+ Réduit de 90 % le temps d’analyse manuelle, donnant plus de temps à l’interprétation des témoignages
  - A/B testing, amélioration des taux de réponse de x2
+ Utilisé le vibe coding pour développer rapidement des MVP dédiés aux démos clients, augmentant la conversion prospects → clients
+ Stack full Elixir (Phoenix, LiveView): développement d’un SaaS
  - Postgres pour la gestion des utilisateurs et des témoignages
  - Typesense pour recherche sémantique via embeddings, intégré à un système RAG pour des réponses contextuelles et enrichies.
  - Orchestration d’agents AI via Oban pour l’analyse automatisée via LLM self-hosted & cloud
+ Donnée quelques formations à l’IA générative : prompting, vibe coding, agents

**Février 2022 à Novembre 2023 - Lead Dev Elixir, Front/Back** (Sapiologie)

Création d'un ERP spécialisé dans le calcul de l'empreinte écologique (ACV) et social à destination TPE/PME

+ Stack full Elixir (Phoenix, LiveView): développement de l'ERP
  - Postgres pour la gestion des utilisateurs et des données
  - Implémentation d’une base Datomic-like sous Postgres, pour un historique temps réel des modifications et gestion de revert
  - Réduction du calcul de l'ACV de 90%
+ Mise en place de Shape Up : organisation du travail par cycles projets, meilleure priorisation et d'engagement
+ Encadrement technique, choix d’architecture, gestion de l'infra

**Juin 2021 à Février 2022 - Tech lead infra** (Arkhn)

Rendre la donnée hospitalière intéropérable

+ Refactor des déploiements sur environnements cloisonnés et cloud (ansible/nomad, scaleway, déploiement à l'hopital)
+ Mise en place et diffusion des bonnes pratiques : TDD, CI/CD
+ Organisation de game days sur les processus de déploiement pour améliorer la résilience et former les équipes.
+ Optimisation Postgres dans le cadre de la création des datalake : migration de bases volumineuses (1 ~ 10 To)
    - Utilisation de DBT (CTE) pour structurer les migrations
    - Plusieurs stratégies d'indexage (notamment BRIN)
    - Réduction du temps de traitement des migrations de ~70 %

**Mai 2019 à Octobre 2020 - Développeur Senior Elixir** (Pandascore)

Provider de data/metadata de jeu de scène esport

+ Lead technique sur l’API (Elixir/Phoenix/Cowboy/ETL) 
  - Développement de fonctionnalités
+ Pont entre les équipes dev, machine learning et infra 
  - Standardisation des data contract entre équipes ML / Backend / API pour gagner en synchros et faciliter les migrations
  - Migration de Helm vers Kustomize pour gagner maintenabilité
  - Formation internes sur Kubernetes, CI/CD

**Fév 2019 à Mai 2019 - Kubernetes Consultant / Golang Dev**(Thalès Digital Factory, Paris)

Développement d’une plateforme *Kubernetes as the service*

+ Conception et déploiement d’une distribution Kubernetes custom sous Rancher
+ Développement de controllers/operators Kubernetes en Golang et Elixir
+ Collaboration directe avec l’équipe Rancher pour optimiser l’intégration
+ Transition interne Helm → Kustomize pour une gestion infra plus robuste
+ Management d’une équipe technique de 7 personnes

**Juil 2016 à Janvier 2019 - Consultant Kubernetes**(Ritmx, Paris)

Consultant DevOps à l'interieur de l'équipe infra puis,
consultant Kubernetes à l'intérieur d'une équipe SRE,
consultant Kubernetes à l'intérieur d'une feature team

+ Formation donnée: Git, Kubernetes pour Dev, Ansible, Docker
+ Migration script sh vers du on premise Puppet/Ansible puis vers Terraform/GCP/k8s/Helm
+ Migration Nagios vers Prometheus avec Thanos en storage
+ Controller K8s Custom sous Elixir
+ Lead sur la gestion des logs (Fluent/Kibana)
+ Lead sur la CI/CD
+ Travail de recherche et d'écriture sur une critique des mangagements Agile avec Vincent Cornet

**Mars 2016 à Juil 2016 - Développeur Scala** (Keljob.com)

+ Développement Scala/Play2
+ Création de visualisations et dashboards anti-crawl avec ES/Kibana3
+ Lead sur la mise d'environnement de dev sous docker

**Avr 2015 à Mars 2016 - Consultant DevOps && Bigdata** (Banque de France, Paris)

Consultant DevOps dans le pôle Bigdata

+ Développement de module Puppet: ES, MongoDB, Hadoop, Spark
+ Expertise sur la stack ELK
+ Mise en place d'une plateforme automatisée de test pour module puppet avec Docker (Scala)

**Déc 2014 à Avr 2015 - Développeur Java** (VSCt, Paris)

Développeur chez Voyage-SCNF

+ Développement Java 1.8, AngularJS
+ Évangélisation sur la programmation fonctionnel avec Java 1.8

**Avr 2013 à Nov 2014 - Développeur Java** (Sopra, Paris)

Mise en place d'une plateforme de messagerie sécurisée pour les professionnels de santé. J'ai commencé en tant que développeur pour m’intéresser par la suite à des problématique DevOps.

Développement :

- Développement en Perl, PHP
- Batch PHP/Perl pour Elasticsearch
- Développement J2EE avec le CMS Liferay sous JBOSS
- Développement de portlet (Struts2)

Infra :

- Config et installation de httpd, MySQL, Jenkins, ELK
- Mise en place d'une journalisation (Syslog/LogAnalyser)
- Industrialisation d'environnement de dev avec Vagrant
- Mise en place de jMeter avec scénario et analyse
- Mise en place d'une industrialisation avec Puppet
- Lead sur la partie CI/CD

Formation
---------

2011-2013: *Master Ingénierie Informatique (Système Réseau Internet) - Université Denis Diderot (Paris VII)*

2007-2011: *Licence Informatique - Université Denis Diderot (Paris VII)*

Projet pro
---------

- De 2019 - 2021, étude et écriture d'article de critique des managements IT (principalement l'Agile). Comment peut-on mettre des pratiques libertaire dans le management IT sous fond de [shape up](https://basecamp.com/shapeup).

- Depuis fin 2022, rédaction [en cours] d'une synthèse sur mon travail de critique des mangements IT.

----

> dessroberto at gmail com
