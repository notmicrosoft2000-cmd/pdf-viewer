# ဂျင်းအင်ပါယာ (Ginger Empire)

A portrait-first mobile PDF viewer with summary, quiz, and random sounds,
written in Burmese (မြန်မာစာ).

## What's inside

- **စာမူ** — open the GINGER.pdf in a full-screen reading hall with a
  Burmese-chant marquee at the bottom.
- **အနှစ်ချုပ်** — a tablet-style timeline of all five Ginger Eras, summarised
  from the PDF's content.
- **ပဟေဠိ** — 12-question multiple-choice quiz written from the PDF, with
  instant feedback and a final score graded in Burmese.
- **Random sounds** — `Web Audio` chimes on every tap, deep gongs on
  major events. Toggle off with the **ခေါင်းလောင်း** button at the bottom.

## Files

- `index.html` — the app (all copy in Burmese)
- `css/style.css` — ginger-seal / parchment aesthetic, portrait-first
- `js/app.js` — summary data, quiz, viewer, random sounds
- `pdfs/` — the PDF being served

## Run locally

```sh
python3 -m http.server 8000
```

Open http://localhost:8000 on your phone in portrait orientation.

## Add a new PDF

Drop the file into `pdfs/`, add entries to the `DOCS` array in `js/app.js`,
and update the `<button id="openBook">` in `index.html`.