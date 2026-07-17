---
layout: page
title: DIVINE
description: Computer vision for recognising grapevine diseases directly in the field.
img: assets/img/projects/divine/field-rover.jpeg
importance: 2
category: applied-research
---

<p class="ale-project-lead">DIVINE is a precision-agriculture project that uses cameras and artificial intelligence to recognise visible signs of disease on grapevine leaves. Its goal is to support faster and more targeted monitoring directly in the vineyard.</p>

Vineyard diseases are often monitored manually, while treatments may be applied broadly because detailed information about each area is unavailable. Computer-vision systems could support more selective interventions, but real vineyards are much less predictable than controlled image datasets: leaves overlap, symptoms can be small, lighting changes and healthy samples greatly outnumber diseased ones. DIVINE focuses on these practical limitations.

<div class="ale-project-gallery ale-project-gallery--three ale-project-gallery--contain">
  <figure>
    <img src="{{ '/assets/img/projects/divine/field-rover.jpeg' | relative_url }}" alt="Autonomous acquisition rover between rows of grapevines" loading="eager">
    <figcaption>The acquisition platform operating in the experimental vineyard.</figcaption>
  </figure>
  <figure>
    <img src="{{ '/assets/img/projects/divine/ai-assisted-detection.jpeg' | relative_url }}" alt="Vine leaves with automatically proposed detection boxes" loading="lazy">
    <figcaption>AI-assisted localisation of leaves in a high-resolution image.</figcaption>
  </figure>
  <figure>
    <img src="{{ '/assets/img/projects/divine/expert-annotation.jpeg' | relative_url }}" alt="Expert-reviewed leaf boxes with disease labels" loading="lazy">
    <figcaption>Disease labels reviewed by an agronomy expert.</figcaption>
  </figure>
</div>

## How it works

Images are collected in the experimental vineyard with a mobile platform equipped with a high-resolution camera, controlled lighting and precise positioning. An AI-assisted tool proposes the location of individual leaves; an agronomy expert then reviews them and assigns the correct disease labels. This combines faster annotation with specialist supervision.

The resulting data are used to compare two approaches. A direct model finds and classifies diseased leaves in one step. A two-stage pipeline first isolates each leaf and then analyses it separately. The first approach is better suited to faster field use, while the second can provide a more careful analysis when processing time is less important.

<figure class="ale-project-feature">
  <img src="{{ '/assets/img/projects/divine/two-stage-pipeline.png' | relative_url }}" alt="DIVINE pipeline in which leaves are detected, cropped and then classified" loading="lazy">
  <figcaption>The two-stage approach separates leaf detection from disease recognition.</figcaption>
</figure>

## Context and collaboration

DIVINE is developed at **Politecnico di Torino** through collaboration between computer-vision researchers and agronomy experts. Field acquisition and expert annotation are carried out with support from **DISAFA**, using the experimental vineyard in Grugliasco.

## Related work

<ul class="ale-project-related-list">
  <li>
    <span>Master's thesis · 2024</span>
    <a href="https://webthesis.biblio.polito.it/31783/" target="_blank" rel="noopener noreferrer">DIVINE: DIagnosis of grapeVIne diseases through NEural networks and deep learning <span aria-hidden="true">↗</span></a>
    <small>Fabrizio Sanino</small>
  </li>
  <li>
    <span>Master's thesis · 2025–2026 · forthcoming</span>
    <strong>DIVINE: Imaging Diagnosis of Vine diseases using Neural networks and deep learning</strong>
    <small>Matteo Giardino</small>
  </li>
</ul>
