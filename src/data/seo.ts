import { site } from '@/data/site';
import { formatPrice, lunchSpecial, type Cut } from '@/data/menu';

const brand = site.name;

/**
 * Unique title + meta description for every public URL.
 * Written to Google's 2026 title-link and snippet guidance:
 * accurate, concise, page-specific, no keyword stuffing, brand once at the end.
 * Every claim is taken from on-page copy or `site` / `menu` data — nothing invented.
 */
export const pageMeta = {
  home: {
    title: `${brand} | Halal Smokehouse in South Lake Union`,
    description:
      `Halal smoked brisket, ribs and lamb, sold by the pound in South Lake Union. 100% halal and alcohol-free. Open daily 11am–9pm. Weekday lunch ${formatPrice(lunchSpecial.price)}.`,
  },
  menu: {
    title: `Halal BBQ Menu & Prices | ${brand}`,
    description: `Seven halal cuts smoked in-house, priced from $49.99/lb. Unlimited sauces, salads and drinks. Weekday lunch ${formatPrice(lunchSpecial.price)}, Monday–Friday 12–3pm.`,
  },
  halal: {
    title: `Halal Restaurant in Seattle | ${brand}`,
    description:
      'Every cut is halal at Meat Moot Seattle. Pork-free kitchen, no alcohol served. Smoked brisket, ribs and lamb in South Lake Union. Open daily 11am–9pm.',
  },
  events: {
    title: `Group Dining & Catering in Seattle | ${brand}`,
    description:
      `Team lunches, birthdays and catering at Meat Moot Seattle. Halal smoked brisket, ribs and lamb, shared in South Lake Union. Enquire for groups of ${site.reservations.largePartySize} or more.`,
  },
  visit: {
    title: `Hours & Directions | ${brand}, South Lake Union`,
    description: `${brand} is at ${site.address.street}, ${site.address.city}, ${site.address.region} ${site.address.postalCode} in ${site.address.neighborhood}. ${site.hoursSummary}. Call ${site.phone}.`,
  },
  reserve: {
    title: `Reserve a Table in South Lake Union | ${brand}`,
    description: `Book online on OpenTable for parties of 1–${site.reservations.largePartySize - 1}. Groups of ${site.reservations.largePartySize} or more, call ${site.phone}. Halal smokehouse in South Lake Union, open daily 11am–9pm.`,
  },
  faq: {
    title: `Frequently Asked Questions | ${brand}`,
    description:
      'How ordering by the pound works, weekday lunch, reservations, groups, catering, hours, and our 100% halal, alcohol-free kitchen at Meat Moot Seattle.',
  },
  journal: {
    title: `Halal BBQ Guides in Seattle | ${brand}`,
    description:
      'Guides from Meat Moot Seattle: what makes barbecue halal, how ordering by the pound works, and planning a team lunch in South Lake Union.',
  },
  notFound: {
    title: `Page not found | ${brand}`,
    description: `This page isn't on the menu. See the smoked meat menu or reserve a table at ${brand} in South Lake Union.`,
  },
} as const;

/** Unique cut blurbs. `$PRICE` is replaced from `cut.pricePerLb` so prices cannot drift. */
const cutDescriptions: Record<string, string> = {
  'beef-brisket':
    'Tender halal brisket smoked 16 hours and sliced to order. $PRICE/lb, ½ lb minimum, at Meat Moot Seattle in South Lake Union. Sauces, salads and drinks included.',
  'lamb-shank':
    'Halal lamb shank smoked until it falls from the bone. Sold by the piece (about 0.4–0.7 lb) at $PRICE/lb in South Lake Union. Sauces, salads and drinks included.',
  'lamb-shoulder':
    'Marbled halal lamb shoulder, smoked for the whole table. $PRICE/lb, 3 lb minimum (usually 3–4.5 lb), at Meat Moot Seattle. Sauces, salads and drinks included.',
  'lamb-neck':
    'Halal lamb neck, smoked until succulent around the bone. $PRICE/lb, 1 lb minimum, at Meat Moot Seattle in South Lake Union. Sauces, salads and drinks included.',
  'lamb-ribs':
    'Halal lamb ribs smoked until the fat caps crisp, served by the rack. $PRICE/lb, 1 lb minimum, in South Lake Union. Sauces, salads and drinks included.',
  'beef-ribs':
    'Slow-smoked halal beef ribs with a dark, peppery bark. $PRICE/lb, 1 lb minimum, at Meat Moot Seattle in South Lake Union. Sauces, salads and drinks included.',
  'beef-shank':
    'Halal beef shank with a marrow-rich centre, sold by the piece (about 0.8–1 lb) at $PRICE/lb in South Lake Union. Sauces, salads and drinks included.',
};

export function cutMeta(cut: Cut): { title: string; description: string } {
  const price = formatPrice(cut.pricePerLb);
  const template = cutDescriptions[cut.slug];
  return {
    title: `Smoked ${cut.name} in Seattle | ${brand}`,
    description: template
      ? template.replaceAll('$PRICE', price)
      : `${cut.summary} ${cut.serving} ${price}/lb at ${brand} in South Lake Union.`,
  };
}
