---
layout: page
title: From a True Story
card_description: Turning museum catalogue records into narratives for cultural heritage storytelling, evaluated with expert and LLM-as-a-judge protocols.
img: assets/img/projects/from-a-true-story/teaser.png
importance: 5
year: 2026
category: phd-research
---

<p class="ale-project-lead"><strong>From a True Story</strong>—Leveraging Museum Catalogue Data for LLM-Driven Narrative Generation—is a cultural-heritage storytelling project that turns museum catalogue records into narratives grounded in the real historical record.</p>

Museum catalogues are full of narrative potential — objects, people and events that could become stories — but turning them into compelling narratives has traditionally required close collaboration between curators and professional writers. Large language models can generate fluent text, but on their own they tend to treat the source material as loose background rather than something that actually drives the plot, with little control over how the story is structured. From a True Story addresses this with an explicit, staged pipeline that keeps catalogue evidence functionally central to the narrative instead of decorative.

## From records to stories

The pipeline starts by filtering the catalogue down to entries with enough narrative substance, then an LLM scans what remains for narrative events — concrete episodes, like a ritual or a legal dispute, that could anchor a story — scoring each one for storytelling potential. The most promising events are mapped onto one of Georges Polti's thirty-six classical dramatic situations, conflict archetypes such as revolt or the pursuit of a contested object, which supply the roles — protagonist, adversary, the object of desire — that a story built around that event needs to satisfy.

A final stage turns each event and its dramatic scaffold into a 6-to-8-scene story, its inciting incident tied directly to the extracted catalogue event and every dramatic role incorporated along the way. The released datasets contain 1,200 structured narratives in total — 300 per experimental condition — generated with DeepSeek, Gemini and GPT-OSS models.

<figure class="ale-project-feature">
  <img src="{{ '/assets/img/projects/from-a-true-story/story-explorer.png' | relative_url }}" alt="Story explorer showing a catalogue entry, the extracted event, the dramatic-situation mapping and the generated scenes" loading="lazy">
  <figcaption>A real run of the pipeline, from a catalogue entry to a generated scene, in the project's browser-based story explorer.</figcaption>
</figure>

## Evaluation

Generated stories were scored by museum curators and drama experts against a shared rubric covering historical accuracy and dramatic quality: the best-performing model's stories included all three narrative turning points — inciting incident, climax, resolution — in 65% of cases.

A core part of the work was testing, rather than assuming, whether LLM-based judges can take on some of that evaluation at scale: judged against the same rubric, the best LLM judge reached a correlation of up to 0.59 with expert scores on the clearest dimensions, like whether real historical events were adapted faithfully — encouraging, though still short of a substitute for human judgment on the more interpretive dramatic criteria.

## Context and collaboration

The project is a collaboration between **Politecnico di Torino**, **Università di Torino** and **Museo Egizio**.

## Related work

<div class="ale-project-pub ale-in-press">
  <div class="ale-project-pub__meta">
    <span class="ale-project-pub__venue">ACM TIST</span>
    <span class="ale-project-pub__status">In press</span>
    <a class="ale-project-pub__code" href="https://github.com/dh-project/ACM_TIST_2026" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github" aria-hidden="true"></i><span>Code</span><span aria-hidden="true">↗</span></a>
    <a class="ale-project-pub__code" href="https://github.com/dh-project/ACM_TIST_2026/tree/main/visualization_tool" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-book-open" aria-hidden="true"></i><span>Explorer</span><span aria-hidden="true">↗</span></a>
  </div>
  <div class="ale-project-pub__body">
    <p class="ale-project-pub__title">From a True Story: Leveraging Museum Catalogue Data for LLM-Driven Narrative Generation</p>
    <p class="ale-project-pub__authors">E. Mensa, <u>A. E. Pecora</u>, C. Fulfaro, A. Pizzo, E. Ferraris, A. Bottino and R. Damiano</p>
    <p class="ale-project-pub__source">ACM Transactions on Intelligent Systems and Technology · 2026</p>
  </div>
</div>
