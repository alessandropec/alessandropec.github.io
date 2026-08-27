module.exports = {
  content: ["_site/**/*.html", "_site/**/*.js"],
  css: ["_site/assets/css/*.css"],
  output: "_site/assets/css/",
  skippedContentGlobs: ["_site/assets/**/*.html"],
  safelist: [
    "collapse",
    "collapsing",
    "show",
    "dropdown-menu",
    "dropdown-item",
    "table",
    "table-dark",
    "table-hover",
    "table-responsive",
    "af-tooltip",
    "af-popover",
    "font-weight-bold",
    "font-weight-medium",
    "font-weight-lighter",
    // medium-zoom injects these at runtime, so they never appear in the static
    // HTML PurgeCSS scans; without them the zoom overlay's z-index rule is purged
    // and page chrome (scroll-progress bar, ToC) bleeds through a zoomed image.
    "medium-zoom-overlay",
    "medium-zoom-image--opened",
    // vanilla-back-to-top creates #back-to-top at runtime, so every custom.css
    // rule for it (mobile sizing, safe-area offset, bob animation) gets purged
    // and only the library's own injected defaults survive.
    "back-to-top",
    // landing bio pager: state classes toggled by the inline script in
    // _pages/about.md. They do appear as literals there (rendered into
    // _site/index.html, which is scanned), so this is belt-and-braces.
    "is-open",
    "is-turned",
    "ale-bio-fade-out",
    // closing "back to projects" button injected at runtime by head.liquid on
    // every project detail page; belt-and-braces (the literal is in the inline
    // script that renders into each scanned HTML page).
    "ale-back-link--bottom",
  ],
};
