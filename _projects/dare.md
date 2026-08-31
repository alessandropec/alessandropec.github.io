---
layout: page
title: DARE
card_description: Helping insurance experts turn photos of home damage into automatic claim estimates.
img: assets/img/projects/dare/pipe-damage-photo.jpeg
importance: 4
year: 2026
category: applied-research
---

<p class="ale-project-lead"><strong>DARE</strong>—<strong>D</strong>eveloping <strong>A</strong>I for <strong>R</strong>isk management in the Insuranc<strong>E</strong> industry—helps insurance experts turn photographs of home damage into automatic claim estimates: recognising the type of damage in a photo, then combining that reading with the expert's own appraisal to support the cost estimate.</p>

Home insurance claims come with a written expert appraisal and a set of photographs, but today the two are only loosely connected: photos mostly confirm the expert's account rather than driving it, and are rarely used as structured data. Claim photo sets are also noisy and inconsistent, which makes fixed-category automation brittle. DARE automates this process end to end: segmenting the damage in each photo and analysing the expert's own report, then combining both into a single, structured estimate.

<figure class="ale-project-feature ale-project-feature--diagram">
  <img src="{{ '/assets/img/projects/dare/pipeline-overview.jpeg' | relative_url }}" alt="DARE pipeline: photos are segmented, then combined with domain knowledge to produce a damage-estimation report" loading="eager">
  <figcaption>Photos are segmented against a domain ontology of damage types, and the result feeds a model that produces the damage estimate.</figcaption>
</figure>

## From claim photos to a damage estimate

Photos submitted with a claim are rarely all usable: selfies, screenshots, exterior shots, blurry or duplicate images sit alongside genuine damage photos, and identifying details need to be removed before anything can be used for training. A cleaning pipeline filters this out with CLIP, prompted in plain language to flag outdoor shots, documents and blurry photos, before a domain ontology of damage types — mould, staining, peeling, pipe damage, and more — guides annotation of what remains: a segmentation mask for the damaged area, its type, and some context about the room and materials involved.

Several segmentation architectures were then trained and compared to localise and classify the damage in a photo, from closed-vocabulary transformer models like SegFormer to open-vocabulary, promptable ones like SEEM, which can take a point, a box or free text as a guiding prompt — the same family of techniques surveyed in the related publication below. My work on DARE focused on building these classification and segmentation models. Their output — what kind of damage, and where — feeds, together with the text extracted from the expert's own report, into a graph-based model built on the domain ontology that supports the final cost estimate.

<figure class="ale-project-feature">
  <img src="{{ '/assets/img/projects/dare/segmentation-results.jpeg' | relative_url }}" alt="Segmentation result on a pipe-damage photo: the original photo, the human-made ground truth, and the SegFormer and SEEM predictions" loading="lazy">
  <figcaption>A test-set example, left to right: the original photo, the human-made ground truth, and the SegFormer and SEEM predictions.</figcaption>
</figure>

## Evaluation

Segmentation quality varies a lot by damage type: well-represented categories like liquid spillage or pipe damage reach an IoU of up to **0.73** on the test set, while rarer or more ambiguous ones — some mould patterns, for instance — are still hard and improving. Ground truth for these comparisons comes from a purpose-built annotation tool, with trained collaborators segmenting and classifying the experts' own photos by hand.

## Context and collaboration

DARE is a research collaboration between **Politecnico di Torino** and a major Italian insurance group, funded by **Fondazione Compagnia di San Paolo** and **Fondazione CDP** under a public call on artificial intelligence. Project-specific claim data and operational interfaces are not published.

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
