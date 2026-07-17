---
layout: page
title: A.D.A.M.O.
description: A virtual human that understands instructions and acts inside a 3D environment.
img: assets/img/projects/adamo/video-poster.jpg
importance: 1
category: phd-research
related_publications: true
---

<p class="ale-project-lead">A.D.A.M.O. is an intelligent virtual human that can receive a natural-language instruction, observe a 3D environment and act inside it to complete the requested task.</p>

Virtual characters are usually good at only one side of the interaction. Conversational agents can speak but often have little awareness of their surroundings, while game characters can move and manipulate objects but depend on predefined scripts. A.D.A.M.O. brings language, visual perception and action into the same system, allowing a character to respond to new instructions without requiring a separate scripted sequence for each task.

<div class="ale-project-video">
  <video controls preload="metadata" poster="{{ '/assets/img/projects/adamo/video-poster.jpg' | relative_url }}">
    <source src="{{ '/assets/video/adamo-demo.mp4' | relative_url }}" type="video/mp4">
    Your browser does not support embedded video.
  </video>
  <p>A.D.A.M.O. interprets the request, observes the room and moves objects to complete a spatial task.</p>
</div>

## How it works

The virtual human works in a continuous loop: it looks at the environment, decides what to do next and performs an action. Its available actions are intentionally simple—looking, walking, picking up an object and placing it somewhere else—but they can be combined to solve more complex instructions.

To understand the scene, A.D.A.M.O. combines the character's visual point of view with structured spatial information about visible objects. This visual-symbolic representation helps the AI connect phrases such as “the plate near the cup” with specific elements and positions in the virtual world. A short-term memory keeps the task and recent observations available while the character works through each step.

<div class="ale-project-gallery ale-project-gallery--contain">
  <figure>
    <img src="{{ '/assets/img/projects/adamo/virtual-environment.png' | relative_url }}" alt="A.D.A.M.O. virtual human inside a furnished 3D room" loading="lazy">
    <figcaption>The virtual human operates inside an interactive 3D environment.</figcaption>
  </figure>
  <figure>
    <img src="{{ '/assets/img/projects/adamo/infrastructure.png' | relative_url }}" alt="Connection between the virtual environment, cognitive server and AI model" loading="lazy">
    <figcaption>The simulation, actions and AI reasoning remain separate and can evolve independently.</figcaption>
  </figure>
</div>

The current prototype was evaluated on everyday spatial tasks in two controlled scenes. The experiments show that clear semantic information about objects improves task completion, while visual perception remains the main source of difficulty in larger scenes. Current development is extending the agent with longer-term spatial memory so that it can retain and reuse knowledge about environments over time.

## Context and collaboration

A.D.A.M.O. was developed within the **Computer Graphics and Vision Group at Politecnico di Torino** as part of research on believable virtual humans, embodied AI and cognitive architectures. The work was presented at **CASA XR 2026**.

## Related work

<ul class="ale-project-related-list">
  <li>
    <span>Conference paper · CASA XR 2026 · in press</span>
    <strong>A.D.A.M.O. (Agent for language-Driven Actions with Multimodal Observations): A Visual-Symbolic Framework for Virtual Humans</strong>
    <small>A. E. Pecora, S. Calzolari, F. Strada and A. Bottino</small>
  </li>
  <li>
    <span>Open-source software</span>
    <a href="https://github.com/CGVGroup/ADAMO" target="_blank" rel="noopener noreferrer">A.D.A.M.O. project repository <span aria-hidden="true">↗</span></a>
    <small>Code and project resources</small>
  </li>
</ul>
