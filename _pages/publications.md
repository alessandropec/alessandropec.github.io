---
layout: page
permalink: /publications/
title: publications
nav: true
nav_order: 2
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
      var links = entry.querySelector(".links");
      if (links && !links.querySelector(".ale-disabled-doi")) {
        var doi = document.createElement("span");
        doi.className = "btn btn-sm z-depth-0 ale-disabled-doi";
        doi.setAttribute("aria-disabled", "true");
        doi.textContent = "DOI";
        links.appendChild(doi);
      }
    });

    document.querySelectorAll(".bibliography > li").forEach(function (entry) {
      var doiLink = entry.querySelector('.links a[href*="doi.org"]');
      var venue = entry.querySelector(".abbr");
      if (doiLink && venue && !venue.querySelector("a")) {
        var venueLink = document.createElement("a");
        venueLink.href = doiLink.href;
        venueLink.target = "_blank";
        venueLink.rel = "noopener noreferrer";
        venueLink.innerHTML = venue.innerHTML;
        venue.replaceChildren(venueLink);
      }
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

<div class="publications">

{% bibliography %}

</div>
