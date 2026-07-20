---
layout: page
title: projects
permalink: /projects/
description: Relevant projects across research, applied AI and data engineering.
nav: true
nav_order: 2
horizontal: false
---

<script>document.documentElement.classList.add("ale-projects-page");</script>

<div class="projects">
  {% assign visible_projects = site.projects | where_exp: "project", "project.category != 'demo'" %}
  {% assign sorted_projects = visible_projects | sort: "importance" %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
</div>

<aside class="ale-projects-more" aria-labelledby="more-projects-title">
  <h2 id="more-projects-title">Looking for more?</h2>
  <p>You can find additional projects and open-source work on my GitHub profile and the Computer Graphics and Vision Group’s GitHub organization.</p>
  <div class="ale-projects-more__actions">
    <a class="ale-projects-more__action" href="https://github.com/alessandropec" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github" aria-hidden="true"></i><span>My GitHub</span><span aria-hidden="true">↗</span></a>
    <a class="ale-projects-more__action" href="https://github.com/CGVGroup" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github" aria-hidden="true"></i><span>CG&amp;VG GitHub</span><span aria-hidden="true">↗</span></a>
  </div>
</aside>
