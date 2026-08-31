---
layout: page
title: DIVINE
card_description: Computer vision for recognising grapevine diseases directly in the field.
img: assets/img/projects/divine/field-rover.jpeg
importance: 3
year: 2024–2026
category: applied-research
---

<p class="ale-project-lead"><strong>DIVINE</strong>—<strong>DI</strong>agnosis of grape<strong>VI</strong>ne diseases through <strong>NE</strong>ural networks and deep learning—is a precision-agriculture project that uses cameras and artificial intelligence to recognise visible signs of disease on grapevine leaves.</p>

Vineyard monitoring still relies heavily on manual inspection, while treatments may be applied broadly because detailed information about each area is unavailable. Automatic recognition could support earlier and more targeted interventions, but real vineyards are difficult visual environments: leaves overlap, symptoms can be small, lighting changes continuously and healthy leaves greatly outnumber diseased ones. DIVINE studies how a computer-vision system can operate under these practical conditions.

## Building the DIVINE dataset

Images are collected in the experimental vineyard in Grugliasco with a mobile platform equipped with a high-resolution camera, controlled lighting and precise positioning. The current field campaign produced **1,832 images**. An AI-assisted tool proposes the position of individual leaves; an agronomy expert then reviews them and assigns the disease labels. The resulting dataset includes more than **36,000 annotated leaves** across healthy samples, downy mildew, black rot and mixed infections.

<div class="ale-project-gallery ale-project-gallery--four ale-project-gallery--leaves">
  <figure><img src="{{ '/assets/img/projects/divine/leaf-healthy.jpeg' | relative_url }}" alt="Healthy grapevine leaf from the DIVINE dataset" loading="lazy"><figcaption>Healthy</figcaption></figure>
  <figure><img src="{{ '/assets/img/projects/divine/leaf-downy-mildew.jpeg' | relative_url }}" alt="Grapevine leaf affected by downy mildew" loading="lazy"><figcaption>Downy mildew</figcaption></figure>
  <figure><img src="{{ '/assets/img/projects/divine/leaf-black-rot.jpeg' | relative_url }}" alt="Grapevine leaf affected by black rot" loading="lazy"><figcaption>Black rot</figcaption></figure>
  <figure><img src="{{ '/assets/img/projects/divine/leaf-coinfection.jpeg' | relative_url }}" alt="Grapevine leaf showing a mixed infection" loading="lazy"><figcaption>Mixed infection</figcaption></figure>
</div>

<div class="ale-project-gallery ale-project-gallery--three ale-project-gallery--aligned">
  <figure><img src="{{ '/assets/img/projects/divine/field-rover.jpeg' | relative_url }}" alt="Mobile acquisition platform between rows of grapevines" loading="lazy"><figcaption>Field acquisition platform.</figcaption></figure>
  <figure><img src="{{ '/assets/img/projects/divine/ai-assisted-detection.jpeg' | relative_url }}" alt="Automatically proposed leaf bounding boxes" loading="lazy"><figcaption>AI-assisted leaf localisation.</figcaption></figure>
  <figure><img src="{{ '/assets/img/projects/divine/expert-annotation.jpeg' | relative_url }}" alt="Disease annotations reviewed by an expert" loading="lazy"><figcaption>Expert-reviewed disease labels.</figcaption></figure>
</div>

## From images to disease recognition

The dataset is split into training, validation and test sets, designed so the test set reflects real, in-the-wild field conditions as closely as possible. On top of it, several YOLO-based detection architectures were trained and compared, both as a single-stage pipeline — detecting and classifying diseased leaves in one pass — and as a two-stage one, first localising leaves and then classifying the disease. Data augmentation — colour, saturation and local-detail changes — exposed the models to a wider range of plausible field conditions during training, and the experiments identified the best-performing configuration, detailed below.

## Evaluation

Results are summarized by two numbers: a top F1 score of **0.84** for disease recognition and inference as fast as **17 ms**, latency that matters for real-time use on the field platform. These come from different configurations in the model search, and currently refer to a single experimental vineyard — evaluation across further sites remains necessary.

## Context and collaboration

DIVINE is developed at **Politecnico di Torino** through collaboration between computer-vision researchers and agronomy experts. Field acquisition and expert annotation are carried out with support from **DISAFA**, using the experimental vineyard in Grugliasco.

## Related work

<div class="ale-project-pub">
  <div class="ale-project-pub__meta">
    <span class="ale-project-pub__venue">M.Sc. thesis</span>
    <a class="ale-project-pub__code" href="https://webthesis.biblio.polito.it/31783/" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-graduation-cap" aria-hidden="true"></i><span>Thesis</span><span aria-hidden="true">↗</span></a>
    <a class="ale-project-pub__code" href="https://github.com/fabriziosanino/grape_leaves_detection" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github" aria-hidden="true"></i><span>Code</span><span aria-hidden="true">↗</span></a>
  </div>
  <div class="ale-project-pub__body">
    <p class="ale-project-pub__title">DIVINE: DIagnosis of grapeVIne diseases through NEural networks and deep learning</p>
    <p class="ale-project-pub__authors">Fabrizio Sanino · Supervisors: A. Bottino, <u>A. E. Pecora</u></p>
    <p class="ale-project-pub__source">M.Sc. thesis · Politecnico di Torino · 2024</p>
  </div>
</div>

<div class="ale-project-pub">
  <div class="ale-project-pub__meta">
    <span class="ale-project-pub__venue">M.Sc. thesis</span>
    <a class="ale-project-pub__code" href="https://webthesis.biblio.polito.it/41295/" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-graduation-cap" aria-hidden="true"></i><span>Thesis</span><span aria-hidden="true">↗</span></a>
  </div>
  <div class="ale-project-pub__body">
    <p class="ale-project-pub__title">DIVINE: Imaging DIagnosis of VIne diseases using NEural networks and deep learning</p>
    <p class="ale-project-pub__authors">Matteo Giardino · Supervisors: A. Bottino, <u>A. E. Pecora</u></p>
    <p class="ale-project-pub__source">M.Sc. thesis · Politecnico di Torino · 2026</p>
  </div>
</div>
