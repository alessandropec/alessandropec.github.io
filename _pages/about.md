---
layout: about
title: about me
permalink: /
subtitle: Ph.D. Candidate — <a href="https://www.polito.it/en/staff?p=105698">Politecnico di Torino</a>, DAUIN · Computer Graphics & Vision Group · Torino, Italy

profile:
  align: right
  image: # aggiungere una foto come assets/img/prof_pic.jpg e scrivere qui prof_pic.jpg
  image_circular: false # crops the image to make it circular
  more_info:

selected_papers: false # publications have their own dedicated page
social: false # contacts live on the dedicated contact page

announcements:
  enabled: false # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

<script>document.documentElement.classList.add("ale-home-page");</script>

<div class="ale-landing">
  <div class="ale-landing-left">
    <div class="ale-portrait-placeholder ale-portrait-photo">
      <img class="ale-hero-logo" src="{{ '/assets/img/profile-photo.png' | relative_url }}" alt="Alessandro Emmanuel Pecora">
    </div>
    <div class="ale-landing-identity">
      <h1 class="ale-hero-name"><span class="ale-name-firstline"><strong>Alessandro</strong> Emmanuel</span><span>Pecora</span></h1>
      <p class="ale-doctorate">Ph.D. Candidate in Computer and Control Engineering<br><span>Politecnico di Torino</span></p>
      <p class="ale-hero-roles">Data Scientist &amp; Engineer · AI Researcher</p>
    </div>
  </div>
  <div class="ale-landing-right">
    <div class="ale-bio-card" id="ale-bio-card">
      <button type="button" class="ale-bio-flip" aria-pressed="false" aria-label="Show my interests" title="Flip">
        <i class="fa-solid fa-arrows-rotate" aria-hidden="true"></i>
      </button>
      <div class="ale-bio-inner">
        <div class="ale-bio-face ale-bio-front">
          <p class="ale-eyebrow">About me</p>
          <p class="ale-landing-bio">Ph.D. Candidate in Computer and Control Engineering at Politecnico di Torino, working on <strong>cognitive architectures for agentic and virtual embodied AI</strong>. My path ran from <strong>computer engineering</strong> through a master's in <strong>data science and engineering</strong> and a few years as an IT consultant on data and AI projects — with <strong>speech</strong> and <strong>natural language processing</strong> along the way — to <strong>computer vision</strong> as a Research Fellow, before converging into doctoral research on agents with <strong>long-term memory</strong>, modeled on psychological theories of how people remember. That research spans <strong>agentic AI</strong> and <strong>virtual humans</strong>, working towards generalist agents and, ultimately, <strong>artificial general intelligence</strong>.</p>
        </div>
        <div class="ale-bio-face ale-bio-back" aria-hidden="true">
          <p class="ale-eyebrow">My interests</p>
          <div class="ale-keywords-list">
            <span>Agentic AI</span>
            <span>Cognitive architectures</span>
            <span>Long-term memory</span>
            <span>Virtual humans</span>
            <span>Embodied AI</span>
            <span>Computer vision</span>
            <span>Natural language processing</span>
            <span>Speech processing</span>
            <span>XR</span>
            <span>Data science &amp; engineering</span>
            <span>Learning &amp; training</span>
            <span>Applied AI</span>
            <span>Artificial general intelligence</span>
          </div>
        </div>
      </div>
    </div>
    <div class="ale-landing-actions">
      <div class="ale-work-links">
        <a href="{{ '/projects/' | relative_url }}"><strong>Projects</strong></a>
        <a href="{{ '/publications/' | relative_url }}"><strong>Research Outputs</strong></a>
      </div>
      <p class="ale-contact-cta"><span>Need something else?</span><a href="{{ '/contact/' | relative_url }}">Contact me <span aria-hidden="true">&rarr;</span></a></p>
    </div>
  </div>
</div>

<script>
  (function () {
    var card = document.getElementById("ale-bio-card");
    if (!card) return;
    var button = card.querySelector(".ale-bio-flip");
    var back = card.querySelector(".ale-bio-back");
    var front = card.querySelector(".ale-bio-front");
    button.addEventListener("click", function () {
      var flipped = card.classList.toggle("is-flipped");
      button.setAttribute("aria-pressed", flipped ? "true" : "false");
      button.setAttribute("aria-label", flipped ? "Show my bio" : "Show my interests");
      back.setAttribute("aria-hidden", flipped ? "false" : "true");
      front.setAttribute("aria-hidden", flipped ? "true" : "false");
    });
  })();
</script>
