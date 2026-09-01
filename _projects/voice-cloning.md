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

Conventional text-to-speech systems learn a fixed set of voices during training, and adding a new one means recording hours of that person and fine-tuning a dedicated model. This thesis attacks both limits: cutting the amount of data a voice needs, then removing the per-speaker model altogether with a **zero-shot** approach — the target voice is never seen during training and is described to the system, at synthesis time, by a few seconds of reference audio.

## System design

The system separates **what is spoken** from **who is speaking**. One branch turns text into speech; the other compresses a recording into a **speaker embedding**, a short list of numbers that describes a voice. Conditioning the first branch on the second is what makes cloning possible.

<figure class="ale-project-feature ale-project-feature--diagram">
  <img src="{{ '/assets/img/projects/voice-cloning/pipeline.png' | relative_url }}" alt="Voice-cloning pipeline with speaker encoder, FastSpeech2 and HiFi-GAN" loading="lazy">
  <figcaption>A speaker embedding conditions FastSpeech2; HiFi-GAN converts the predicted spectrogram into the final waveform.</figcaption>
</figure>

**Text-to-speech.** Two model families were compared. Tacotron 2 generates the audio step by step and has to work out on its own which piece of text each moment of sound belongs to, which made training slow and fragile. **FastSpeech2** instead predicts how long each *phoneme* — the elementary sound units of speech — should last, along with its pitch and energy, taking reference durations from a forced-alignment tool that lines a transcript up with its audio. It trains faster and leaves pitch, energy and speed adjustable after synthesis. Its output is a *mel-spectrogram*, a compact time–frequency picture of the sound, which a neural *vocoder* (HiFi-GAN) turns into an audible waveform.

**Speaker embeddings.** The embedding comes from a speaker-verification model — one trained to judge whether two recordings belong to the same person. Two networks were fine-tuned, the compact **ECAPA-TDNN** and the much larger WavLM+, using the **Generalized End-to-End loss**: each training batch is filled with several utterances from several speakers, and the loss pulls the same voice together while pushing different voices apart.

**The two together.** The cloner feeds the embedding into FastSpeech2 — one embedding per utterance rather than one average per speaker, resized to the text encoder's dimension and added to its output. Nothing is retrained for a new voice: the identity enters as an input, so about five seconds of reference audio are enough for a speaker the model has never heard.

## Evaluation

Three datasets support the experiments. **VoxCeleb1** — thousands of speakers taken from interview videos — trains and tests the part of the system that recognises voices. **LibriTTS** — 585 hours of English audiobook speech from 2,456 readers — trains the synthesis and the cloning. The third I recorded myself: **61PangramITA**, 61 *pangrams* (sentences that use every letter of the alphabet) read by 7 Italian speakers with different accents, about five minutes of speech each. A pangram packs the widest variety of letters into the shortest sentence, so a handful of them already covers everything the model has to learn to pronounce — quality of data in place of quantity.

**Telling voices apart.** Everything else rests on how reliably the system recognises a voice. The best of the models tested is **ECAPA-TDNN**, which on the VoxCeleb1 benchmark gets it wrong in fewer than one case out of a hundred — an **Equal Error Rate of 0.86%**, counting both the times it mistakes two different people for the same one and the times it fails to recognise the same person twice.

**How little audio a voice needs.** Five minutes of my own voice, read as 61 pangrams, taught the synthesiser more than 200 ordinary sentences from the same person did — roughly three times as much audio. On sentences kept aside for testing, the pangram version came noticeably closer to the real recordings (**a validation loss of 0.33 against 0.42**, where lower means closer). Carefully chosen data beats more data.

**Cloning a voice never heard before.** The final system was judged by machines rather than by human listeners, on 2,500 pairs of real and synthetic clips. For similarity, the voice-recognition model above was asked whether each synthetic clip really was the target speaker: it accepted the clone in about **55%** of the cases when the sentence matched the reference recording, and in 33% when the sentence was a different one — close to the original voice, then, but not indistinguishable from it. For intelligibility, an automatic transcriber (OpenAI's Whisper) listened to both sides: it misheard **20.5%** of the words in the synthetic audio against 13.4% in the real recordings — about seven points worse, so slightly harder to follow, but plainly understandable.

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
