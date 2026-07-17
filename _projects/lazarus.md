---
layout: page
title: Project Lazarus
description: An LLM-driven cognitive architecture for an immersive virtual patient in healthcare communication training.
img: assets/img/projects/lazarus/video-poster.jpg
importance: 2
category: phd-research
---

<p class="ale-project-lead">Project Lazarus is an immersive virtual patient for practising difficult healthcare conversations. It combines open-ended voice interaction with an explicit, evolving model of the patient's emotions and willingness to act.</p>

## Training through conversation

Traditional role-play with actors is valuable but costly to scale, difficult to repeat under controlled conditions and limited in the interaction data it can preserve. Lazarus provides a complementary rehearsal environment: a trainee speaks naturally with an embodied patient in a realistic care room, while the system interprets verbal, paraverbal and nonverbal cues and generates an affect-aware response.

The same cognitive architecture supports two frontends: a web interface for turn-by-turn inspection and expert annotation, and an immersive VR experience for realistic rehearsal. After the session, the recorded interaction state can support reflection on the communication strategies used by the trainee.

<div class="ale-project-video">
  <video controls preload="metadata" poster="{{ '/assets/img/projects/lazarus/video-poster.jpg' | relative_url }}">
    <source src="{{ '/assets/video/lazarus-demo.mp4' | relative_url }}" type="video/mp4">
    Your browser does not support embedded video.
  </video>
  <p>Project walkthrough: conversational interaction, patient-state evolution and the immersive training environment.</p>
</div>

## Cognitive architecture

At every turn, the runtime sends the trainee's multimodal input to a graph-based cognitive architecture server. LLM modules identify the communication technique, assess interaction quality, update the patient state and compose the next response. The internal state combines an emotion representation in **Pleasure–Arousal–Dominance (PAD)** space with a scalar **Disposition to Act**, modelling the patient's readiness to engage in the target activity. This makes the patient's behaviour depend on the trajectory of the conversation rather than on isolated prompts.

<figure class="ale-project-feature ale-project-feature--diagram">
  <img src="{{ '/assets/img/projects/lazarus/system-architecture.png' | relative_url }}" alt="Information flow between the Lazarus runtime, cognitive architecture server and language-model providers" loading="lazy">
  <figcaption>Shared information flow across the web and VR frontends.</figcaption>
</figure>

<div class="ale-project-gallery">
  <figure>
    <img src="{{ '/assets/img/projects/lazarus/web-interface.png' | relative_url }}" alt="Lazarus web interface showing interaction cues and patient state" loading="lazy">
    <figcaption>Web interface for controlled rehearsal, state inspection and expert annotation.</figcaption>
  </figure>
  <figure>
    <img src="{{ '/assets/img/projects/lazarus/vr-environment.png' | relative_url }}" alt="Immersive Lazarus virtual patient in a care room" loading="lazy">
    <figcaption>Immersive VR frontend in a realistic care-room scenario.</figcaption>
  </figure>
</div>

## Related publication and IP

<div class="ale-related-work">
  <article>
    <span class="ale-related-work__status">Conference paper · preliminary evaluation · forthcoming</span>
    <h3>Design and Preliminary Evaluation of an LLM-Driven Cognitive Architecture for an Immersive Virtual Patient in Healthcare Communication Training</h3>
    <p>Ciro Annicchiarico, Alessia Gianolla, Alessandro Emmanuel Pecora, Stefano Calzolari, Francesco Strada, Andrea Bottino, Beatrice Albanesi, Ilaria Lovetro and Silvia Gonella.</p>
  </article>
  <article>
    <span class="ale-related-work__status">Intellectual property</span>
    <h3>Patent application in preparation</h3>
    <p>The application covers aspects of the cognitive architecture and its use in immersive healthcare communication training.</p>
  </article>
</div>
