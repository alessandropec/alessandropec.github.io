---
layout: page
title: Memory Models for Virtual Agents & Humans
card_description: Survey of memory models for virtual agents and humans, from psychological foundations to computational architectures.
img: assets/img/projects/memory-models/memory-architecture-cover.jpg
importance: 6
year: 2025
category: phd-research
---

<p class="ale-project-lead">A survey of memory models for <strong>Virtual Agents &amp; Humans</strong>, connecting the <strong>psychological foundations of human memory</strong> with the <strong>computational cognitive architectures</strong> that give them continuity, adaptation and coherent long-term behaviour.</p>

Virtual Agents are artificial systems that perceive their environment and act autonomously toward a goal; Virtual Humans are a more advanced subset that add anthropomorphic embodiment and human-like cognitive and social behaviour. Both increasingly rely on computational cognitive architectures — systems that integrate perception, reasoning, memory and learning — to act coherently over time.

Memory is often treated as a single capability, yet this coherence needs very different mechanisms to hold recent observations, personal experiences, factual knowledge, learned procedures and spatial relationships. Together these are what let an agent or virtual human stay coherent across an interaction, recall what happened and adapt over time, instead of starting from scratch at every step.

These mechanisms are studied in parallel by cognitive psychology and by computational cognitive architectures, each with its own vocabulary. This survey bridges psychological theory and computational practice, offering a shared way to describe and compare how artificial memory is built.

<figure class="ale-project-feature ale-project-feature--diagram">
  <img src="{{ '/assets/img/projects/memory-models/framework.png' | relative_url }}" alt="Memory framework: external environment, sensory registers, working memory and long-term memory components for virtual agents" loading="lazy">
  <figcaption>The memory framework used in the review, illustrating the key psychological memory components commonly adopted in computational implementations.</figcaption>
</figure>

The framework organises memory as a flow: stimuli from the external environment pass through sensory registers into working memory, where a short-term store and a central executive manage what is currently in focus, and then into long-term memory, split into episodic, autobiographical, procedural, semantic and spatial components. This gives a common structure for comparing systems that are otherwise described in inconsistent terms.

## From psychology to computation

Using this structure, the survey follows each memory type — episodic, autobiographical, procedural, semantic and spatial — from its cognitive definition to its computational implementation, comparing symbolic and connectionist approaches. The table below reflects how the reviewed literature actually splits across the two paradigms:

<div class="table-responsive">
<table class="table table-sm" style="min-width:480px">
  <thead>
    <tr><th scope="col">Long-term memory type</th><th scope="col">Connectionist</th><th scope="col">Symbolic</th></tr>
  </thead>
  <tbody>
    <tr><td>Episodic</td><td>Extensive</td><td>Limited</td></tr>
    <tr><td>Autobiographical</td><td>None yet</td><td>Primary approach</td></tr>
    <tr><td>Procedural</td><td>Extensive</td><td>Limited</td></tr>
    <tr><td>Semantic</td><td>Well established</td><td>Well established</td></tr>
    <tr><td>Spatial</td><td>Emerging</td><td>Rare</td></tr>
  </tbody>
</table>
</div>

This split also shows which memory types matter for which domains: conversational and social-simulation agents lean on episodic and semantic memory, agents that must learn open-ended skills lean on procedural memory, and embodied agents need spatial memory. It exposes clear gaps too — autobiographical memory has no connectionist implementation yet — and, together with open questions like where one remembered episode ends and how to forget efficiently, sets the agenda for the review's closing discussion and future directions.

## Context and collaboration

This survey underpins the memory strand of my PhD, developed within the **Computer Graphics and Vision Group at Politecnico di Torino** as part of the group's research on believable virtual humans, cognitive architectures and long-term agent behaviour.

## Related work

<div class="ale-project-pub">
  <div class="ale-project-pub__meta">
    <span class="ale-project-pub__venue">XR Salento</span>
    <a class="ale-project-pub__code" href="https://doi.org/10.1007/978-3-031-97778-7_8" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i><span>DOI</span><span aria-hidden="true">↗</span></a>
  </div>
  <div class="ale-project-pub__body">
    <p class="ale-project-pub__title">A Survey of Memory Models for Virtual Agents and Humans: From Psychological Foundations to Computational Architectures</p>
    <p class="ale-project-pub__authors"><u>A. E. Pecora</u>, F. Strada and A. Bottino</p>
    <p class="ale-project-pub__source">Extended Reality (XR Salento 2025) · Springer · pp. 113–133</p>
  </div>
</div>
