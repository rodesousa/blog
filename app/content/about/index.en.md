---
title: "About"
description: "About Roberto De Sousa, software engineer and manager."
---

**I'm Roberto De Sousa, a developer with 10+ years of experience.** I've navigated through dev roles (back/front), SRE/devops/architecture, all the way to lead/CTO. A very, very big fan of functional programming languages — but language-agnostic in practice.

My go-to stack:

- **Programming language**: Elixir/Typescript/Python
- **Back**: Phoenix
- **API**: FastAPI
- **Front**: Phoenix, Next.js
- **DB**: Postgres, Typesense, Meilisearch, DuckDB
- **AI**: Claude Code

In 2019, I realized that Agile management wasn't at all what it claimed to be. I worked with [Vincent Cornet](https://www.linkedin.com/in/vincent-cornet-030ab387/) on a thesis critiquing Agile, which sparked my interest in the sociology of work and alternative organizational models. I've written articles and implemented alternatives such as [Shape Up](https://basecamp.com/shapeup/shape-up.pdf), [game days](https://medium.com/paris-chaos-engineering-community/un-gameday-dans-ma-team-un-besoin-de-transmettre-du-savoir-faire-42682477943e), and many other things.

Since 2023, I've been entrepreneuring — co-founding [cohortes](https://www.cohortes.co/), an AI-powered solution for collecting and analyzing employee testimonials in free text to help actors improving workplace conditions. I'm lucky to be part of [l'Agora DODES](https://agora-dodes.fr/) and close to the [ESS](https://www.ess-france.org/) and [QVCT](https://www.anact.fr/qualite-de-vie-et-des-conditions-de-travail) movements.

I've reached the end of what we set out to do, so I'm looking for a new adventure — on a permanent contract, either as a hands-on CTO at an early-stage company with < 50 people, or as Head of Engineering / Staff Senior Engineer.

💡 **What drives me: building a healthy, ambitious engineering culture.**
- 🙅‍♂️ No rush culture.
- 🙅‍♂️ Finance, insurance, banking sectors don't interest me.
- 🙅‍♂️ No micromanagement culture.
- 🙅‍♂️ No industrial approach where devs churn through tickets without breathing.
- 🚀 Project-based approach rather than ticket-based.
- 🚀 Real space for research and learning.
- 🚀 Empowerment over surveillance.
- 🔧 Set a solid technical vision, capable of guiding long-term product decisions.
- 🔧 Grow teams toward autonomy, quality, and technical curiosity.
- 🔧 Work hand-in-hand with product AND sales to ship fast AND well.
- 🔥 ESS, SCOP big plus.
- 🔥 Shape Up.
- 👎 [Le live coding est-il vraiment une méthode pertinente dans le processus de recrutement ?](/en/posts/recrutement)

**dessroberto [at] gmail [dot] com**

---

## Experience

**Since November 2023 — Co-founder & CTO** (Cohortes)

An AI-powered solution for collecting and analyzing employee testimonials in free text to help actors improving workplace conditions. Incubated at Paris&Co and Willa.

+ Product & strategy
  - Facilitated scoping workshops with early users (unions, occupational psychologists, QVCT consultants)
  - Defined product and technical roadmap
+ Strategic partnership development
  - Co-authored and secured public funding (BPI grants)
  - Pitches and presentations with public bodies and incubators
  - Vibe coding/Copilot to rapidly develop client-facing demo MVPs, improving prospect → client conversion
+ Prospecting automation via AI MVP
  - Hubspot → AI agent for managing outreach (cold email, follow-ups, objection handling)
  - A/B testing on approaches → 2× response rate
+ Full Elixir stack (Phoenix, LiveView): SaaS development
  - Postgres for user and testimonial management
  - Typesense for semantic search via embeddings, integrated with a RAG system for contextual, enriched answers
  - AI agent orchestration via Oban for automated LLM analysis (self-hosted & cloud)
  - Reduced manual analysis time by 90%, freeing time for testimonial interpretation
+ Training delivered to tech and non-tech profiles: prompting, vibe coding, AI agents

**February 2022 to November 2023 — Lead Tech** (Sapiologie)

LCA & social impact ERP for SMEs

+ Foundational experience that gave me the entrepreneurial bug
  - Product co-construction with founders
  - Regular meetings with clients
  - Implemented Shape Up: project cycle-based work organization, better prioritization and commitment
+ Tech lead
+ Full Elixir stack (Phoenix, LiveView): ERP development
  - Reduced LCA calculation time by 90%
  - Technical oversight, architecture decisions, infrastructure management
  - Defined and maintained quality standards
  - Implemented a Datomic-like layer on Postgres for real-time change history and revert management

**June 2021 to February 2022 — Lead Infra** (Arkhn)

Making hospital data interoperable

+ Infrastructure modernization
  - Deployment and management of on-premises infrastructure inside hospitals (4 hospitals, ~100 TB of data, ~20 services)
  - Scaleway, Ansible, Nomad
+ Rolled out best practices: TDD, CI/CD
+ Organized game days on deployment processes to improve resilience and train teams
+ Postgres optimization for datalake creation: large-scale database migrations (~100 TB)
  - Used DBT (CTE) to structure migrations
  - Multiple indexing strategies (including BRIN)
  - Reduced migration processing time by ~70%

**May 2019 to October 2020 — Senior Developer** (Pandascore)

Esports data/metadata provider

+ Technical lead on the API (Elixir/Phoenix/Cowboy/ETL)
  - Feature development
+ Bridge between dev, machine learning, and infra teams
  - Standardized data contracts between ML / Backend / API teams (~10 people) to reduce sync overhead and ease migrations
  - Migrated from Helm to Kustomize for better maintainability
  - Internal training on Kubernetes and CI/CD

**Feb 2019 to May 2019 — SRE** (Thales Digital Factory, Paris)

Building a *Kubernetes as a Service* platform for a ~100-person tech organization

+ Designed and deployed a custom Kubernetes distribution under Rancher
+ Developed Kubernetes controllers/operators in Golang and Elixir
+ Collaborated directly with the Rancher team to optimize integration
+ Internal transition Helm → Kustomize for more robust infra management
+ Technical management of a 7-person engineering team

**Jul 2016 to January 2019 — SRE** (Ritmx, Paris)

SRE within the infrastructure teams of ticketing distribution applications in Île-de-France

+ Led infrastructure modernization in a constrained environment
  - Deployed and managed one of the first bare-metal Kubernetes clusters in the public sector
  - Migrated internal environments (~20 services, ~20 Kubernetes servers) to Terraform/GCP/Kubernetes/Helm
  - Led CI/CD and log management: Fluent/Prometheus/Thanos
  - Developed custom Kubernetes controllers in Elixir
+ Spread DevOps practices across 5 teams, ~50 people
  - Led internal training: Git, Kubernetes, Ansible, Docker
  - Supported teams in Kubernetes adoption
+ Research and publication on a critique of Agile methods

**March 2016 to Jul 2016 — Scala Developer** (Keljob.com)

Job board application

+ Development in Scala with Play2

**Apr 2015 to March 2016 — DevOps Consultant** (Banque de France, Paris)

Banque de France – Big Data Division

+ Puppet referent within a dedicated ops team for Big Data & observability stacks
  - Developed Puppet modules to deploy and configure distributed services: Elasticsearch, MongoDB, Hadoop, Spark
  - Set up an automated testing platform for Puppet modules using Docker with Scala integration
  - Expert on the ELK stack: tuning, deployment, and infrastructure integration

**Dec 2014 to Apr 2015 — Java Developer** (VSCt, Paris)

Developer at Voyage-SNCF

+ Development:
  - Java 1.8, AngularJS
  - Evangelism on functional programming with Java 1.8

**Apr 2013 to Nov 2014 — Java Developer / DevOps** (Sopra, Paris)

Building https://mailiz.mssante.fr/, a secure messaging platform for healthcare professionals

+ Web platform development
  - Java backend with Liferay
  - Perl scripts for data processing and Elasticsearch integration
+ Infrastructure industrialization
  - Led automated deployment with Puppet, CI/CD
  - Configuration of nginx, MySQL, Jenkins, ELK
  - Reproducible dev environments via Vagrant
  - Load testing with JMeter (scenarios + analysis)

## Education

2011–2013: Master's in Computer Science Engineering — Université Paris Diderot

2007–2011: Bachelor's in Computer Science — Université Paris Diderot
