# AGENTS.md — Urchenalm / Urchenhof Website Guide

## Project overview
- This repository contains a static single-page website for **Frühstückspension Urchenhof** in Maria Alm am Hochkönig.
- The entry point is `index.html`; all visible “pages” are `<main class="page" data-page="…">` sections routed via hash navigation in `js/app.js`.
- Styling is centralized in `css/style.css` with warm alpine colors defined as CSS variables at the top of the file.
- The price calculator reads season and accommodation data from `data/prices.json` through `js/calculator.js`.

## Routing and page structure
- Valid route names are listed in `VALID_PAGES` inside `js/app.js`.
- Internal navigation uses `data-link="route-name"`; do not use normal relative links for in-site page changes unless intentionally leaving the SPA.
- If a new page section is added, also add its route name to `VALID_PAGES` and add or update navigation where appropriate.

## Price calculator
- Calculator widgets are created with a container using `data-calc-widget`.
- Optional calculator attributes:
  - `data-calc-default="accommodation-id"` preselects an accommodation from `data/prices.json`.
  - `data-calc-lock="true"` restricts the widget to the default accommodation, useful on room/apartment detail pages.
  - `data-calc-title="…"` and `data-calc-text="…"` override the widget copy.
- Keep accommodation IDs, `page` route values, min/max persons, and seasonal prices in `data/prices.json` synchronized with visible room/apartment pages.
- The calculator must continue to support multiple widgets on the same document; avoid global IDs in new calculator markup unless generated uniquely by `js/calculator.js`.

## SEO and content rules
- Maintain German primary content and hospitality-focused wording.
- Keep page titles/headings descriptive and include location context where natural: Maria Alm, Hochkönig, Salzburg/Saalfelden region.
- This is currently a hash-routed SPA, so `sitemap.xml` should at minimum include the root URL. If the site is later converted to real URLs, add every indexable route to `sitemap.xml`.
- Update `robots.txt` when the sitemap URL or production domain changes.
- Add meaningful `alt` text for new images.

## Logo and brand assets
- The active site logo is `photos/newlogo.png`; use this file for header, footer, favicon/apple-touch icon, and any future logo placements instead of embedding base64 image data.
- Logo images should include descriptive German `alt` text such as `Frühstückspension Urchenhof Logo` and explicit dimensions when placed in HTML to reduce layout shift.
- Keep logo styling in `css/style.css` under `.brand-logo` and `.footer-logo` so future replacements can be made without duplicating inline styles.

## Design system
- Use existing CSS variables (`--bg`, `--paper`, `--moss`, `--ember`, `--gold`, etc.) instead of introducing unrelated colors.
- Keep the visual language consistent: warm paper backgrounds, moss green accents, ember CTAs, Fraunces headings, Manrope body text.
- Price tables need high contrast and horizontal scrolling on small screens.
- Any prominent CTA should remain readable against its background and have hover/focus states.

## Testing checklist for future agents
- Run a lightweight static check after edits, e.g. `python3 -m http.server` and load the site in a browser if possible.
- Check hash routes such as `#home`, `#zimmer`, `#zimmer-doppel`, `#apartments`, and `#kalkulator`.
- For calculator changes, test at least one room and one apartment, including date ranges crossing seasons and closed periods.
- Run `git diff --check` before committing to catch whitespace problems.

## Recent maintenance notes
- Apartment calculator totals include the configured `endreinigung` amount from `data/prices.json`; user-facing result copy must therefore say that Endreinigung is included in the displayed Gesamtpreis, not added separately on top.

## Task completion checklist
- At the end of every task, review this `AGENTS.md` guide and update it when new project knowledge, maintenance notes, asset rules, SEO rules, or testing expectations have changed.
- Check `sitemap.xml` before finishing. Because this project currently uses hash-routed sections, only add sitemap entries when real indexable URLs are introduced; otherwise keep the root URL only.
- Preserve the SEO Perfect principle: descriptive German content, meaningful titles/headings, clean metadata, crawlable production URLs, optimized image `alt` text, and consistent hospitality/location keywords.
