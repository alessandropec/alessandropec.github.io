---
layout: page
title: DARE
card_description: AI for insurance risk management — computer vision and machine learning on complex home-related claims.
img: assets/img/projects/dare/interactive-prompt.jpeg
image_fit: contain
importance: 4
year: 2026
category: applied-research
---

<p class="ale-project-lead"><strong>DARE</strong> investigates how computer vision and machine learning can support the analysis of complex home-related insurance claims and the data workflows behind risk assessment.</p>

Insurance evidence is visually heterogeneous: the relevant region may be a damaged surface, a household object or a small detail inside a wider scene. This makes fixed-category automation brittle and motivates models that can be guided towards the object or region a reviewer needs to inspect.

<figure class="ale-project-feature">
  <img src="{{ '/assets/img/projects/dare/promptable-segmentation-overview.jpeg' | relative_url }}" alt="Comparison of semantic, instance and panoptic image segmentation" loading="lazy">
  <figcaption>Image segmentation separates relevant regions and objects before downstream claim analysis.</figcaption>
</figure>

## Visual evidence as structured data

Claim photographs contain objects, damaged regions and contextual cues that are difficult to capture in fixed forms. Segmentation models can turn those images into structured regions for subsequent classification, measurement and human review. Promptable models are especially relevant because the target object or region can vary substantially from one claim to another.

<figure class="ale-project-feature ale-project-feature--perception">
  <img src="{{ '/assets/img/projects/dare/interactive-prompt.jpeg' | relative_url }}" alt="Interactive segmentation using a positive click and object-boundary prompts around a panda" loading="lazy">
  <figcaption>Promptable segmentation can use clicks, boundaries or other guidance to identify the region required by a downstream workflow.</figcaption>
</figure>

## Research contribution

The research maps how guided segmentation systems encode points, boxes, masks, language and combinations of prompts. It also distinguishes interaction strategies and evaluation protocols, providing a technical foundation for selecting methods according to the evidence available in a claim.

## Context and collaboration

DARE connects applied insurance-risk problems with computer-vision research at **Politecnico di Torino**. Project-specific claim data and operational interfaces are not published.

## Related work

<div class="ale-project-pub">
  <div class="ale-project-pub__meta">
    <span class="ale-project-pub__venue">FnT CGV</span>
    <a class="ale-project-pub__code" href="https://doi.org/10.1108/FTCGV-03-2026-001" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i><span>DOI</span><span aria-hidden="true">↗</span></a>
  </div>
  <div class="ale-project-pub__body">
    <p class="ale-project-pub__title">Promptable Image Segmentation: A Survey of Guided Input Techniques</p>
    <p class="ale-project-pub__authors">H. Nejabat, F. D'Asaro, <u>A. E. Pecora</u>, T. Monopoli and A. Bottino</p>
    <p class="ale-project-pub__source">Foundations and Trends in Computer Graphics and Vision · vol. 18(1) · pp. 1–139 · 2026</p>
  </div>
</div>
