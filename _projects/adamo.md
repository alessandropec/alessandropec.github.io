---
layout: page
title: A.D.A.M.O.
card_description: A language-driven virtual human that perceives, reasons and acts inside interactive 3D environments.
img: assets/img/projects/adamo/framework-teaser.jpg
importance: 1
year: 2026
category: phd-research
related_publications: true
---

<p class="ale-project-lead"><strong>A.D.A.M.O.</strong>—<strong>A</strong>gent for language-<strong>D</strong>riven <strong>A</strong>ctions with <strong>M</strong>ultimodal <strong>O</strong>bservations—is a virtual human that can receive a natural-language instruction, observe a 3D environment and act inside it to complete the requested task.</p>

Virtual characters are usually strong on only one side of the interaction. Conversational agents can speak but often have little awareness of their surroundings, while game characters can move and manipulate objects but depend on predefined scripts. A.D.A.M.O. connects language, perception, reasoning and action in a single control loop, allowing the character to address new spatial tasks without a dedicated scripted sequence.

<figure class="ale-project-feature ale-project-feature--teaser">
  <img src="{{ '/assets/img/projects/adamo/framework-teaser.jpg' | relative_url }}" alt="A.D.A.M.O. framework connecting observation, multimodal memory, reasoning and actions in a virtual environment" loading="eager">
  <figcaption>A.D.A.M.O. follows a perceive–reason–act loop. Observations combine visual input, symbolic information and action feedback; a Vision–Language Model uses short-term memory to select the next action.</figcaption>
</figure>

<div class="ale-project-video">
  <video controls preload="metadata" poster="{{ '/assets/img/projects/adamo/video-poster.jpg' | relative_url }}">
    <source src="{{ '/assets/video/adamo-demo.mp4' | relative_url }}" type="video/mp4">
    Your browser does not support embedded video.
  </video>
  <p>The edited demonstration keeps the assigned task visible while A.D.A.M.O. observes the room, walks towards the relevant objects and completes the requested spatial relation.</p>
</div>

## Perceiving and acting in the same world

The character works continuously: it observes the environment, decides what to do next and performs an action. Looking, walking, picking up an object and placing it elsewhere are simple operations, but they can be combined to solve instructions involving several objects and spatial relations.

A.D.A.M.O. maintains a dual view of the environment. The visual view provides the character's egocentric observation, enriched with labels and reference points. A synchronized symbolic state adds structured information such as object positions, dimensions and the character's location. Shared identifiers connect what appears in the image with the corresponding element in the 3D world, helping the model ground expressions such as “the glass near the plate”.

<figure class="ale-project-feature ale-project-feature--perception">
  <img src="{{ '/assets/img/projects/adamo/visual-symbolic-perception.png' | relative_url }}" alt="A.D.A.M.O. visual perception with labelled objects and spatial reference points" loading="lazy">
  <figcaption>The visual observation identifies interactable objects and spatial reference points. The same identifiers appear in the symbolic state used for the next decision.</figcaption>
</figure>

A multimodal short-term memory keeps the instruction, recent observations, action feedback and relevant world state available across the different steps. The Vision–Language Model can then either call the next action or signal that the task has been completed.

## Evaluation

The prototype was evaluated on fifteen natural-language spatial tasks across a tabletop scene and a more complex living room. The experiments show that semantic object labels substantially improve task completion by reducing ambiguity. Performance decreases as scenes and instructions become more complex, with visual perception remaining the main source of error; reasoning errors were comparatively rare.

## Context and collaboration

A.D.A.M.O. was developed within the **Computer Graphics and Vision Group at Politecnico di Torino** as part of research on believable virtual humans, embodied AI and cognitive architectures. The work was presented at **CASA XR 2026**.

## Related work

<ul class="ale-project-related-list">
  <li>
    <span>Conference paper · CASA XR 2026 · in press</span>
    <div><strong>A.D.A.M.O. (Agent for language-Driven Actions with Multimodal Observations): A Visual-Symbolic Framework for Virtual Humans</strong><small>A. E. Pecora, S. Calzolari, F. Strada and A. Bottino</small></div>
  </li>
  <li>
    <span>Open-source software</span>
    <div><strong>A.D.A.M.O. project repository</strong><small>Code and project resources</small></div>
    <a class="ale-project-reference-action" href="https://github.com/CGVGroup/ADAMO" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github" aria-hidden="true"></i> Code <span aria-hidden="true">↗</span></a>
  </li>
</ul>

## Ongoing work

We are extending A.D.A.M.O. to explore more complex environments, interact with a broader range of objects and build long-term spatial memory that can be reused over time.
