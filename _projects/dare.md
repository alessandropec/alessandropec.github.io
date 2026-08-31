---
layout: page
title: DARE
card_description: Helping insurance experts turn photos of home damage into automatic claim estimates.
img: assets/img/projects/dare/interactive-prompt.jpeg
image_fit: contain
importance: 4
year: 2026
category: applied-research
---

<p class="ale-project-lead"><strong>DARE</strong>—<strong>D</strong>eveloping <strong>A</strong>I for <strong>R</strong>isk management in the Insuranc<strong>E</strong> industry—helps insurance experts turn photographs of home damage into automatic claim estimates: recognising the type of damage in a photo, then combining that reading with the expert's own appraisal to support the cost estimate.</p>

Home insurance claims come with a written expert appraisal and a set of photographs, but today the two are only loosely connected: photos mostly confirm the expert's account rather than driving it, and are rarely used as structured data. Claim photo sets are also visually noisy — genuine damage shots sit alongside selfies, screenshots, exterior shots and blurry photos — which makes fixed-category automation brittle. DARE studies how to turn this raw evidence into something a model can reason over.

<figure class="ale-project-feature">
  <img src="{{ '/assets/img/projects/dare/promptable-segmentation-overview.jpeg' | relative_url }}" alt="Comparison of semantic, instance and panoptic image segmentation" loading="lazy">
  <figcaption>Image segmentation separates the damaged region from the rest of a photo, ahead of classification and cost estimation.</figcaption>
</figure>

## Cleaning noisy claim photos

Photos submitted with a claim are rarely all usable: selfies, screenshots, exterior shots, blurry or duplicate images are mixed in with genuine damage photos, and identifying details need to be removed before anything can be used for training. A cleaning pipeline filters this noise out with zero-shot vision-language models, before a domain ontology of damage types — mould, staining, peeling, pipe damage, and more — guides manual annotation of what remains, including a segmentation mask for the damaged area itself. On a pilot batch of roughly 2,400 photos, only about a third turned out usable for training: a reminder of how much of this evidence is noise before it becomes signal.

## From photos to a damage estimate

Several segmentation architectures were trained and compared to localise and classify the damaged region in a photo, from closed-vocabulary transformer models like SegFormer to open-vocabulary, promptable ones like SEEM, which can take a point, a box or free text as a guiding prompt — the same family of techniques surveyed in the related publication below. My work on DARE focused on building these classification and segmentation models. Their output — what kind of damage, and where — feeds, together with the text extracted from the expert's own report, into a graph-based model built on the domain ontology that supports the final cost estimate.

<figure class="ale-project-feature ale-project-feature--perception">
  <img src="{{ '/assets/img/projects/dare/interactive-prompt.jpeg' | relative_url }}" alt="Interactive segmentation using a positive click and object-boundary prompts around a panda" loading="lazy">
  <figcaption>Promptable segmentation can use clicks, boundaries or other guidance to identify the region required by a downstream workflow.</figcaption>
</figure>

## Evaluation

Segmentation quality varies a lot by damage type: well-represented categories like liquid spillage or pipe damage reach an IoU of up to **0.73** on the test set, while rarer or more ambiguous ones — some mould patterns, for instance — are still hard and improving. Claim data being scarce and imbalanced by nature, closing that gap is an ongoing part of the work.

## Context and collaboration

DARE is a research collaboration between **Politecnico di Torino** and a major Italian insurance group, funded by **Fondazione Compagnia di San Paolo** and **Fondazione CDP** under a public call on artificial intelligence. My contribution focused on the classification and segmentation models in the pipeline. Project-specific claim data and operational interfaces are not published.

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
