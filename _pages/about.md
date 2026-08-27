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
  <div class="ale-bio-card" id="ale-bio-card">
    <div class="ale-bio-left" id="ale-bio-left">
      <div class="ale-bio-face ale-bio-face-cover">
        <div class="ale-portrait-placeholder ale-portrait-photo">
          <img class="ale-hero-logo" src="{{ '/assets/img/profile-photo.png' | relative_url }}" alt="Alessandro Emmanuel Pecora">
        </div>
        <div class="ale-landing-identity">
          <h1 class="ale-hero-name"><span class="ale-name-firstline"><strong>Alessandro</strong> Emmanuel</span><span>Pecora</span></h1>
          <p class="ale-doctorate">Ph.D. Candidate in Computer and Control Engineering<br><span>Politecnico di Torino</span></p>
          <p class="ale-hero-roles">Data Scientist &amp; Engineer · AI Researcher</p>
        </div>
      </div>
      <div class="ale-bio-face ale-bio-face-dynamic" id="ale-bio-left-back" aria-hidden="true" inert>
        <p class="ale-eyebrow" id="ale-bio-left-eyebrow">About me</p>
        <div class="ale-bio-dynamic-content" id="ale-bio-left-content"></div>
      </div>
    </div>
    <span class="ale-bio-spine" id="ale-bio-spine" aria-hidden="true"></span>
    <div class="ale-bio-right" id="ale-bio-right" aria-hidden="true" inert>
      <p class="ale-eyebrow">About me</p>
      <p class="ale-bio-page">Within this field, my work on <strong>agentic AI</strong> covers applications such as <strong>cultural heritage storytelling</strong>, <strong>AI assistants</strong>, <strong>enterprise automation</strong>, and <strong>RAG systems</strong>, while my research on <strong>virtually embodied AI</strong> focuses on <strong>virtual humans</strong> operating in environments such as <strong>XR</strong>. Both embodied and non-embodied agents rely on <strong>cognitive architectures</strong>, in which <strong>long-term memory</strong> plays a central role and represents my current research focus. More broadly, my work explores <strong>computational memory models</strong> grounded in <strong>psychological theories</strong>, with the goal of developing <strong>believable virtual humans</strong>, <strong>generalist agents</strong>, and, ultimately, contributing to the pursuit of <strong>artificial general intelligence</strong>.</p>
    </div>
  </div>

  <div class="ale-bio-pager" id="ale-bio-pager">
    <button type="button" id="ale-bio-back-btn" class="ale-bio-pager-btn ale-bio-pager-btn--back" hidden>
      <span aria-hidden="true">&larr;</span> Back
    </button>
    <button type="button" id="ale-bio-next-btn" class="ale-bio-pager-btn" aria-controls="ale-bio-card">
      <span id="ale-bio-next-label">About me</span> <span aria-hidden="true">&rarr;</span>
    </button>
  </div>

  <template id="ale-bio-tpl-bio1">
    <p class="ale-bio-page">Ph.D. candidate in Computer and Control Engineering at Politecnico di Torino. My journey began in childhood with a passion for <strong>space</strong>, which grew into a broader interest in <strong>science</strong> and led me to pursue university studies in <strong>computer engineering</strong>, followed by <strong>data science and engineering</strong>. I approached AI through both my academic training—exploring <strong>speech processing</strong>, <strong>natural language processing</strong>, and <strong>computer vision</strong>—and hands-on professional experience, first as an IT consultant and later during a year of research. This path ultimately led me to pursue a Ph.D. on <strong>cognitive architectures for agentic and virtually embodied AI</strong>.</p>
  </template>
  <template id="ale-bio-tpl-interests">
    <div class="ale-keywords-list">
      <span tabindex="0" data-note="Turning raw data into models and working pipelines. The engineering base under everything else I build.">Data science &amp; engineering</span>
      <span tabindex="0" data-note="Teaching machines to see and interpret images. Useful across my work, from workflow automation to agentic perception.">Computer vision</span>
      <span tabindex="0" data-note="How machines understand and generate language. Present in everything from chatbots to storytelling systems.">Natural language processing</span>
      <span tabindex="0" data-note="Turning speech into data and back: recognition, synthesis, voice cloning. From voice assistants to character voices in my projects.">Speech processing</span>
      <span tabindex="0" data-note="A model of the mind, rooted in psychology, linking memory and reasoning. The blueprint behind how I build intelligent systems.">Cognitive architectures</span>
      <span tabindex="0" data-note="AI that plans and acts on its own, not just answers. The core idea behind every agent I build.">Agentic AI</span>
      <span tabindex="0" data-note="Intelligence with a body in a real or virtual world, not just a chatbot. A more physical, situated way to think about intelligence.">Embodied AI</span>
      <span tabindex="0" data-note="Keeping and reusing experience instead of starting over each time. My current research focus.">Long-term memory</span>
      <span tabindex="0" data-note="Digital characters believable enough to talk and act like people. My main line of research in embodied AI.">Virtual humans</span>
      <span tabindex="0" data-note="Virtual and augmented reality for interaction. A strong focus of my research group, and a natural home for embodied AI.">XR</span>
      <span tabindex="0" data-note="Practice with feedback, to build real skills over time. Through XR, I develop applications for learning and training.">Learning &amp; training</span>
      <span tabindex="0" data-note="Research turned into things that actually work outside the lab. The bridge between my papers and real use cases.">Applied AI</span>
      <span tabindex="0" data-note="AI with broad, human-like reasoning, not narrow one-task skills. The long-term question behind my research.">Artificial general intelligence</span>
    </div>
  </template>

  <div class="ale-landing-actions">
    <div class="ale-work-links">
      <a href="{{ '/projects/' | relative_url }}"><strong>Projects</strong></a>
      <a href="{{ '/publications/' | relative_url }}"><strong>Research Outputs</strong></a>
    </div>
    <p class="ale-contact-cta"><span>Need something else?</span><a href="{{ '/contact/' | relative_url }}">Contact me <span aria-hidden="true">&rarr;</span></a></p>
  </div>
