---
layout: page
title: projects
permalink: /projects/
description: Research and applied projects — from Ph.D. work on agents and virtual humans to industry AI solutions.
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
