---
layout: page
title: DIVINE
description: From open vine imagery to an in-field, AI-assisted pipeline for grapevine disease detection.
img: assets/img/projects/divine/field-rover.jpeg
importance: 2
category: applied-research
---

<p class="ale-project-lead">DIVINE explores how computer vision can turn vineyard imagery into evidence for earlier, more targeted disease management—reducing the need for indiscriminate treatments while keeping deployment constraints in view.</p>

## From public data to the vineyard

The project has evolved through two complementary research phases. The first established the data and modelling foundations. Four public sources were cleaned, harmonised and re-annotated to create the **Vine Leaf Vision Dataset**: nearly 10,000 images of individual leaves and vine walls, with more than 38,000 bounding-box annotations. Visual symptom patterns were used as labels so that non-specialist annotators could contribute with less diagnostic ambiguity. Experiments then studied how pre-training on this collection affected transfer to previously unseen diseases, comparing classification and object-detection families including MobileNet, Vision Transformers, YOLO and DETR.

The current phase moves DIVINE into real acquisition conditions. At the experimental vineyard in Grugliasco, an autonomous electric rover carries a Nikon Z50 camera, controlled halogen lighting and centimetre-level GNSS RTK positioning. The campaign produced **1,832 high-resolution images**. A semi-automatic Label Studio workflow first proposes leaf boxes with YOLOv11n and a patch-based detector; a DISAFA agronomist then verifies the boxes and assigns disease labels. This keeps the speed benefit of machine assistance while reserving diagnosis for domain expertise.

<div class="ale-project-gallery ale-project-gallery--three">
  <figure>
    <img src="{{ '/assets/img/projects/divine/field-rover.jpeg' | relative_url }}" alt="Autonomous acquisition rover between rows of grapevines" loading="eager">
    <figcaption>The in-field acquisition platform in the Grugliasco experimental vineyard.</figcaption>
  </figure>
  <figure>
    <img src="{{ '/assets/img/projects/divine/ai-assisted-detection.jpeg' | relative_url }}" alt="Vine leaves with automatically proposed detection boxes" loading="lazy">
    <figcaption>Automatic leaf localisation on high-resolution vineyard imagery.</figcaption>
  </figure>
  <figure>
    <img src="{{ '/assets/img/projects/divine/expert-annotation.jpeg' | relative_url }}" alt="Expert-reviewed leaf boxes with disease labels" loading="lazy">
    <figcaption>Expert review converts proposed boxes into disease-aware annotations.</figcaption>
  </figure>
</div>

## Models and deployment trade-offs

The new study compares a one-stage route—**YOLOv11n** and **RT-DETR** directly detecting disease classes—with a two-stage route in which YOLO first isolates each leaf and **Query2Label** classifies the crop. Baseline training, data augmentation, and tiling with minority-class oversampling test how the architectures respond to small symptoms, high-resolution inputs and strong class imbalance.

The results do not point to a single model for every setting. The two-stage pipeline is the most robust option for offline monitoring, while **RT-DETR with tiling** offers the stronger accuracy–speed compromise for real-time field use. Because all current in-field data come from one experimental site, these results describe the present distribution rather than claiming generalisation to other vineyards. Multi-site acquisition and model compression through quantisation and pruning are the next steps.

<figure class="ale-project-feature">
  <img src="{{ '/assets/img/projects/divine/two-stage-pipeline.png' | relative_url }}" alt="Two-stage DIVINE pipeline: YOLO detects and crops leaves, then Query2Label classifies each crop" loading="lazy">
  <figcaption>The two-stage pipeline separates leaf localisation from disease classification.</figcaption>
</figure>

## Related theses and outputs

<div class="ale-related-work">
  <article>
    <span class="ale-related-work__status">Master's thesis · 2024 · published</span>
    <h3>DIVINE: DIagnosis of grapeVIne diseases through NEural networks and deep learning</h3>
    <p><strong>Fabrizio Sanino</strong>, supervised by Prof. Andrea Bottino. Introduced the Vine Leaf Vision Dataset, AI-assisted annotation tools, transfer-learning baselines and the original embedded-deployment analysis.</p>
    <a href="https://webthesis.biblio.polito.it/31783/" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-graduation-cap" aria-hidden="true"></i> Thesis record <span aria-hidden="true">↗</span></a>
    <a href="https://github.com/fabriziosanino/grape_leaves_detection" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github" aria-hidden="true"></i> Code <span aria-hidden="true">↗</span></a>
  </article>
  <article>
    <span class="ale-related-work__status">Master's thesis · 2025–2026 · forthcoming</span>
    <h3>DIVINE: Imaging Diagnosis of Vine diseases using Neural networks and deep learning</h3>
    <p><strong>Matteo Giardino</strong>, supervised by Prof. Andrea Bottino and PhD Alessandro Emmanuel Pecora. Extends DIVINE with real vineyard acquisitions, expert-reviewed disease labels, modern one-stage detectors and a specialised two-stage pipeline.</p>
  </article>
</div>
