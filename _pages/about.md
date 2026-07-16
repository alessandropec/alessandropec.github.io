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

<div class="ale-intro">
  <div class="ale-intro-copy">
    <p class="ale-eyebrow">Ph.D. Candidate · Politecnico di Torino</p>
    <h1 class="ale-hero-name"><strong>Alessandro</strong><br>Emmanuel Pecora</h1>
    <p class="ale-hero-roles">Agentic AI · Cognitive architectures<br>Virtual humans · Embodied AI</p>
  </div>
  <div class="ale-portrait-placeholder" role="img" aria-label="Portrait of Alessandro Pecora — photograph coming soon">
    <span class="ale-portrait-monogram">AP</span>
    <span class="ale-portrait-note">Portrait<br>coming soon</span>
  </div>
  <a class="ale-scroll-cue" href="#story" aria-label="Scroll to the story"><span aria-hidden="true">↓</span></a>
</div>

<div id="story" class="ale-story-track">
<section class="ale-story ale-reveal" data-step="01">
  <span class="ale-kicker">Origins</span>
  <h2>Sicily, an Amiga, and a change of latitude</h2>
  <p>Born in <strong>Caltanissetta</strong> and raised in <strong>Agrigento</strong>, I moved to <strong>Torino</strong> for university. The computing part began earlier, when my brothers brought home an <strong>Amiga</strong>; science followed shortly after. I worked my way through university — web development, STEM teaching and bootcamp instruction — then consulted on <strong>AI and data science</strong> at Cluster Reply, before research won me back to academia.</p>
</section>

<section class="ale-story ale-reveal" data-step="02">
  <span class="ale-kicker">Background</span>
  <h2>A multidisciplinary route into AI</h2>
  <p>My path has spanned <strong>computer vision</strong>, <strong>natural language processing</strong>, <strong>speech processing</strong> and <strong>data science</strong> at large, converging into workflow and agentic AI, and embodied AI with virtual humans in interactive environments such as <strong>XR</strong>. Virtual humans are mainly applied to <strong>learning and training</strong>; agentic AI spans further, from <strong>cultural heritage</strong> storytelling to <strong>agriculture</strong>, <strong>insurance</strong> and <strong>enterprise automation</strong>.</p>
</section>

<section class="ale-story ale-reveal" data-step="03">
  <span class="ale-kicker">Research direction</span>
  <h2>Memory as part of the architecture</h2>
  <p>Integrating these strands into cognitive architectures with <strong>long-term memory</strong> — giving agents what they usually lack, so that perception, reasoning and action can build on experience instead of starting from scratch at every prompt — my goal becomes building <strong>generalist agents</strong> and <strong>believable virtual humans</strong> able to sustain these use cases over the long term, with the ultimate goal of studying <strong>artificial general intelligence</strong>.</p>
</section>

<section class="ale-story ale-reveal" data-step="04">
  <span class="ale-kicker">Academic practice</span>
  <h2>Teaching, supervision and prototypes</h2>
  <p>I lecture on <em>AI-powered Virtual Humans — LLM-based Cognitive Architectures</em> and collaborate on <em>Algorithms and Data Structures</em> at Politecnico di Torino, and I co-supervise B.Sc./M.Sc. theses on agents, storytelling and applied deep learning.</p>
</section>
</div>

<div class="ale-see-also ale-reveal">
  <span>Continue through the work</span>
  <div class="ale-work-links">
    <a href="{{ '/projects/' | relative_url }}"><small>01</small><strong>Projects</strong><span>Systems, experiments and applied research</span><i aria-hidden="true">→</i></a>
    <a href="{{ '/publications/' | relative_url }}"><small>02</small><strong>Publications</strong><span>Peer-reviewed research and scholarly output</span><i aria-hidden="true">→</i></a>
  </div>
  <p class="ale-contact-cta">Or <a href="{{ '/contact/' | relative_url }}">contact me <span aria-hidden="true">→</span></a></p>
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
    var lastScrollY = window.scrollY;
    var direction = "down";
    window.addEventListener(
      "scroll",
      function () {
        var currentY = window.scrollY;
        if (Math.abs(currentY - lastScrollY) > 2) {
          direction = currentY > lastScrollY ? "down" : "up";
          lastScrollY = currentY;
        }
      },
      { passive: true }
    );

    els.forEach(function (el) {
      el.classList.add("ale-off-left");
    });

    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.remove("ale-visible", "ale-off-left", "ale-off-right");
            entry.target.classList.add(direction === "down" ? "ale-off-left" : "ale-off-right");
            void entry.target.offsetWidth;
            requestAnimationFrame(function () {
              entry.target.classList.add("ale-visible");
              entry.target.classList.remove("ale-off-left", "ale-off-right");
            });
          } else {
            entry.target.classList.remove("ale-visible", "ale-off-left", "ale-off-right");
            entry.target.classList.add(direction === "down" ? "ale-off-right" : "ale-off-left");
          }
        });
      },
      { threshold: 0.12, rootMargin: "-6% 0px -8%" }
    );
    els.forEach(function (el) {
      io.observe(el);
    });
  })();
</script>
