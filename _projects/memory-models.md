---
layout: page
title: Memory Models for Virtual Humans
card_description: Survey of memory models for virtual agents and humans, from psychological foundations to computational architectures.
img: assets/img/projects/memory-models/memory-architecture-cover.jpg
importance: 6
year: 2025
category: phd-research
---

<p class="ale-project-lead">A survey that connects the <strong>psychological foundations of human memory</strong> with the <strong>computational architectures</strong> used to give virtual agents continuity, adaptation and coherent long-term behaviour.</p>

Memory is often treated as a single capability, yet a believable virtual human needs very different mechanisms to hold recent observations, personal experiences, factual knowledge, learned procedures and spatial relationships. Together these are what let a character stay coherent across an interaction, recall what happened and adapt over time, instead of starting from scratch at every step.

These mechanisms are studied in parallel by cognitive psychology, symbolic AI, connectionist models and, more recently, Memory-Augmented Neural Networks and Large Language Models, each with its own vocabulary. This survey bridges psychological theory and computational practice, offering a shared way to describe and compare how artificial memory is built.

<figure class="ale-project-feature ale-project-feature--diagram">
  <img src="{{ '/assets/img/projects/memory-models/framework.png' | relative_url }}" alt="Memory framework: external environment, sensory registers, working memory and long-term memory components for virtual agents" loading="lazy">
  <figcaption>The memory framework used in the review, illustrating the key psychological memory components commonly adopted in computational implementations.</figcaption>
</figure>

The framework organises memory as a flow: stimuli from the external environment pass through sensory registers into working memory, where a short-term store and a central executive manage what is currently in focus, and then into long-term memory, split into episodic, autobiographical, procedural, semantic and spatial components. This gives a common structure for comparing systems that are otherwise described in inconsistent terms.

## From psychology to computation

Using this structure, the survey follows each memory type from its cognitive definition to its implementation in virtual humans and agents, comparing symbolic, connectionist, Memory-Augmented Neural Network and LLM-based approaches. It examines how systems encode experience, retrieve what is relevant, and forget or consolidate content, and asks a central question: whether a memory mechanism actually improves behaviour, rather than simply storing more context. The review closes with applications in education, games and social simulation, and a set of open challenges, such as deciding where one remembered episode ends and the next begins.

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
