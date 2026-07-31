---
layout: page
title: Project Lazarus
card_description: An immersive virtual patient for healthcare communication training.
img: assets/img/projects/lazarus/vr-environment.png
importance: 2
year: 2026
category: phd-research
---

<p class="ale-project-lead">Project Lazarus is an immersive VR application for training <strong>communication skills in healthcare</strong>. It lets nurses and clinicians hold a natural, fully spoken conversation with a <strong>virtual patient</strong> that listens, feels and reacts, so they can rehearse emotionally difficult exchanges before facing them with real patients.</p>

Communication is a core clinical skill, especially in emotionally charged situations. Today it is trained mainly through role-play with real actors and expert observation: pedagogically valuable, but costly, hard to scale and only partially standardised, with little support for repeatable, logged assessment. Virtual approaches so far force a trade-off, as immersive virtual humans offer presence but rigid, scripted dialogue, while LLM-based virtual patients converse fluently yet rarely live inside immersive training or track an explicit patient state. Project Lazarus sits at that intersection: a fluent, emotion-driven virtual patient inside immersive VR, where the same conversation can be rehearsed and reviewed safely and as many times as needed.

<figure class="ale-project-feature">
  <img src="{{ '/assets/img/projects/lazarus/vr-environment.png' | relative_url }}" alt="Immersive care room where the trainee meets the virtual patient" loading="eager">
  <figcaption>The trainee meets the virtual patient inside a simulated care room and talks with them in real time.</figcaption>
</figure>

## An emotion-driven virtual patient

The virtual patient runs on an emotion-driven cognitive architecture. As the trainee speaks, Lazarus perceives their verbal, paraverbal and nonverbal behaviour, that is what is said, but also tone, rhythm and volume, gaze, interpersonal distance and even virtual physical contact, and interprets the communication techniques being used. This continuously updates the patient's internal state: an emotional condition and a willingness to engage with the goal of the session. That goal is concrete: for example, persuading a reluctant patient to get up. Communicate well and the patient's willingness rises; once it crosses a threshold, when the trainee asks the patient to stand, Lazarus gets up.

<div class="ale-project-video">
  <video controls preload="metadata" poster="{{ '/assets/img/projects/lazarus/video-poster.jpg' | relative_url }}">
    <source src="{{ '/assets/video/lazarus-demo.mp4' | relative_url }}" type="video/mp4">
    Your browser does not support embedded video.
  </video>
  <p>Project Lazarus in use: a trainee holds a spoken conversation with the virtual patient inside the immersive VR room. Spoken demonstration in Italian.</p>
</div>

## Evaluation

We are running usability and performance studies with clinical experts and nursing students at the **University of Turin**. Early results are encouraging, with high ratings for immersion, presence and the believability of the virtual patient.

## Context and collaboration

Project Lazarus is one of the core projects of my PhD, developed within the **Computer Graphics and Vision Group at Politecnico di Torino** as part of the group's research on believable virtual humans, embodied AI and cognitive architectures, in collaboration with the nursing and public-health researchers of the **University of Turin**.

## Related work

<div class="ale-project-pub ale-in-press">
  <div class="ale-project-pub__meta">
    <span class="ale-project-pub__venue">MetroXRAINE</span>
    <span class="ale-project-pub__status">In press</span>
  </div>
  <div class="ale-project-pub__body">
    <p class="ale-project-pub__title">Design and Preliminary Evaluation of an LLM-Driven Cognitive Architecture for an Immersive Virtual Patient in Healthcare Communication Training</p>
    <p class="ale-project-pub__authors">C. Annicchiarico, A. Gianolla, <u>A. E. Pecora</u>, S. Calzolari, F. Strada, A. Bottino, B. Albanesi, I. Lovetro and S. Gonella</p>
    <p class="ale-project-pub__source">In Proceedings of IEEE MetroXRAINE 2026 · IEEE</p>
  </div>
</div>
