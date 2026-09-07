# Ahmed Clinic — Landing Page

A mobile-first, single-page site for Dr. Mohammad Ahmed's clinic in Darzian,
Moradabad. Plain HTML/CSS/JS — no build step, no framework, works anywhere.

## Files

```
index.html        All page content and structure
css/style.css      All styling — colors, fonts and spacing are set as
                   CSS variables at the top of the file
js/script.js       Small script: footer year + hides the sticky mobile
                   call/WhatsApp bar near the appointment section
assets/            Put real photos/logo here once available
```

## Before you launch — replace placeholders

Every placeholder is marked `<!-- TODO -->` in `index.html`. At minimum, update:

- Clinic name (currently "Ahmed Clinic" — replace with the real name)
- Doctor's qualifications, registration number and biography
- Phone number and WhatsApp number (search for `911234567890` — it appears
  several times: top bar, hero, appointment section, footer, sticky bar)
- Email address
- Full clinic address and pincode
- Clinic timings table
- Google Maps embed: go to Google Maps → find the clinic → Share →
  Embed a map → copy the `src` URL into the `<iframe>` in the Location
  section
- Doctor's photo: replace the circular placeholder in the About section
  (`.about__avatar`) with an `<img>` tag pointing to a photo in `/assets`

## Customizing design

All colors, fonts and radii are defined once, at the top of `css/style.css`:

```css
:root {
  --ink: #123832;      /* primary dark teal */
  --paper: #F6F3EC;    /* background */
  --amber: #B9812F;    /* buttons / accent */
  --sage: #7C9885;     /* secondary accent */
  --whatsapp: #25D366; /* WhatsApp button only */
  ...
}
```

Change a value once and it updates everywhere it's used.

Fonts are loaded from Google Fonts in `index.html`'s `<head>` (Fraunces for
headings, IBM Plex Sans for body text, IBM Plex Mono for the timings table).

## Adding or removing services

Each service is one `<article class="service-card">` block inside
`.services__track` in `index.html`. Copy, edit or delete blocks as needed —
the layout (horizontal scroll on mobile, grid on desktop) adjusts
automatically.

## Deploying

This is a static site — upload the folder as-is to any static host
(Netlify, Vercel, GitHub Pages, cPanel, etc.), or open `index.html` directly
in a browser to preview locally.

## Accessibility & performance notes

- Keyboard focus is visible on all interactive elements.
- Motion (the hero's animated line) respects `prefers-reduced-motion`.
- The map iframe uses `loading="lazy"`.
- Replace the Google Fonts `<link>` tags with self-hosted fonts if you need
  to avoid third-party requests.
