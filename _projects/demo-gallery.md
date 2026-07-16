---
layout: page
title: Gallery Demo (template)
description: Pagina di prova per vedere come rendono le gallery — non compare nella pagina projects.
img:
importance: 99
category: demo
---

<!-- Questa pagina usa la categoria "demo", che non è tra le display_categories di _pages/projects.md:
     quindi NON compare nella griglia dei progetti, ma è raggiungibile all'URL /projects/demo-gallery/.
     Serve come riferimento per i layout gallery. Le immagini sono i placeholder del template. -->

Questa è una pagina di prova per i layout delle gallery. Le immagini sono placeholder del template — cliccale per lo **zoom stile Medium**.

## Immagine a tutta larghezza

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/12.jpg" title="full width" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">Una sola immagine nella riga = tutta larghezza. Didascalia qui sotto.</div>

## Griglia a tre colonne

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/1.jpg" title="uno" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/3.jpg" title="due" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="tre" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">Tre <code>col-sm</code> nella stessa <code>row</code> = griglia da tre (si impila su mobile).</div>

## Composizione 2/3 + 1/3

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/6.jpg" title="due terzi" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/11.jpg" title="un terzo" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">Colonne asimmetriche con <code>col-sm-8</code> + <code>col-sm-4</code>.</div>

Testo tra le righe di immagini: si scrive markdown normale tra un blocco `row` e l'altro, per raccontare il progetto man mano che si mostrano gli screenshot.

## Due colonne

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/8.jpg" title="sinistra" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/10.jpg" title="destra" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">Due colonne alla pari.</div>
