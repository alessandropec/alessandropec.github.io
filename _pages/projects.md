---
layout: page
title: projects
permalink: /projects/
description: Research and applied projects — from Ph.D. work on agents and virtual humans to industry AI solutions.
nav: true
nav_order: 2
display_categories: [phd-research, applied-research, industry, msc-thesis]
horizontal: false
---

<!-- pages/projects.md -->
<script>document.documentElement.classList.add("ale-projects-page");</script>

<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  {% case category %}
    {% when "phd-research" %}{% assign category_label = "Ph.D. research" %}
    {% when "applied-research" %}{% assign category_label = "Applied research" %}
    {% when "industry" %}{% assign category_label = "Industry" %}
    {% when "msc-thesis" %}{% assign category_label = "M.Sc. thesis" %}
    {% else %}{% assign category_label = category %}
  {% endcase %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category_label }}</h2>
  </a>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display projects without categories -->

{% assign sorted_projects = site.projects | sort: "importance" %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
