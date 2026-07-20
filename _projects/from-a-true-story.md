---
layout: page
title: From a True Story
card_description: LLM-driven narrative generation from museum catalogue data (Museo Egizio, Torino), evaluated with LLM-as-a-judge protocols.
img: assets/img/projects/from-a-true-story/teaser.png
importance: 5
year: 2026
category: phd-research
---

<p class="ale-project-lead"><strong>From a True Story</strong> turns structured catalogue records from the Museo Egizio in Torino into narratives that remain connected to the historical source material.</p>

Museum catalogues contain reliable descriptions of objects, people and historical contexts, but those records are not written as stories. The project studies how generative models can transform this material into accessible narratives without losing the connection with the catalogue evidence from which they originate.

<figure class="ale-project-feature ale-project-feature--teaser">
  <img src="{{ '/assets/img/projects/from-a-true-story/teaser.png' | relative_url }}" alt="From a True Story pipeline, from museum catalogue objects to generated narratives" loading="eager">
  <figcaption>Catalogue objects and metadata become the factual substrate for LLM-generated museum stories.</figcaption>
</figure>

## From records to stories

The generation workflow selects catalogue entries with narrative potential, extracts compatible narrative units and maps them to dramatic situations before producing a structured story. The released datasets contain **300 stories per experimental condition**, generated with DeepSeek, Gemini and GPT-OSS models.

## Reading and evaluating the output

Alongside the generation and LLM-as-a-judge evaluation code, the repository includes a dedicated browser-based visualisation tool for exploring generated stories and their dramatic-situation descriptions.

<figure class="ale-project-feature">
  <img src="{{ '/assets/img/projects/from-a-true-story/story-explorer.png' | relative_url }}" alt="Story explorer showing catalogue data, event extraction, dramatic situation and generated scenes" loading="lazy">
  <figcaption>The visualisation tool keeps the source record, intermediate narrative structure and generated scenes visible in the same interface.</figcaption>
</figure>

## Context and collaboration

The project is a collaboration between **Politecnico di Torino**, **Università di Torino** and **Museo Egizio**.

## Related work

<ul class="ale-project-related-list">
  <li>
    <span>Journal article · ACM TIST 2026 · under review</span>
    <div><strong>From a True Story: Leveraging Museum Catalogue Data for LLM-Driven Narrative Generation</strong><small>E. Mensa, A. E. Pecora, C. Fulfaro, A. Pizzo, E. Ferraris, A. Bottino and R. Damiano</small></div>
  </li>
  <li>
    <span>Interactive visualisation</span>
    <div><strong>Generated-story explorer</strong><small>Catalogue source, narrative structure and generated scenes</small></div>
    <a class="ale-project-reference-action" href="https://github.com/dh-project/ACM_TIST_2026/tree/main/visualization_tool" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-book-open" aria-hidden="true"></i> Explorer <span aria-hidden="true">↗</span></a>
  </li>
  <li>
    <span>Open-source software and datasets</span>
    <div><strong>Generation pipeline, story judge and visualisation tool</strong><small>Code and 1,200 released structured narratives</small></div>
    <a class="ale-project-reference-action" href="https://github.com/dh-project/ACM_TIST_2026" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github" aria-hidden="true"></i> Code <span aria-hidden="true">↗</span></a>
  </li>
</ul>
