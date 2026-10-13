# Meat Moot Seattle — website

The website for [Meat Moot Seattle](https://meatmootseattle.com), the halal smokehouse in South Lake Union. It's a rebuild of the Framer concept as a fast, static, SEO-first site built with [Astro](https://astro.build).

## Run it

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # type-checks, then outputs the static site to dist/
npm run preview   # serve the built site locally
```

`dist/` is plain HTML, CSS and images, so it can be hosted on Netlify, Vercel, Cloudflare Pages or any static host. Google Analytics 4 (`G-2G0W5D0CZJ`) is included on every page. Override with `PUBLIC_GA_ID` only if a different property is needed.

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
- Conversion tracking (once GA4 is on): `click_call`, `click_directions`, `click_reserve`, `click_order`, `click_review`, `click_email` and `submit_event_enquiry`, each tagged with where on the page it was clicked.

## Google Business Profile checklist

1. **Keep NAP identical.** Use exactly `Meat Moot Seattle · 400 Fairview Ave N, Suite P001, Seattle, WA 98109 · (206) 261-0661` on GBP, Yelp, Apple Maps, TripAdvisor, Zabihah and every directory.
2. **Tag the GBP links** so Google traffic shows up separately in Analytics:
   - Website: `https://meatmootseattle.com/?utm_source=google&utm_medium=organic&utm_campaign=gbp`
   - Menu: `https://meatmootseattle.com/menu?utm_source=google&utm_medium=organic&utm_campaign=gbp-menu`
   - Reservations: `https://meatmootseattle.com/reserve?utm_source=google&utm_medium=organic&utm_campaign=gbp-reserve`
   - **Reserve with Google:** OpenTable is a Reserve with Google booking partner, so a "Reserve a table" button can appear on the GBP listing. It matches on name, address and phone, so keep the OpenTable profile's NAP identical to GBP.
3. **Primary category:** Halal restaurant (or Barbecue restaurant). **Secondary:** Barbecue restaurant, Steak house, Turkish restaurant, Middle Eastern restaurant, Caterer.
4. **Review link.** Paste the GBP "Ask for reviews" link into `links.googleReview` in `src/data/site.ts`. The "Leave a review" buttons will then open the review form directly.
5. **Search Console.** Verify the domain in Google Search Console and submit `https://meatmootseattle.com/sitemap-index.xml`.
6. **Keep posting.** Add a Journal article or GBP post every couple of weeks (new cuts, Ramadan and Eid hours, events, press). Fresh content plus a steady flow of reviews are the biggest local ranking levers.

## Still to fill in

- `links.googleReview`: your GBP review link.
- `halal.certifier`: the name of your halal certifying body (shown on `/halal` when set).
- `reservations.widgetScript`: the `src` from the OpenTable reservation widget code (OpenTable for Restaurants → Restaurant Profile → Reservation widget → Copy code). It's set to restaurant ID 1461475. The widget script loads only when a booking panel scrolls near the screen, so it doesn't slow the rest of the page down. If it's emptied, the panel falls back to a "Find a table" button that opens the OpenTable page. Booking notification emails are configured in OpenTable, not on the website.
- `reservations.enquiryEmail`: inbox for `/events` catering and event form submissions (`aiden@meatmootseattle.com`). It is not shown on the site. The first submission through FormSubmit.co sends a confirmation email that must be approved once.
- Photos of the Seattle dining room and team. Current imagery is food from the Framer build and the Meat Moot brand site.
