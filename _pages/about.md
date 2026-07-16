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

<div class="ale-intro">
  <div class="ale-intro-copy">
    <img class="ale-hero-logo" src="{{ '/assets/img/favicon.svg' | relative_url }}" alt="APE monogram">
    <h1 class="ale-hero-name"><span class="ale-name-firstline"><strong>Alessandro</strong> Emmanuel</span><span>Pecora</span></h1>
    <p class="ale-doctorate">Ph.D. Candidate in Computer and Control Engineering<br><span>Politecnico di Torino</span></p>
    <p class="ale-hero-roles">Data Scientist &amp; Engineer · AI Researcher</p>
  </div>
  <div class="ale-portrait-placeholder" role="img" aria-label="Portrait of Alessandro Pecora — photograph coming soon">
    <span class="ale-portrait-monogram">AP</span>
    <span class="ale-portrait-note">Portrait<br>coming soon</span>
  </div>
  <div class="ale-keywords" aria-label="Research areas">
    <span>Agentic AI</span><span>Cognitive architectures</span><span>Long-term memory</span><span>Virtual humans</span><span>Embodied AI</span><span>Computer vision</span><span>Natural language processing</span><span>Speech processing</span><span>XR</span><span>Data science</span><span>Learning &amp; training</span><span>Cultural heritage</span><span>Applied AI</span><span>Artificial general intelligence</span>
  </div>
  <a class="ale-scroll-cue" href="#story" aria-label="Scroll to the story"><span aria-hidden="true">↓</span></a>
</div>

<div id="story" class="ale-story-track">
<section id="story-1" class="ale-story ale-reveal" data-step="01">
  <span class="ale-kicker">Origins</span>
  <h2>Sicily, an Amiga, and a change of latitude</h2>
  <p>Born in <strong>Caltanissetta</strong> and raised in <strong>Agrigento</strong>, I moved to <strong>Torino</strong> for university. The computing part began earlier, when my brothers brought home an <strong>Amiga</strong>; science followed shortly after. I worked my way through university — web development, STEM teaching and bootcamp instruction — then consulted on <strong>AI and data science</strong> at Cluster Reply, before research won me back to academia.</p>
  <a class="ale-section-next" href="#story-2" aria-label="Continue to background"><span aria-hidden="true">↓</span></a>
</section>

<section id="story-2" class="ale-story ale-reveal" data-step="02">
  <span class="ale-kicker">Background</span>
  <h2>A multidisciplinary route into AI</h2>
  <p>My path has spanned <strong>computer vision</strong>, <strong>natural language processing</strong>, <strong>speech processing</strong> and <strong>data science</strong> at large, converging into workflow and agentic AI, and embodied AI with virtual humans in interactive environments such as <strong>XR</strong>. Virtual humans are mainly applied to <strong>learning and training</strong>; agentic AI spans further, from <strong>cultural heritage</strong> storytelling to <strong>agriculture</strong>, <strong>insurance</strong> and <strong>enterprise automation</strong>.</p>
  <a class="ale-section-next" href="#story-3" aria-label="Continue to research direction"><span aria-hidden="true">↓</span></a>
</section>

<section id="story-3" class="ale-story ale-reveal" data-step="03">
  <span class="ale-kicker">Research direction</span>
  <h2>Memory as part of the architecture</h2>
  <p>Integrating these strands into cognitive architectures with <strong>long-term memory</strong> — giving agents what they usually lack, so that perception, reasoning and action can build on experience instead of starting from scratch at every prompt — my goal becomes building <strong>generalist agents</strong> and <strong>believable virtual humans</strong> able to sustain these use cases over the long term, with the ultimate goal of studying <strong>artificial general intelligence</strong>.</p>
  <a class="ale-section-next" href="#story-4" aria-label="Continue to academic practice"><span aria-hidden="true">↓</span></a>
</section>

<section id="story-4" class="ale-story ale-reveal" data-step="04">
  <span class="ale-kicker">Academic practice</span>
  <h2>Teaching, supervision and prototypes</h2>
  <p>I lecture on <em>AI-powered Virtual Humans — LLM-based Cognitive Architectures</em> and collaborate on <em>Algorithms and Data Structures</em> at Politecnico di Torino, and I co-supervise B.Sc./M.Sc. theses on agents, storytelling and applied deep learning.</p>
  <a class="ale-section-next" href="#work" aria-label="Continue to projects and publications"><span aria-hidden="true">↓</span></a>
</section>
</div>

<div id="work" class="ale-see-also">
  <span>Continue through the work</span>
  <div class="ale-work-links">
    <a href="{{ '/projects/' | relative_url }}"><small>01</small><strong>Projects</strong><span>Systems, experiments and applied research</span><i aria-hidden="true">→</i></a>
    <a href="{{ '/publications/' | relative_url }}"><small>02</small><strong>Publications</strong><span>Peer-reviewed research and scholarly output</span><i aria-hidden="true">→</i></a>
  </div>
  <p class="ale-contact-cta"><span>Need something else?</span><a href="{{ '/contact/' | relative_url }}">Contact me <span aria-hidden="true">→</span></a></p>
</div>

<script>
  (function () {
    var els = document.querySelectorAll(".ale-reveal");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      els.forEach(function (el) {
        el.classList.add("ale-visible");
      });
      return;
    }
    var ticking = false;
    function render() {
      var viewport = window.innerHeight;
      document.documentElement.classList.toggle("ale-has-scrolled", window.scrollY > 100);
      els.forEach(function (el) {
        var rect = el.getBoundingClientRect();
        var enterDistance = Math.min(230, window.innerWidth * 0.16);
        var exitDistance = Math.min(320, window.innerWidth * 0.21);
        var progress = Math.max(0, Math.min(1, (viewport - rect.top) / (viewport + rect.height)));
        var x;
        var opacity;
        if (progress < 0.3) {
          var entering = progress / 0.3;
          var enterEase = 1 - Math.pow(1 - entering, 3);
          x = -enterDistance * (1 - enterEase);
          opacity = enterEase;
        } else if (progress <= 0.7) {
          x = 0;
          opacity = 1;
        } else if (progress <= 1) {
          var leaving = (progress - 0.7) / 0.3;
          var leaveEase = leaving * leaving * (3 - 2 * leaving);
          x = exitDistance * leaveEase;
          opacity = 1 - leaveEase;
        } else {
          x = exitDistance;
          opacity = 0;
        }
        el.style.setProperty("--ale-scroll-x", x.toFixed(2) + "px");
        el.style.setProperty("--ale-scroll-opacity", opacity.toFixed(3));
      });
      ticking = false;
    }
    function requestRender() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(render);
      }
    }
    window.addEventListener("scroll", requestRender, { passive: true });
    window.addEventListener("resize", requestRender);
    document.querySelectorAll(".ale-scroll-cue, .ale-section-next").forEach(function (link) {
      link.addEventListener("click", function (event) {
        var target = document.querySelector(link.getAttribute("href"));
        if (!target) return;
        event.preventDefault();
        var start = window.scrollY;
        var destination = target.getBoundingClientRect().top + start - 52;
        var duration = 1050;
        var started = performance.now();
        function step(now) {
          var elapsed = Math.min(1, (now - started) / duration);
          var eased = elapsed < .5 ? 4 * elapsed * elapsed * elapsed : 1 - Math.pow(-2 * elapsed + 2, 3) / 2;
          window.scrollTo(0, start + (destination - start) * eased);
          if (elapsed < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
      });
    });
    render();
  })();
</script>
