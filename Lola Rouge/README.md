# Lola Rouge — Makeup Artist Portfolio

Next.js (App Router, static export) + plain CSS. Enquiries go to WhatsApp.

```
npm install
npm run dev      # local preview at http://localhost:3000
npm run build    # outputs the static site to out/
```

## Deploy to Cloudflare Pages

- Build command: `npm run build`
- Build output directory: `out`
- If the project sits inside a folder in your repo, put that folder in **Root directory** (not the output directory).

## Edit the content

- `app/data.js`: WhatsApp number, rates, gallery looks, occasions and testimonials.
- `app/page.jsx`: the layout and text.

## Before / after slider (real client photos)

The slider stacks two images. In `app/page.jsx`, find the comment "BEFORE / AFTER" and swap
each `<Face />` for an `<img>`:

```jsx
<img src="/before.jpg" alt="Before" />   // inside the .bf div
<img src="/after.jpg" alt="After" />     // inside the .af div
```

Put the photos in a folder called `public/` (so `public/before.jpg` and `public/after.jpg`).
Ask the client for two photos with the same angle, same crop and same lighting, so they line up.
Add `.ba img { width:100%; height:100%; object-fit:cover }` to `app/globals.css`.
