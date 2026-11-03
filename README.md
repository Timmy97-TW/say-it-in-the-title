# Say It In The Title

A short, visual guide to writing **action-oriented scientific slide titles** and designing
**clear biology results slides** — built for students giving a 10-minute live stage talk,
where people walk in halfway through and every slide has to stand on its own.

**The rule the whole site turns on:** a slide title is not a label for what is on the slide.
It is the one sentence the slide proves. Ask *"What is the message of this slide?"*, answer it
in a full sentence with a verb, and that is your title.

> Plant Assays − Agar → **ACCD kept chlorophyll in heat-stressed seedlings**

## Two pages

| | |
|---|---|
| **[Principles](principles.html)** | How action titles are built, five title types that work, and how to design the slide underneath one: plate photos, bar charts, n and error bars, stage legibility, build animations, slide budget. |
| **[Deck review](review.html)** | A real 10-minute talk reviewed slide by slide — the message of each slide, a rewritten title, fixes for the results, layout and clarity, notes on the spoken script, and a running order that fits in ten minutes. |

Both pages are bilingual: English and 繁體中文, switchable from the button in the navigation bar.

## The worked example

The review page works from the **ReLEAF** live stage talk by **GEMS-Taiwan, iGEM 2026** —
a stress-responsive bioreactor that produces plant protectants on the farm.
Slide images are the team's own work, reproduced here for teaching.

## Running it

Static HTML. No build step, no dependencies, no external network requests — the pages work
opened straight from disk.

```
open index.html
```

To serve locally:

```
python3 -m http.server 8000
```

## Layout

```
index.html          hub
principles.html     titles and slide design
review.html         the deck, slide by slide
assets/css/site.css design system
assets/js/site.js   language toggle, lightbox, quiz
assets/slides/      slide renders (webp)
assets/crops/       detail crops used in the review
```

## Licence

Text and code: CC BY 4.0 — use it, adapt it, teach from it.
Slide images remain the property of GEMS-Taiwan and are included for commentary and teaching.
