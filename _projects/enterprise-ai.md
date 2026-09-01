---
layout: page
title: Enterprise AI & Data Engineering
card_description: A year of applied AI and data engineering as a consultant for large enterprise clients in energy, automotive and banking.
img: assets/img/projects/enterprise-ai/data-platform-cover.jpg
importance: 7
year: 2022–2023
category: industry
---

<p class="ale-project-lead">A short collection of the projects that mattered most — and taught me most — during my year as a data scientist and engineering consultant, building AI and data solutions for large enterprise clients in energy, automotive and banking. Each of them had to work inside an existing business process, not next to it.</p>

## Email classification for customer service

An energy utility's customer-service team received a large volume of inbound email that had to be read and routed by hand before anyone could act on it. We trained a neural network on the historical archive to recognise what each message was about, and integrated it into the software the team already used to manage the service: incoming mail arrives classified and directed to the right queue, instead of being sorted manually.

## Modernising a data ingestion pipeline

For an energy client I worked on the refactoring of the main data ingestion pipeline — the one feeding the bulk of their analytics. The existing infrastructure was rebuilt around the newer **Azure** and **Databricks** components that had become available in the meantime, preserving the data flows the business depended on while moving them onto a stack that was cheaper to run and easier to maintain.

## AI assistants and chatbots

Across automotive, energy and banking clients I built LLM-powered assistants and chatbots of two broad kinds. The first were retrieval-augmented (RAG) systems that let employees ask questions in natural language over the company's own documentation and get answers grounded in it. The second were assistants connected directly to enterprise databases, able to turn a request into a query, run it and bring the retrieved data back into the conversation. In the automotive case the same approach became a customer-facing chatbot that recommends cars, reading the catalogue to match a buyer's requirements against what is actually available.

## Open-item reconciliation, end to end

For an energy client we automated the handling of open items. The system reads incoming email on its own, runs OCR over the attached documents, interprets what the message is actually about, classifies the open items it refers to and matches them against the company database — separating what can be considered settled from what is still outstanding. Everything surfaces in a graphical interface where an operator reviews and confirms each match, so a human stays in the loop on every decision that touches the accounts.

## Y.O.D.A. — Your Own Data Advisor

An internal company project I was put in charge of: an AI platform combining assistants and automations that analyse tabular data and reconstruct what sits behind it — the relational schema of a set of tables, the meaning of their columns, the keys and relationships connecting them — so that unfamiliar data can be understood before it is used.

## Context and collaboration

This work was carried out at **Cluster Reply**, one of the largest Italian IT consulting firms, whose clients include the major players in energy, automotive, banking and other regulated industries. Client names, data and interfaces remain confidential.
