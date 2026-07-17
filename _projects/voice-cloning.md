---
layout: page
title: AI Voice Cloning
card_description: M.Sc. thesis on zero-shot voice cloning — text-to-speech models combined with speaker embeddings.
img: assets/img/projects/voice-cloning/fastspeech2.png
importance: 8
year: 2023
category: msc-thesis
related_publications: true
---

<p class="ale-project-lead">My M.Sc. thesis on zero-shot voice cloning: combining text-to-speech synthesis with speaker embeddings to generate new speech in a target voice from short reference recordings.</p>

Conventional text-to-speech systems learn a fixed set of speakers during training. Zero-shot cloning instead asks the model to reproduce a voice that was not part of that training set, using only a short reference recording to describe the target speaker.

<figure class="ale-project-feature ale-project-feature--diagram">
  <img src="{{ '/assets/img/projects/voice-cloning/pipeline.png' | relative_url }}" alt="Voice-cloning pipeline with speaker encoder, FastSpeech2 and HiFi-GAN" loading="lazy">
  <figcaption>A speaker embedding conditions FastSpeech2; HiFi-GAN converts the predicted spectrogram into the final waveform.</figcaption>
</figure>

## System design

The system separates **what is spoken** from **who is speaking**. Text is converted into phoneme representations, while an ECAPA-TDNN speaker encoder extracts a compact identity embedding from reference audio. The embedding conditions the acoustic model, and a neural vocoder reconstructs the waveform.

<div class="ale-project-gallery ale-project-gallery--contain">
  <figure>
    <img src="{{ '/assets/img/projects/voice-cloning/fastspeech2.png' | relative_url }}" alt="FastSpeech2 acoustic model and waveform-decoder architecture" loading="lazy">
    <figcaption>FastSpeech2 predicts duration, pitch and energy before producing the acoustic representation.</figcaption>
  </figure>
  <figure>
    <img src="{{ '/assets/img/projects/voice-cloning/speaker-embeddings.png' | relative_url }}" alt="Two-dimensional projections of speaker embeddings from several experimental conditions" loading="lazy">
    <figcaption>Embedding projections are used to inspect whether generated samples preserve speaker identity.</figcaption>
  </figure>
</div>

## Experiments

The thesis compares modelling and training choices through objective audio measures and speaker-embedding analysis, examining the trade-off between intelligibility, naturalness and similarity to an unseen target speaker.

## Context

The project was developed as an M.Sc. thesis in Computer Engineering at **Politecnico di Torino**.

## Related work

<ul class="ale-project-related-list">
  <li>
    <span>Master's thesis · 2023</span>
    <div><strong>Data Driven: AI Voice Cloning</strong><small>A. E. Pecora · Supervisors: L. Cagliero, M. La Quatra and L. Vaiani</small></div>
  </li>
  <li>
    <span>Open-source software</span>
    <div><strong>AI Voice Cloning project repository</strong><small>Training, inference and evaluation code</small></div>
    <a class="ale-project-reference-action" href="https://github.com/alessandropec/data_driven_ai_voice_cloning" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github" aria-hidden="true"></i> Code <span aria-hidden="true">↗</span></a>
  </li>
</ul>
