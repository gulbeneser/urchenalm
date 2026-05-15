# AGENTS.md — Urchenalm / Urchenhof Website Guide

## Project overview
- This repository contains a static single-page website for **Frühstückspension Urchenhof** in Maria Alm am Hochkönig.
- The entry point is `index.html`; all visible “pages” are `<main class="page" data-page="…">` sections routed via hash navigation in `js/app.js`.
- Styling is centralized in `css/style.css` with warm alpine colors defined as CSS variables at the top of the file and the active 2026 editorial design override at the end of the file.
- The price calculator reads season and accommodation data from `data/prices.json` through `js/calculator.js`.
- The site is intentionally content-preserving: redesign tasks should restyle existing German content and routes rather than inventing new menus, new page sections, or new hospitality claims.

## Routing and page structure
- Valid route names are listed in `VALID_PAGES` inside `js/app.js`.
- Internal navigation uses `data-link="route-name"`; do not use normal relative links for in-site page changes unless intentionally leaving the SPA.
- If a new page section is added, also add its route name to `VALID_PAGES` and add or update navigation where appropriate.
- Hash-routed detail pages currently include rooms (`zimmer-doppel`, `zimmer-dreibett`, `zimmer-vierbett`) and apartments (`apt-2-4`, `apt-4-6`); these are not standalone crawlable URLs unless the architecture changes.
- `js/app.js` also owns the editorial page-transition veil, reveal attribute preparation, active navigation state, mobile menu behavior, topbar scroll state, FAQ accordion, and calculator person stepper.

## Price calculator
- Calculator widgets are created with a container using `data-calc-widget`.
- Optional calculator attributes:
  - `data-calc-default="accommodation-id"` preselects an accommodation from `data/prices.json`.
  - `data-calc-lock="true"` restricts the widget to the default accommodation, useful on room/apartment detail pages.
  - `data-calc-title="…"` and `data-calc-text="…"` override the widget copy.
- Keep accommodation IDs, `page` route values, min/max persons, and seasonal prices in `data/prices.json` synchronized with visible room/apartment pages.
- The calculator must continue to support multiple widgets on the same document; avoid global IDs in new calculator markup unless generated uniquely by `js/calculator.js`.
- Apartment calculator totals include the configured `endreinigung` amount from `data/prices.json`; user-facing result copy must therefore say that Endreinigung is included in the displayed Gesamtpreis, not added separately on top.

## SEO and content rules
- Maintain German primary content and hospitality-focused wording.
- Keep page titles/headings descriptive and include location context where natural: Maria Alm, Hochkönig, Salzburg/Saalfelden region.
- This is currently a hash-routed SPA, so `sitemap.xml` should at minimum include the root URL. If the site is later converted to real URLs, add every indexable route to `sitemap.xml`.
- Update `robots.txt` when the sitemap URL or production domain changes.
- Add meaningful `alt` text for new images.
- Preserve the SEO Perfect principle: descriptive German content, meaningful titles/headings, clean metadata, crawlable production URLs, optimized image `alt` text, and consistent hospitality/location keywords.
- Do not add non-existent amenities, menus, restaurant claims, room categories, awards, or seasonal offers solely to match a design reference.

## Logo and brand assets
- The active site logo is `photos/newlogo.png`; use this file for header, footer, favicon/apple-touch icon, and any future logo placements instead of embedding base64 image data.
- Logo images should include descriptive German `alt` text such as `Frühstückspension Urchenhof Logo` and explicit dimensions when placed in HTML to reduce layout shift.
- Keep logo styling in `css/style.css` under `.brand-logo` and `.footer-logo` so future replacements can be made without duplicating inline styles.

## Design system — active 2026 editorial alpine luxury direction
- The active visual language is **Editoryal Alp Lüksü / Quiet Luxury / Magazine Aesthetic**: restrained, spacious, cream-paper backgrounds, asymmetry, fine hairlines, and slow interactions.
- The final override block in `css/style.css` begins with `DESIGN 2026: EDITORIAL ALPINE LUXURY`; make future design edits there when possible so the older baseline remains traceable.
- Core palette:
  - warm cream paper `#F4EFE6` for the main background,
  - pale stone `#E8E4DC` for quiet section transitions,
  - deep loden forest green `#2A3A2E` for restrained accents,
  - burnt bronze `#A88B5C` for hairlines, captions, and link underlines,
  - charcoal brown `#1C1A18` for text; avoid pure black.
- Typography currently uses Google Fonts `Cormorant Garamond` for editorial serif headings and `Inter` for clear body/navigation text.
- Headings should stay light-weight, generous, and editorial; body copy should remain narrow and readable, roughly 65 characters wide where practical.
- Navigation is intentionally quiet: text-only, small caps, slow bronze underline hover, translucent-to-blurred cream topbar on scroll.
- Images should feel matte and print-like: mild desaturation, warm tone, no drop shadows. Important images may use 1px stone hairline borders and cream padding.
- Interactions should be slow and refined: staggered reveals, clip-path image reveals, subtle hover zooms, custom pointer on fine-pointer devices, and a cream route-transition veil.
- Respect reduced-motion preferences: custom cursor and motion-heavy effects must disable or become near-instant under `prefers-reduced-motion: reduce`.
- Use existing CSS variables (`--bg`, `--paper`, `--moss`, `--ember`, `--gold`, etc.) instead of introducing unrelated colors.
- Price tables need high contrast and horizontal scrolling on small screens.
- Any prominent CTA should remain readable against its background and have hover/focus states.

## Testing checklist for future agents
- Run `git diff --check` before committing to catch whitespace problems.
- Run a lightweight static check after edits, e.g. `python3 -m http.server` and load or request the site.
- Check hash routes such as `#home`, `#zimmer`, `#zimmer-doppel`, `#apartments`, and `#kalkulator` after navigation or router changes.
- For calculator changes, test at least one room and one apartment, including date ranges crossing seasons and closed periods.
- For perceptible visual changes, take a screenshot if a browser tool is available in the environment; if unavailable, document the limitation in the final response.
- Always check `sitemap.xml` before finishing. Because this project currently uses hash-routed sections, only add sitemap entries when real indexable URLs are introduced; otherwise keep the root URL only.

## Task completion checklist
- At the end of every task, review and update this `AGENTS.md` guide when new project knowledge, maintenance notes, asset rules, SEO rules, testing expectations, or design conventions have changed.
- Check `sitemap.xml` before finishing and keep it aligned with the SPA/real-URL architecture.
- Commit changes on the current branch and create a pull request with the `make_pr` tool when codebase changes are made.
