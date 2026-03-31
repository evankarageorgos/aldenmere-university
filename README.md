# Aldenmere University — Website

A premium, mobile-first university website built with **Bootstrap 5**, vanilla CSS, and JavaScript. Designed to evoke the prestige and visual language of institutions like Cambridge, Oxford, and Harvard — deep navy, aged gold, warm cream, and paired classical serif typefaces (Playfair Display + EB Garamond).

## Pages

| File | Description |
|---|---|
| `index.html` | Homepage — hero, stats bar, and teaser previews linking to each dedicated section |
| `courses.html` | Course catalogue across 6 faculties with level filters, live search, and full syllabi (weekly schedules, learning outcomes, assessment breakdowns, core readings) in Bootstrap modals |
| `faculty.html` | Faculty directory with department filters, live search, and detailed profiles (bio, research interests, publications, office hours) in modals |
| `students.html` | Student life — enrolment data, faculty breakdown chart, international student stats, campus life, support services, and testimonials |
| `events.html` | Full events calendar with grid/list view toggle, type filters (lectures, symposia, webinars, open days), dedicated online events section, and past events archive |
| `_university.html` | Original single-page landing page (retained for reference) |

## Shared Assets

| File | Description |
|---|---|
| `assets/shared.css` | Design tokens (CSS variables), navbar, page headers, sub-nav, buttons, badges, reveal animations, footer |
| `assets/shared.js` | Scroll-based navbar transform, reveal-on-scroll, sub-nav active tracking, filter buttons, live search, active page highlighting |

## Stack

- **Bootstrap 5.3** — layout, grid, modals, collapse
- **Bootstrap Icons 1.11** — iconography
- **Google Fonts** — Playfair Display, EB Garamond, Cormorant Garamond
- No build tools, no dependencies beyond CDN links — open any HTML file directly in a browser