</div>

<script>
  (function () {
    var card = document.getElementById("ale-bio-card");
    var left = document.getElementById("ale-bio-left");
    var coverFace = card ? card.querySelector(".ale-bio-face-cover") : null;
    var leftBack = document.getElementById("ale-bio-left-back");
    var leftEyebrow = document.getElementById("ale-bio-left-eyebrow");
    var leftContent = document.getElementById("ale-bio-left-content");
    var right = document.getElementById("ale-bio-right");
    var backBtn = document.getElementById("ale-bio-back-btn");
    var nextBtn = document.getElementById("ale-bio-next-btn");
    var nextLabel = document.getElementById("ale-bio-next-label");
    var tplBio1 = document.getElementById("ale-bio-tpl-bio1");
    var tplInterests = document.getElementById("ale-bio-tpl-interests");
    if (!card || !left || !coverFace || !leftBack || !right || !backBtn || !nextBtn || !tplBio1 || !tplInterests) {
      return;
    }

    // 3-page book: 0 = cover, 1 = bio (two pages, side by side from
    // ~700px up), 2 = interests (closes back to one page). The SAME next
    // button drives 0->1 and 1->2 (its label swaps "About me" / "My
    // interests"); the same back button drives 1->0 and 2->1. Nothing
    // lingers from a previous state — hidden/inert toggle immediately on
    // every transition, and the left face's dynamic content is fully
    // replaced (not just visually covered) each time it changes.
    var state = 0;
    var FADE = 220;
    var fadeTimer = null;

    function fillLeftContent(tpl, eyebrowText) {
      leftContent.innerHTML = "";
      leftContent.appendChild(tpl.content.cloneNode(true));
      leftEyebrow.textContent = eyebrowText;
    }

    function crossfadeLeftContent(tpl, eyebrowText) {
      if (fadeTimer) window.clearTimeout(fadeTimer);
      var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) {
        fillLeftContent(tpl, eyebrowText);
        return;
      }
      leftContent.classList.add("ale-bio-fade-out");
      fadeTimer = window.setTimeout(function () {
        fillLeftContent(tpl, eyebrowText);
        leftContent.classList.remove("ale-bio-fade-out");
        fadeTimer = null;
      }, FADE);
    }

    function updateButtons() {
      backBtn.hidden = state === 0;
      nextBtn.hidden = state === 2;
      nextLabel.textContent = state === 1 ? "My interests" : "About me";
      nextBtn.setAttribute("aria-label", state === 1 ? "Show my interests" : "Open the book");
    }

    function openRight() {
      card.classList.add("is-open");
      right.inert = false;
      right.removeAttribute("aria-hidden");
    }

    function closeRight() {
      card.classList.remove("is-open");
      right.inert = true;
      right.setAttribute("aria-hidden", "true");
    }

    function goTo(target) {
      if (target === state) return;
      if (target === 1 && state === 0) {
        // Cover turns into the bio's left page; the right page opens
        // alongside it. Fill the back face BEFORE turning so the flip
        // reveals real content, not a blank face.
        fillLeftContent(tplBio1, "About me");
        left.classList.add("is-turned");
        leftBack.inert = false;
        leftBack.removeAttribute("aria-hidden");
        coverFace.inert = true;
        coverFace.setAttribute("aria-hidden", "true");
        openRight();
      } else if (target === 0 && state === 1) {
        // Reverse: close the right page and turn the left page back to
        // the cover.
        closeRight();
        left.classList.remove("is-turned");
        coverFace.inert = false;
        coverFace.removeAttribute("aria-hidden");
        leftBack.inert = true;
        leftBack.setAttribute("aria-hidden", "true");
      } else if (target === 2 && state === 1) {
        // Book closes to one page: the right page leaves, the left page
        // stays turned but its content crossfades to the interests —
        // no card-rotating animation for this step, just the page-set
        // narrowing back down.
        closeRight();
        crossfadeLeftContent(tplInterests, "My interests");
      } else if (target === 1 && state === 2) {
        closeRight(); // already closed, but keep state consistent before reopening
        crossfadeLeftContent(tplBio1, "About me");
        openRight();
      }
      state = target;
      updateButtons();
      (state === 0 ? nextBtn : backBtn).focus();
    }

    nextBtn.addEventListener("click", function () {
      goTo(state + 1);
    });
    backBtn.addEventListener("click", function () {
      goTo(state - 1);
    });
  })();

  (function () {
    // Event delegation, not per-node listeners: the interests chips are
    // cloned from a <template> long after page load (when the reader
    // reaches state 2), so they don't exist yet for a one-time
    // querySelectorAll to find. mouseover/mouseout and focusin/focusout
    // bubble (mouseenter/mouseleave and focus/blur don't), which is what
    // makes delegating to a stable ancestor work here.
    var root = document.getElementById("ale-bio-left-content");
    if (!root) return;

    var pop = document.createElement("div");
    var activeChip = null;
    var hideTimer = null;
    var MARGIN = 8;
    pop.className = "ale-keyword-popover";
    pop.setAttribute("role", "tooltip");
    pop.setAttribute("hidden", "");
    document.body.appendChild(pop);

    var isTouch = window.matchMedia("(hover: none)").matches;

    function place(chip) {
      var r = chip.getBoundingClientRect();
      var pw = pop.offsetWidth;
      var ph = pop.offsetHeight;
      var left = r.left + r.width / 2 - pw / 2;
      left = Math.max(MARGIN, Math.min(left, window.innerWidth - pw - MARGIN));
      var top = r.top - ph - 10;
      if (top < MARGIN) top = r.bottom + 10;
      pop.style.left = Math.round(left) + "px";
      pop.style.top = Math.round(top) + "px";
    }

    function show(chip) {
      if (hideTimer) { clearTimeout(hideTimer); hideTimer = null; }
      activeChip = chip;
      pop.textContent = chip.getAttribute("data-note") || "";
      pop.removeAttribute("hidden");
      place(chip);
      requestAnimationFrame(function () { pop.classList.add("ale-open"); });
    }

    function hide() {
      if (!activeChip) return;
      activeChip = null;
      pop.classList.remove("ale-open");
      hideTimer = setTimeout(function () { pop.setAttribute("hidden", ""); }, 180);
    }

    function chipFrom(target) {
      return target.closest ? target.closest("span[data-note]") : null;
    }

    if (isTouch) {
      root.addEventListener("click", function (e) {
        var chip = chipFrom(e.target);
        if (!chip) return;
        e.stopPropagation();
        if (activeChip === chip) { hide(); } else { show(chip); }
      });
      document.addEventListener("click", function (e) {
        if (activeChip && e.target !== activeChip && !pop.contains(e.target)) hide();
      });
    } else {
      root.addEventListener("mouseover", function (e) {
        var chip = chipFrom(e.target);
        if (chip) show(chip);
      });
      root.addEventListener("mouseout", function (e) {
        var chip = chipFrom(e.target);
        if (chip) hide();
      });
      root.addEventListener("focusin", function (e) {
        var chip = chipFrom(e.target);
        if (chip) show(chip);
      });
      root.addEventListener("focusout", function (e) {
        var chip = chipFrom(e.target);
        if (chip) hide();
      });
    }

    window.addEventListener("scroll", function () {
      if (!activeChip) return;
      if (isTouch) { place(activeChip); } else { hide(); }
    }, { passive: true });

    window.addEventListener("resize", function () {
      if (activeChip) place(activeChip);
    }, { passive: true });
  })();
</script>
