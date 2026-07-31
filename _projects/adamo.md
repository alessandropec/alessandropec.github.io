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

At its core is a continuous loop: at each step the character observes the scene through a combined visual and symbolic view, a Vision–Language Model reasons over that observation and, through tool calling, selects the next primitive action (look, walk, pick or drop), while a short-term memory keeps the instruction and recent context available so the loop stays coherent until the task is solved.

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

## Evaluation

Measuring progress here is difficult, because existing benchmarks test either language understanding or procedural execution, rarely both at once. To evaluate A.D.A.M.O. we introduce a controlled benchmark of natural-language spatial tasks, organised by a **Capability–Difficulty taxonomy** that grades each task by how complex its language is and how much action it requires. This lets us check whether the character turns a plain instruction into a coherent sequence of actions that actually solves it. In its best configuration A.D.A.M.O. completes about **88% of the benchmark tasks on average**, with completion decreasing as tasks grow more complex.

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
