# Come aggiornare il sito portfolio

Sito basato su [al-folio](https://github.com/alshedivat/al-folio) (Jekyll). **Non serve nulla installato sul PC**: si modifica un file, si fa push, e GitHub Actions ricostruisce il sito da solo (2–5 minuti).

## Struttura — dove sono le cose

| Cosa                   | Dove                                                          |
| ---------------------- | ------------------------------------------------------------- |
| Bio / homepage         | `_pages/about.md`                                             |
| Progetti               | `_projects/*.md` (un file per progetto)                       |
| Pubblicazioni          | `_bibliography/papers.bib` (BibTeX unico)                     |
| Contatti / social      | `_data/socials.yml`                                           |
| Profilo GitHub in home | `_data/repositories.yml`                                      |
| Immagini               | `assets/img/` (per i progetti: `assets/img/projects/`)        |
| PDF (CV ecc.)          | `assets/pdf/`                                                 |
| Config generale        | `_config.yml`                                                 |

## Aggiungere un progetto

Crea `_projects/nome-progetto.md` copiando uno esistente. Frontmatter:

```yaml
---
layout: page
title: Nome Progetto
description: Sottotitolo che appare sulla card.
img: assets/img/projects/nome.jpg   # copertina card (opzionale)
importance: 1                        # ordinamento dentro la categoria (1 = primo)
category: phd-research               # phd-research | applied-research | industry | msc-thesis
related_publications: true           # solo se nel testo usi {% cite chiave %}
---
```

Sotto il frontmatter scrivi la descrizione in markdown. Per una **gallery di immagini**:

```html
<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/projects/foto1.jpg" title="titolo" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/projects/foto2.jpg" title="titolo" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">Didascalia.</div>
```

Una colonna = immagine a tutta larghezza; due/tre `col-sm` = griglia. Zoom stile Medium già attivo su tutte le immagini. Video: mettere il file in `assets/video/` e usare `{% include video.liquid path="assets/video/demo.mp4" class="img-fluid rounded z-depth-1" controls=true %}`. Audio: `{% include audio.liquid path="assets/audio/demo.mp3" controls=true %}`.

Per collegare un paper: aggiungi `{% cite chiave-bibtex %}` nel testo (con `related_publications: true` nel frontmatter la referenza compare in fondo alla pagina).

Le **categorie** mostrate e il loro ordine si cambiano in `_pages/projects.md` (`display_categories` + le etichette nel blocco `case`).

## Aggiungere una pubblicazione

Aggiungi la voce BibTeX in `_bibliography/papers.bib`. Campi extra di al-folio (tutti opzionali):

- `abbr = {VENUE}` — badge con la sigla della venue
- `selected = {true}` — la fa comparire in homepage
- `bibtex_show = {true}` — bottone "bib"
- `pdf = {file.pdf}` — PDF in `assets/pdf/`, bottone di download
- `html = {https://...}` — link alla pagina del paper
- `preview = {img.png}` — thumbnail (in `assets/img/publication_preview/`)
- `additional_info = {. In press}` — testo extra dopo la citazione

## Foto profilo e CV

- **Foto**: salva `assets/img/prof_pic.jpg` e in `_pages/about.md` metti `image: prof_pic.jpg`.
- **CV PDF**: salva `assets/pdf/cv.pdf` e scommenta la riga `cv_pdf` in `_data/socials.yml` (compare l'icona nei contatti).

## Pubblicare la prima volta

1. Crea su GitHub (account `alessandropec`) un repo **pubblico** chiamato esattamente `alessandropec.github.io`.
2. Da questa cartella: `git init -b main`, `git add -A`, `git commit -m "portfolio iniziale"`, `git remote add origin https://github.com/alessandropec/alessandropec.github.io.git`, `git push -u origin main`.
3. Su GitHub attendi che l'action "Deploy site" finisca (tab Actions), poi vai su **Settings → Pages** e imposta Source = branch `gh-pages`.
4. Il sito è su `https://alessandropec.github.io`. Da lì in poi: ogni push su `main` rideploya da solo.

## Anteprima locale (opzionale)

Non disponibile senza Ruby o Docker. Se un giorno serve: installare Docker Desktop e da questa cartella `docker compose up -d` → `http://localhost:8080`.

## Cose rimosse dal template (riattivabili)

Blog, news, books, pagina teaching (layout corsi), pagina CV generata, e tutti i workflow GitHub tranne `deploy.yml`. Per riaverle: ripescarle dal [repo al-folio](https://github.com/alshedivat/al-folio).

## Prossimi step previsti

- Media dei progetti (screenshot, GIF, video, demo audio) man mano che li recuperi
- Chatbot RAG sui contenuti del sito (Cloudflare Worker gratuito + LLM free tier) — da fare come progetto a parte
