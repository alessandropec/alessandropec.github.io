---
layout: page
title: AI Voice Cloning
card_description: M.Sc. thesis on zero-shot voice cloning — text-to-speech models combined with speaker embeddings.
img: assets/img/projects/voice-cloning/spectrogram-cover.jpg
importance: 8
year: 2023
category: msc-thesis
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

## Context and collaboration

The project was developed as an M.Sc. thesis in Computer Engineering at **Politecnico di Torino**.

## Related work

<div class="ale-project-pub">
  <div class="ale-project-pub__meta">
    <span class="ale-project-pub__venue">M.Sc. thesis</span>
    <a class="ale-project-pub__code" href="https://webthesis.biblio.polito.it/27738/" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-graduation-cap" aria-hidden="true"></i><span>Thesis</span><span aria-hidden="true">↗</span></a>
    <a class="ale-project-pub__code" href="https://github.com/alessandropec/data_driven_ai_voice_cloning" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github" aria-hidden="true"></i><span>Code</span><span aria-hidden="true">↗</span></a>
  </div>
  <div class="ale-project-pub__body">
    <p class="ale-project-pub__title">Data Driven: AI Voice Cloning</p>
    <p class="ale-project-pub__authors"><u>A. E. Pecora</u> · Supervisors: L. Cagliero, M. La Quatra, L. Vaiani</p>
    <p class="ale-project-pub__source">M.Sc. thesis · Politecnico di Torino · 2023</p>
  </div>
</div>
