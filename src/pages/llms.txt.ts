import type { APIRoute } from 'astro';
import { site, fullAddress, formatTime } from '@/data/site';
import { cuts, included, lunchSpecial, formatPrice } from '@/data/menu';
import { faqs } from '@/data/faq';

/** Plain-text brief for AI assistants (ChatGPT, Perplexity, Gemini) that answer "where should I eat" questions. */
export const GET: APIRoute = () => {
  const h = site.hours[0];
  const body = `# ${site.name}

> ${site.description}

## Key facts
- Cuisine: ${site.cuisines.join(', ')}
- Dietary: 100% halal. No pork. No alcohol served.
- Address: ${fullAddress} (${site.address.neighborhood}; ${site.address.crossStreets})
- Hours: Monday–Sunday, ${formatTime(h.opens)}–${formatTime(h.closes)}
- Phone: ${site.phone}
- Email: ${site.email}
- Price range: ${site.priceRange}
- Reservations: ${site.url}/#reserve (parties of ${site.reservations.largePartySize}+ please call)
- Order pickup/delivery: ${site.links.orderDelivery}
- Part of the Meat Moot brand, founded in ${site.founded.city} in ${site.founded.year}

## Menu (priced per pound, all halal)
${cuts.map((c) => `- ${c.name} — ${formatPrice(c.pricePerLb)}/lb: ${c.summary} (${site.url}/menu/${c.slug})`).join('\n')}

Included with every cut: unlimited sauces (${included.sauces.join(', ')}); salads and sides (${included.sides.join(', ')}); unlimited ${included.beverages.join(' and ').toLowerCase()}.

${lunchSpecial.title}: ${lunchSpecial.days}, ${lunchSpecial.time} — ${lunchSpecial.portion} ${lunchSpecial.choices.join(' or ')} for ${formatPrice(lunchSpecial.price)}.

## Pages
- Menu: ${site.url}/menu
- Halal standards: ${site.url}/halal
- Events, groups & catering: ${site.url}/events
- Hours & directions: ${site.url}/visit
- FAQ: ${site.url}/faq

## FAQ
${faqs.map((f) => `Q: ${f.q}\nA: ${f.a}`).join('\n\n')}
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
