# Meat Moot Seattle — website

The website for [Meat Moot Seattle](https://meatmootseattle.com), the halal smokehouse in South Lake Union. It's a rebuild of the Framer concept as a fast, static, SEO-first site built with [Astro](https://astro.build).

## Run it

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # type-checks, then outputs the static site to dist/
npm run preview   # serve the built site locally
```

`dist/` is plain HTML, CSS and images, so it can be hosted on Netlify, Vercel, Cloudflare Pages or any static host. Set `PUBLIC_GA_ID=G-XXXXXXX` in the host's environment variables to turn on Google Analytics 4.

## Where to edit things

| What | File |
| --- | --- |
| Name, address, phone, hours, links, socials, stats | `src/data/site.ts` |
| Menu cuts, prices, lunch special, sauces and sides | `src/data/menu.ts` |
| FAQ (also feeds Google's FAQ data and `llms.txt`) | `src/data/faq.ts` |
| Journal / blog posts | `src/content/journal/*.md` |
| Photos | `src/assets/img/` (compressed automatically at build time) |
| Colours and fonts | `src/styles/global.css` and `DESIGN.md` |

Change a price or the opening hours once in `src/data/` and it updates everywhere: on-page text, the footer, Google structured data and `llms.txt`.

## Pages

- `/`: home
- `/menu`: full menu, plus one page per cut at `/menu/<cut>`
- `/halal`, `/events`, `/visit`, `/faq`
- `/journal`: articles

## SEO built in

- **Structured data (JSON-LD)** on every page: `Restaurant` (address, geo, hours, cuisine, price range, reserve and order actions, social profiles), `Menu` with per-pound prices, `MenuItem` for each cut, `FAQPage`, `BreadcrumbList` and `BlogPosting`.
- A unique title, meta description, canonical URL, Open Graph and Twitter card on every page.
- `sitemap-index.xml`, `robots.txt`, and `llms.txt` (a plain-text brief for AI assistants such as ChatGPT, Perplexity and Gemini).
- Pages built around real local searches: "halal restaurant Seattle", "smoked brisket Seattle", "lamb shank Seattle", "team lunch South Lake Union" and similar.
- Fast loading: self-hosted fonts, WebP images at responsive sizes, almost no JavaScript, and a lazy-loaded map.
- Conversion tracking (once GA4 is on): `click_call`, `click_directions`, `click_reserve`, `click_order`, `click_review`, `submit_reservation` and `submit_event_enquiry`, each tagged with where on the page it was clicked.

## Google Business Profile checklist

1. **Keep NAP identical.** Use exactly `Meat Moot Seattle · 400 Fairview Ave N, Suite P001, Seattle, WA 98109 · (206) 261-0661` on GBP, Yelp, Apple Maps, TripAdvisor, Zabihah and every directory.
2. **Tag the GBP links** so Google traffic shows up separately in Analytics:
   - Website: `https://meatmootseattle.com/?utm_source=google&utm_medium=organic&utm_campaign=gbp`
   - Menu: `https://meatmootseattle.com/menu?utm_source=google&utm_medium=organic&utm_campaign=gbp-menu`
   - Reservations: `https://meatmootseattle.com/?utm_source=google&utm_medium=organic&utm_campaign=gbp-reserve#reserve`
3. **Primary category:** Halal restaurant (or Barbecue restaurant). **Secondary:** Barbecue restaurant, Steak house, Turkish restaurant, Middle Eastern restaurant, Caterer.
4. **Review link.** Paste the GBP "Ask for reviews" link into `links.googleReview` in `src/data/site.ts`. The "Leave a review" buttons will then open the review form directly.
5. **Search Console.** Verify the domain in Google Search Console and submit `https://meatmootseattle.com/sitemap-index.xml`.
6. **Keep posting.** Add a Journal article or GBP post every couple of weeks (new cuts, Ramadan and Eid hours, events, press). Fresh content plus a steady flow of reviews are the biggest local ranking levers.

## Still to fill in

- `links.googleReview`: your GBP review link.
- `halal.certifier`: the name of your halal certifying body (shown on `/halal` when set).
- `reservations.formEndpoint`: a Formspree, Basin or similar endpoint. Until it's set, the reservation form opens a pre-filled email to `info@meatmootseattle.com`.
- Photos of the Seattle dining room and team. Current imagery is food from the Framer build and the Meat Moot brand site.
