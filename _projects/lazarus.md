---
layout: page
title: Project Lazarus
card_description: An immersive virtual patient for healthcare communication training.
img: assets/img/projects/lazarus/vr-environment.png
importance: 2
year: 2026
category: phd-research
---

<p class="ale-project-lead">Project Lazarus is an immersive training application where healthcare professionals can practise difficult conversations with a virtual patient. The trainee speaks naturally, while the patient listens, responds and changes attitude according to how the conversation develops.</p>

Existing training often relies on role-play with actors. Although effective, these sessions can be expensive, difficult to repeat and hard to reproduce consistently. Lazarus provides a controlled environment in which a conversation can be rehearsed several times and reviewed afterwards, without replacing human-led training.

<div class="ale-project-video">
  <video controls preload="metadata" poster="{{ '/assets/img/projects/lazarus/video-poster.jpg' | relative_url }}">
    <source src="{{ '/assets/video/lazarus-demo.mp4' | relative_url }}" type="video/mp4">
    Your browser does not support embedded video.
  </video>
  <p>Project Lazarus in use. The spoken demonstration is in Italian.</p>
</div>

## How it works

The application connects a virtual environment with an AI-based cognitive architecture. During the interaction, the system considers what the trainee says, how it is said and selected nonverbal cues. It uses this information to update the patient's emotional condition and willingness to cooperate, then generates the next response.

The same system can be used through two interfaces. The web application makes each conversational step and the patient state visible, helping experts inspect and review an interaction. The VR application places the trainee directly inside a simulated care room for a more natural rehearsal experience.

<figure class="ale-project-feature ale-project-feature--diagram">
  <img src="{{ '/assets/img/projects/lazarus/system-architecture.png' | relative_url }}" alt="Information flow between the Lazarus application, cognitive architecture and AI services" loading="lazy">
  <figcaption>A shared cognitive architecture connects the user experience with the AI services.</figcaption>
</figure>

<div class="ale-project-gallery ale-project-gallery--contain">
  <figure>
    <img src="{{ '/assets/img/projects/lazarus/web-interface.png' | relative_url }}" alt="Lazarus web interface showing the conversation and virtual patient" loading="lazy">
    <figcaption>Web interface for inspecting and reviewing the interaction.</figcaption>
  </figure>
  <figure>
    <img src="{{ '/assets/img/projects/lazarus/vr-environment.png' | relative_url }}" alt="Lazarus immersive care-room environment" loading="lazy">
    <figcaption>Immersive training inside a simulated care room.</figcaption>
  </figure>
</div>

## Context and collaboration

Lazarus is being developed as part of PhD research at **Politecnico di Torino**, in collaboration with healthcare researchers from the **University of Turin**. The project brings together expertise in artificial intelligence, virtual environments, communication and healthcare education.

## Research status

We are currently preparing a scientific study for publication, and a patenting process related to the project is underway.
