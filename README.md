# PDF ကြည့်စရာ (PDF viewer)

A simple, portrait-first PDF viewer for phones, with random sounds and
Burmese (မြန်မာစာ) UI text.

## What it is

- Lists the PDFs in `pdfs/` as tappable cards.
- Opens any PDF full-screen in the phone's built-in PDF viewer.
- `Web Audio` generates random chimes/noise on taps — whole thing needs no
  sound files. Turn it off with the **အသံ ပိတ်** (sound off) button.
- Layout is mobile-first and portrait-oriented (ဒေါင်လိုက်).

## Files

- `index.html` — the app (all UI copy in Burmese)
- `css/style.css` — portrait-first styling
- `js/app.js` — PDF list, full-screen viewer, random sounds (Web Audio API)
- `pdfs/` — the PDFs being served

## Run locally

```sh
python3 -m http.server 8000
```

then open http://localhost:8000 from your phone.

## Add a PDF

Drop a file into `pdfs/` and add one entry to the `DOCS` array in `js/app.js`.