---
layout: page
title: "Data Driven: AI Voice Cloning"
card_description: M.Sc. thesis on zero-shot voice cloning — text-to-speech models combined with speaker embeddings.
img: assets/img/projects/voice-cloning/spectrogram-cover.jpg
importance: 8
year: 2023
category: msc-thesis
---

<p class="ale-project-lead">My M.Sc. thesis on zero-shot voice cloning: combining text-to-speech synthesis with speaker embeddings to generate speech in a target voice from roughly five seconds of reference audio.</p>

Conventional text-to-speech systems learn a fixed set of speakers during training. Adapting one to a new voice normally means collecting a large amount of recordings for that person and fine-tuning a dedicated model. This thesis attacks both limits: reducing the data a voice needs, and removing the per-speaker model altogether through a zero-shot approach, where the target voice is described only by a short reference recording.

## System design

<figure class="ale-project-feature ale-project-feature--diagram">
  <img src="{{ '/assets/img/projects/voice-cloning/pipeline.png' | relative_url }}" alt="Voice-cloning pipeline with speaker encoder, FastSpeech2 and HiFi-GAN" loading="lazy">
  <figcaption>A speaker embedding conditions FastSpeech2; HiFi-GAN converts the predicted spectrogram into the final waveform.</figcaption>
</figure>

The system separates **what is spoken** from **who is speaking**, and puts the two back together at synthesis time.

**Text-to-speech.** The Tacotron and FastSpeech families were compared. Tacotron 2 is autoregressive and learns the text–audio correspondence through attention, which made training slow and unstable until the alignment plots converged to a clean diagonal. **FastSpeech2** instead predicts phoneme duration, pitch and energy explicitly — durations extracted with Montreal Forced Alignment — so it avoids the alignment problem, trains faster, and lets pitch, energy and speed be modulated after synthesis. HiFi-GAN then turns the predicted mel-spectrogram into the final waveform.

**Speaker embeddings.** On the recognition side, the work reviews i-vectors, d-vectors and x-vectors, and fine-tunes two architectures — **ECAPA-TDNN** and WavLM+ — with the **Generalized End-to-End (GE2E) loss**, which builds each batch from several speakers and several utterances each and pushes embeddings of the same speaker together and different speakers apart. The result is a compact vector that captures a voice from a few seconds of audio.

**Voice cloning as the union of the two.** The cloner conditions FastSpeech2 on the speaker embedding produced by ECAPA-TDNN: one embedding per utterance (rather than a speaker average), projected into the encoder's dimension and summed to its output. Nothing is fine-tuned per speaker — the identity enters as an input, so a voice never heard during training can be synthesised from about five seconds of reference audio.

## Evaluation

Three datasets support the experiments. **VoxCeleb1** is used for speaker verification. **LibriTTS** — 585 hours of read English speech from 2,456 speakers, at 24 kHz and segmented at sentence breaks — trains and tests the synthesis and cloning models. The third, **61PangramITA**, I recorded myself: 61 *pangram* utterances, sentences that contain every letter of the alphabet, from 7 Italian speakers with different accents, about five minutes of speech per voice. The reasoning is that pangrams maximise character variability, so every training step exposes the model to the full alphabet and far fewer samples are needed to learn a voice — quality of data in place of quantity.

**Speaker verification.** Fine-tuning with the GE2E loss improved both architectures over their public checkpoints. The best model is ECAPA-TDNN, with an **Equal Error Rate of 0.86%** on the cleaned VoxCeleb1 test list, against 0.90% for the SpeechBrain baseline — and it does so with 22.3M parameters against the 304M of WavLM+.

**The pangram case study.** Tacotron 2, pretrained on Italian and fine-tuned on the 61 pangrams of my own voice — roughly five minutes of audio — reached a **validation loss of 0.33**, against 0.42 for the same model fine-tuned on 200 randomly chosen utterances from the same speaker. Better convergence from a third of the data.

**The zero-shot cloner.** Rather than human listening tests, two objective metrics were used on 2,500 real–synthetic utterance pairs. Similarity is measured by the **Voice Clone Error Rate**, which asks the best verification model, at its own EER threshold, whether a synthesised utterance belongs to the target speaker: **44.83%** when the synthesised text matches the reference, meaning the verifier accepted the clone as the target speaker in about 55% of the pairs, dropping to 33% when the synthesised text is different. Intelligibility is measured as Word Error Rate through Whisper: **20.54%** on the synthesised utterances against 13.39% on the corresponding real ones — a gap of about seven points, small enough to keep the speech comfortably understandable.

## Context and collaboration

The project was developed as an M.Sc. thesis in Data Science & Engineering at **Politecnico di Torino**, supervised by Luca Cagliero with Moreno La Quatra and Lorenzo Vaiani, with computing resources from the **HPC@Polito** lab. A demo application was released alongside the thesis to showcase the cloner and provide a starting point for further work.

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
