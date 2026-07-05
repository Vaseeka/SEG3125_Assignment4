# New Sale — E-Commerce Prototype (SEG3125 Assignment 4)

A React + Bootstrap high-fidelity prototype of a Nintendo DS game reselling
site, built with Vite.

## Run it

```
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Build for deployment

```
npm run build
```

This outputs a static site to `dist/` that you can host anywhere
(GitHub Pages, Netlify, Vercel, etc.) and link from your portfolio.

## Easy things to edit

- **Colours** — `src/config/theme.js`. Every colour used across the site
  (navbar, buttons, tags, discount badges) is defined once here, injected
  into CSS variables at runtime by `src/components/ThemeInjector.jsx`.
- **Text / copy** — `src/config/content.js`. Every heading, button label,
  form label, and message in the site lives in this one file.
- **Product catalog / faceted search options** — `src/data/products.js`.

## Structure

- `src/pages/Home.jsx` — hero, deals, popular games, feedback CTA banner, contact info
- `src/pages/Shop.jsx` — faceted search (Publisher / Franchise / Genre / Players / Max price) + pagination
- `src/pages/Cart.jsx` — the "follow instructions" checkout flow: Cart → Details → Payment → Done, with a step indicator (`CheckoutStepper.jsx`) showing progress
- `src/pages/Feedback.jsx` + `FeedbackThanks.jsx` — the "communicate" survey process
- `src/context/CartContext.jsx` — global cart state (add/remove/qty, totals, order placement)
- `src/components/` — Navbar (with Bootstrap icons for Home/Shop/Feedback/Cart), ProductCard, FacetedSidebar, StarRating, checkout step components

## Notes

- Payment is a form only — no real payment processing, per the assignment spec.
- No backend — data lives in `src/data/products.js` and cart/order state is in-memory (resets on refresh).
