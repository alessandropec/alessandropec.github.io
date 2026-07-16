---
layout: about
title: about
permalink: /
subtitle: Ph.D. Candidate — <a href="https://www.polito.it/en/staff?p=105698">Politecnico di Torino</a>, DAUIN · Computer Graphics & Vision Group · Torino, Italy

profile:
  align: right
  image: # aggiungere una foto come assets/img/prof_pic.jpg e scrivere qui prof_pic.jpg
  image_circular: false # crops the image to make it circular
  more_info:

selected_papers: true # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

announcements:
  enabled: false # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

<div class="ale-intro">
  <div class="ale-intro-copy">
    <p class="ale-eyebrow">Cognitive architectures · Agentic AI · Virtual humans</p>
    <p class="ale-lead">I build agents and virtual humans that <strong>remember, learn and act over the long term.</strong></p>
    <a class="ale-text-action" href="#story">Follow the story <span aria-hidden="true">↓</span></a>
  </div>
  <div class="ale-portrait-placeholder" role="img" aria-label="Portrait of Alessandro Pecora — photograph coming soon">
    <span class="ale-portrait-monogram">AP</span>
    <span class="ale-portrait-note">Portrait<br>coming soon</span>
  </div>
</div>

<nav class="ale-jump" aria-label="Quick links">
  <a href="/publications/">
    <span class="ale-jump-title">Publications</span>
    <span class="ale-jump-sub">Papers, surveys &amp; BibTeX</span>
  </a>
  <a href="/projects/">
    <span class="ale-jump-title">Projects</span>
    <span class="ale-jump-sub">From Ph.D. research to industry</span>
  </a>
  <a href="/repositories/">
    <span class="ale-jump-title">Repositories</span>
    <span class="ale-jump-sub">Code on GitHub</span>
  </a>
  <a href="/contact/">
    <span class="ale-jump-title">Contact</span>
    <span class="ale-jump-sub">Email is the best way</span>
  </a>
</nav>

<div id="story" class="ale-story-track">
<section class="ale-story ale-reveal" data-step="01">
  <span class="ale-kicker">Where it started</span>
  <h2>Boot sequence: Sicily</h2>
  <p>Born in <strong>Caltanissetta</strong> and raised in <strong>Agrigento</strong>, I moved to <strong>Torino</strong> for university. The computing part began earlier, when my brothers brought home an <strong>Amiga</strong>; science followed shortly after. I worked my way through university — web development, STEM teaching and bootcamp instruction — then consulted on <strong>AI and data science</strong> at Cluster Reply, before research won me back to academia.</p>
</section>

<section class="ale-story ale-reveal" data-step="02">
  <span class="ale-kicker">The path</span>
  <h2>From pixels to agents</h2>
  <p>My path has spanned <strong>computer vision</strong>, <strong>natural language processing</strong>, <strong>speech processing</strong> and <strong>data science</strong> at large, converging into workflow and agentic AI, and embodied AI with virtual humans in interactive environments such as <strong>XR</strong>. Virtual humans are mainly applied to <strong>learning and training</strong>; agentic AI spans further, from <strong>cultural heritage</strong> storytelling to <strong>agriculture</strong>, <strong>insurance</strong> and <strong>enterprise automation</strong>.</p>
</section>

<section class="ale-story ale-reveal" data-step="03">
  <span class="ale-kicker">The research</span>
  <h2>Agents that remember</h2>
  <p>Integrating these strands into cognitive architectures with <strong>long-term memory</strong> — giving agents what they usually lack, so that perception, reasoning and action can build on experience instead of starting from scratch at every prompt — my goal becomes building <strong>generalist agents</strong> and <strong>believable virtual humans</strong> able to sustain these use cases over the long term, with the ultimate goal of studying <strong>artificial general intelligence</strong>.</p>
</section>

<section class="ale-story ale-reveal" data-step="04">
  <span class="ale-kicker">Beyond research</span>
  <h2>Teaching &amp; building</h2>
  <p>I lecture on <em>AI-powered Virtual Humans — LLM-based Cognitive Architectures</em> and collaborate on <em>Algorithms and Data Structures</em> at Politecnico di Torino, and I co-supervise B.Sc./M.Sc. theses on agents, storytelling and applied deep learning.</p>
</section>
</div>

<div class="ale-quote ale-reveal">
  Who we are, where we come from, where we are going.
  <small>The big questions I love challenging myself with — the reason behind all of the above.</small>
</div>

<script>
  (function () {
    var els = document.querySelectorAll(".ale-reveal");
    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      els.forEach(function (el) {
        el.classList.add("ale-visible");
      });
      return;
    }
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("ale-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach(function (el) {
      io.observe(el);
    });
  })();
</script>
