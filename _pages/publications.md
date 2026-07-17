---
layout: page
permalink: /publications/
title: publications
nav: true
nav_order: 3
---

<!-- _pages/publications.md -->

<script>
  document.documentElement.classList.add("ale-publications-page");
  document.addEventListener("DOMContentLoaded", function () {
    var header = document.querySelector(".post-header");
    var title = header && header.querySelector(".post-title, h1");
    var scholar = document.querySelector(".ale-page-actions");
    if (header && title && scholar) {
      header.classList.add("ale-publications-header");
      title.insertAdjacentElement("afterend", scholar);
    }

    document.querySelectorAll(".ale-pub-status").forEach(function (status) {
      var entry = status.closest("li");
      if (!entry) return;
      entry.classList.add("ale-unpublished");
      entry.classList.add(status.textContent.toLowerCase().includes("review") ? "ale-under-review" : "ale-in-press");
    });

    document.querySelectorAll(".bibliography > li").forEach(function (entry) {
      var links = entry.querySelector(".links");
      var venue = entry.querySelector(".abbr");
      if (!links || !venue) return;
      var controls = Array.from(links.children);
      var bib = controls.find(function (control) { return /bib/i.test(control.textContent); });
      var code = controls.find(function (control) { return /code/i.test(control.textContent); });
      var doi = controls.find(function (control) { return /doi/i.test(control.textContent); });
      if (entry.classList.contains("ale-unpublished") && bib) {
        bib.remove();
        bib = null;
      }
      if (code) {
        code.classList.add("ale-code-action");
        code.innerHTML = '<i class="fa-brands fa-github" aria-hidden="true"></i><span>Code</span><span aria-hidden="true">&#8599;</span>';
        code.setAttribute("aria-label", "Open code repository");
      }
      if (doi) {
        doi.innerHTML = '<span>DOI</span><span aria-hidden="true">&#8599;</span>';
        doi.setAttribute("aria-label", "Open publication DOI");
      }
      if (bib) bib.setAttribute("aria-label", "Show BibTeX citation");
      [bib, code, doi].forEach(function (control) {
        if (control) links.appendChild(control);
      });
      if (bib) {
        var bibPanel = entry.querySelector("div.bibtex");
        if (bibPanel) {
          var syncBibState = function () {
            var isOpen = !bibPanel.classList.contains("hidden") && bibPanel.getAttribute("aria-hidden") !== "true";
            bib.classList.toggle("ale-active", isOpen);
            bib.setAttribute("aria-expanded", String(isOpen));
          };
          new MutationObserver(syncBibState).observe(bibPanel, { attributes: true, attributeFilter: ["class", "aria-hidden", "style"] });
          bib.addEventListener("click", function () { window.setTimeout(syncBibState, 0); });
          syncBibState();
        }
      }
      var status = entry.querySelector(".ale-pub-status");
      if (status) venue.appendChild(status);

      entry.querySelectorAll(".periodical").forEach(function (periodical) {
        Array.from(periodical.childNodes).forEach(function (node) {
          if (node.nodeType === Node.TEXT_NODE) {
            node.textContent = node.textContent.replace(/\s*,?\s*(?:19|20)\d{2}\s*$/, "");
          }
        });
      });
    });
  });
</script>

<div class="ale-page-actions">
  <a class="ale-action" href="https://scholar.google.com/citations?user=KVAZ8pcAAAAJ" target="_blank" rel="noopener noreferrer">
    <i class="ai ai-google-scholar" aria-hidden="true"></i>
    <span>Google Scholar</span>
    <span aria-hidden="true">↗</span>
  </a>
</div>

<section class="ale-papers-section ale-pub-section" aria-labelledby="papers-title">
  <div class="ale-section-heading">
    <p class="ale-kicker">Peer-reviewed research</p>
    <h2 id="papers-title">papers</h2>
  </div>
  <div class="publications">

{% bibliography %}

  </div>
</section>

<section class="ale-supervised-theses ale-pub-section" aria-labelledby="theses-title">
  <div class="ale-section-heading">
    <p class="ale-kicker">Mentoring &amp; academic training</p>
    <h2 id="theses-title">theses</h2>
  </div>
  <article class="ale-thesis-entry">
    <div><h3>RAG-based Agentic AI in Document Workflows to Support Digital Administrative Processes</h3><p><strong>Davide Proglio</strong> · A. E. Pecora — Co-supervisor · Computer Engineering · Politecnico di Torino</p></div>
    <div class="ale-thesis-meta"><span>2026</span><span class="ale-degree-chip">M.Sc.</span><div class="ale-thesis-links"><a href="https://webthesis.biblio.polito.it/39944/?template=default" target="_blank" rel="noopener noreferrer">Thesis ↗</a></div></div>
  </article>
  <article class="ale-thesis-entry">
    <div><h3>Using Large Language Models to Generate Real-Time Interactive Stories</h3><p><strong>Flavia Fubini</strong> · A. E. Pecora — Co-supervisor · Computer Engineering · Politecnico di Torino</p></div>
    <div class="ale-thesis-meta"><span>2025</span><span class="ale-degree-chip">M.Sc.</span><div class="ale-thesis-links"><a href="https://webthesis.biblio.polito.it/38632/" target="_blank" rel="noopener noreferrer">Thesis ↗</a></div></div>
  </article>
  <article class="ale-thesis-entry">
    <div><h3>DIVINE: Diagnosis of Grapevine Diseases through Neural Networks and Deep Learning</h3><p><strong>Fabrizio Sanino</strong> · A. E. Pecora — Co-supervisor · Computer Engineering · Politecnico di Torino</p></div>
    <div class="ale-thesis-meta"><span>2024</span><span class="ale-degree-chip">M.Sc.</span><div class="ale-thesis-links"><a href="https://webthesis.biblio.polito.it/31783/" target="_blank" rel="noopener noreferrer">Thesis ↗</a><a class="ale-code-action" href="https://github.com/fabriziosanino/grape_leaves_detection" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github" aria-hidden="true"></i><span>Code</span><span aria-hidden="true">↗</span></a></div></div>
  </article>
  <article class="ale-thesis-entry">
    <div><h3>Data Driven: AI Voice Cloning</h3><p><strong>A. E. Pecora</strong> — Author · Supervisors: L. Cagliero, M. La Quatra, L. Vaiani · Politecnico di Torino</p></div>
    <div class="ale-thesis-meta"><span>2023</span><span class="ale-degree-chip">M.Sc.</span><div class="ale-thesis-links"><a class="ale-code-action" href="https://github.com/alessandropec/data_driven_ai_voice_cloning" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github" aria-hidden="true"></i><span>Code</span><span aria-hidden="true">↗</span></a></div></div>
  </article>
  <p class="ale-theses-note">Current co-supervision topics include further work within <strong>DIVINE</strong>, <strong>LLM/VLM fine-tuning</strong>, and <strong>agentic fact-checking</strong>. Additional thesis opportunities across different research topics are available on the <a href="https://cgvg.polito.it/thesis.html" target="_blank" rel="noopener noreferrer">CG&amp;VG thesis proposals page ↗</a>.</p>
</section>
