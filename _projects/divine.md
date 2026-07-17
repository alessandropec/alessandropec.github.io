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

The images are divided into separate training, validation and test groups. Several detection and classification models were trained in multiple configurations. Colour, saturation and local-detail transformations were used specifically as **data augmentation**, helping the models encounter a wider range of plausible field conditions during training while leaving validation and test images unchanged.

## Results

<div class="ale-project-results">
  <article><strong>0.84</strong><span>Best F1 score</span><p>the strongest balanced disease-recognition result among the tested configurations.</p></article>
  <article><strong>17 ms</strong><span>Fastest inference</span><p>the lowest measured inference time among the real-time detector configurations.</p></article>
</div>

The figures above summarize two distinct outcomes of the model search: the best balanced recognition score and the fastest inference configuration. They are not presented as a direct head-to-head comparison. Results currently refer to a single experimental vineyard; evaluation across different sites and conditions remains necessary.

## Context and collaboration

DIVINE is developed at **Politecnico di Torino** through collaboration between computer-vision researchers and agronomy experts. Field acquisition and expert annotation are carried out with support from **DISAFA**, using the experimental vineyard in Grugliasco.

## Related work

<ul class="ale-project-related-list">
  <li>
    <span>Master's thesis · 2024</span>
    <div><strong>DIVINE: DIagnosis of grapeVIne diseases through NEural networks and deep learning</strong><small>Fabrizio Sanino</small></div>
    <a class="ale-project-reference-action" href="https://webthesis.biblio.polito.it/31783/" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-graduation-cap" aria-hidden="true"></i> Thesis <span aria-hidden="true">↗</span></a>
  </li>
  <li>
    <span>Master's thesis · 2025–2026 · forthcoming</span>
    <div><strong>DIVINE: Imaging Diagnosis of Vine diseases using Neural networks and deep learning</strong><small>Matteo Giardino</small></div>
  </li>
</ul>
