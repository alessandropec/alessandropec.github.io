---
layout: page
title: A.D.A.M.O.
card_description: A language-driven virtual human that perceives, reasons and acts inside interactive 3D environments.
img: assets/img/projects/adamo/character-portrait.jpg
importance: 1
year: 2026
category: phd-research
---

<p class="ale-project-lead"><strong>A.D.A.M.O.</strong>—<strong>A</strong>gent for language-<strong>D</strong>riven <strong>A</strong>ctions with <strong>M</strong>ultimodal <strong>O</strong>bservations—is a virtual human that receives a natural-language instruction, observes a 3D environment and acts inside it to complete the requested task.</p>

Virtual characters are usually strong on only one side of the interaction. Conversational agents can talk but have little awareness of their surroundings, while game characters can move and manipulate objects only through predefined scripts. A.D.A.M.O. connects language, perception, reasoning and action in a single control loop, so the character can address new spatial tasks without a dedicated scripted sequence.

<figure class="ale-project-feature ale-project-feature--teaser">
  <img src="{{ '/assets/img/projects/adamo/framework-teaser.jpg' | relative_url }}" alt="A.D.A.M.O. architecture: observation, multimodal short-term memory, reasoning and actions in a virtual environment" loading="eager">
  <figcaption>A.D.A.M.O. architecture follows a Perceive–Reason–Act loop. Observations combine symbolic state, egocentric visual input, and action feedback. A VLM with tool calling and multimodal short-term memory selects actions, which are executed as primitive operations (Walk, Pick/Drop, Look) and fed into the next cycle.</figcaption>
</figure>

<div class="ale-project-video">
  <video controls preload="metadata" poster="{{ '/assets/img/projects/adamo/video-poster.jpg' | relative_url }}">
    <source src="{{ '/assets/video/adamo-demo.mp4' | relative_url }}" type="video/mp4">
    Your browser does not support embedded video.
  </video>
  <p>A.D.A.M.O. in action: given a natural-language task, the character acts in a loop, perceiving the scene and choosing grounded actions to solve it. On the right is the virtual environment; on the top left the character's egocentric view, augmented to align vision with the symbolic state; on the bottom left the agentic flow.</p>
</div>

## Perceiving and acting through language

The character works continuously: it observes the environment, decides what to do next and performs an action. Looking, walking, picking up an object and placing it elsewhere are simple primitives, but combined they solve instructions involving several objects and spatial relations.

At each step A.D.A.M.O. relies on a synchronized dual view of the world. The visual view is the character's egocentric image, enriched with object labels and reference points; the symbolic view adds structured text such as object positions, dimensions and the character's own location. Shared identifiers connect what appears in the image with the matching element in the 3D world, helping the model ground expressions such as “the glass near the plate”.

<figure class="ale-project-feature ale-project-feature--perception">
  <img src="{{ '/assets/img/projects/adamo/visual-symbolic-perception.png' | relative_url }}" alt="A.D.A.M.O. visual view with labelled objects and spatial reference points" loading="lazy">
  <figcaption>The visual view identifies interactable objects and spatial reference points. The same identifiers appear in the synchronized symbolic state used for the next decision.</figcaption>
</figure>

Language is what holds this together. A Vision–Language Model (VLM) reads the dual view as text, reasons over it and calls the next action, turning perception, reasoning and action into one shared medium. A multimodal short-term memory (MSTM) keeps the instruction, recent observations, action feedback and relevant world state available across steps, so the model always has the right context and can either act again or signal that the task is complete.

## Evaluation

Measuring progress here is difficult: existing benchmarks usually test either linguistic understanding or procedural execution, rarely both at once. To evaluate A.D.A.M.O. we introduce a controlled task suite organised by a **Capability–Difficulty (C–D) taxonomy** that scores each task by how complex its language is (object references and spatial relations) and how much action it requires. This lets us give an instruction in plain natural language and check whether the character carries out a coherent sequence of actions that actually solves it.

Across fifteen spatial tasks in a tabletop scene and a more complex living room, semantic object labels substantially improve task completion by reducing ambiguity, and completion decreases as tasks grow more demanding. Visual perception remains the main source of error, while reasoning errors are comparatively rare.

<figure class="ale-project-feature ale-project-feature--diagram">
  <img src="{{ '/assets/img/projects/adamo/results-labeling.png' | relative_url }}" alt="Bar chart of task completion rate per task, ordered by Capability–Difficulty level, comparing semantic and opaque labels" loading="lazy">
  <figcaption>Task completion across the benchmark, ordered by Capability–Difficulty level. Semantic labels (SEM) consistently outperform opaque identifiers (OPAQ), and completion tends to decrease as task difficulty increases.</figcaption>
</figure>

## Context and collaboration

A.D.A.M.O. is one of the core projects of my PhD, developed within the **Computer Graphics and Vision Group at Politecnico di Torino** as part of the group's research on believable virtual humans, embodied AI and cognitive architectures. The work was presented at **[CASA XR 2026](https://cgs-network.org/CASAXR26/index.php/home/)**.

## Related work

<div class="ale-project-pub ale-in-press">
  <div class="ale-project-pub__meta">
    <span class="ale-project-pub__venue">CASA XR</span>
    <span class="ale-project-pub__status">In press</span>
    <a class="ale-project-pub__code" href="https://github.com/CGVGroup/ADAMO" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github" aria-hidden="true"></i><span>Code</span><span aria-hidden="true">↗</span></a>
  </div>
  <div class="ale-project-pub__body">
    <p class="ale-project-pub__title">A.D.A.M.O. (Agent for language-Driven Actions with Multimodal Observations): A Visual-Symbolic Framework for Virtual Humans</p>
    <p class="ale-project-pub__authors"><u>A. E. Pecora</u>, S. Calzolari, F. Strada and A. Bottino</p>
    <p class="ale-project-pub__source">In Proceedings of CASA XR 2026 · Springer LNCS</p>
  </div>
</div>

## Ongoing work

We are extending A.D.A.M.O. to explore more complex environments, interact with a broader range of objects and build long-term spatial memory that can be reused over time. We are also adding open-vocabulary perception, so the character can recognise any element of a scene rather than a fixed set of objects, together with improved autonomous exploration algorithms.
</content>
</invoke>
