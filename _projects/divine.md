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

The images are divided into separate training, validation and test groups. During training, controlled variations of colour and visual detail help the models handle changing field conditions without altering the final test images. The study compares fast models that locate and classify a disease in one step with a more careful two-stage approach that first isolates each leaf and then analyses it separately.

<div class="ale-project-gallery ale-project-gallery--three ale-project-gallery--aligned">
  <figure><img src="{{ '/assets/img/projects/divine/training-original.jpeg' | relative_url }}" alt="Original vineyard image used for model training" loading="lazy"><figcaption>Original training image.</figcaption></figure>
  <figure><img src="{{ '/assets/img/projects/divine/training-saturation.jpeg' | relative_url }}" alt="Training image with a controlled colour variation" loading="lazy"><figcaption>Controlled colour variation.</figcaption></figure>
  <figure><img src="{{ '/assets/img/projects/divine/training-sharpening.jpeg' | relative_url }}" alt="Training image with enhanced local detail" loading="lazy"><figcaption>Enhanced local detail.</figcaption></figure>
</div>

## Results

<div class="ale-project-results">
  <article><strong>0.84</strong><span>F1 score</span><p>for the two-stage pipeline, the most reliable option for detailed offline analysis.</p></article>
  <article><strong>0.73</strong><span>Precision</span><p>for RT-DETR with image tiling, the strongest one-stage configuration.</p></article>
  <article><strong>17 ms</strong><span>Inference time</span><p>for RT-DETR, offering the most practical balance for real-time field use.</p></article>
</div>

The two-stage pipeline achieved the best overall recognition performance, with **0.78 precision**, **0.92 recall** and an **F1 score of 0.84**, but required around 2.2 seconds per image. RT-DETR with tiling was less accurate but much faster, making it more suitable for live monitoring. These results currently refer to a single experimental vineyard; evaluation across different sites and conditions remains necessary.

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
