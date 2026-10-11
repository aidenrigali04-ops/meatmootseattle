import { site } from '@/data/site';
import { cuts, included, lunchSpecial } from '@/data/menu';
import type { FaqItem } from '@/data/faq';

const abs = (path: string) => new URL(path, site.url).toString();
export const restaurantId = `${site.url}/#restaurant`;

export function restaurantSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    '@id': restaurantId,
    name: site.name,
    alternateName: site.shortName,
    description: site.description,
    url: site.url,
    telephone: site.phoneE164,
    email: site.email,
    image: [abs('/og-default.jpg')],
    logo: abs('/logo.png'),
    priceRange: site.priceRange,
    servesCuisine: site.cuisines,
    acceptsReservations: true,
    hasMenu: abs('/menu'),
    menu: abs('/menu'),
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    geo: { '@type': 'GeoCoordinates', latitude: site.geo.lat, longitude: site.geo.lng },
    hasMap: site.links.googleMaps,
    areaServed: [
      { '@type': 'Place', name: 'South Lake Union, Seattle' },
      { '@type': 'City', name: 'Seattle' },
    ],
    openingHoursSpecification: site.hours.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: `https://schema.org/${h.day}`,
      opens: h.opens,
      closes: h.closes,
    })),
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Halal', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Alcohol-free', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Family-friendly', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Group dining', value: true },
    ],
    potentialAction: [
      {
        '@type': 'ReserveAction',
        target: { '@type': 'EntryPoint', urlTemplate: abs('/reserve'), actionPlatform: ['https://schema.org/DesktopWebPlatform', 'https://schema.org/MobileWebPlatform'] },
        result: { '@type': 'FoodEstablishmentReservation', name: 'Table reservation' },
      },
      {
        '@type': 'OrderAction',
        target: { '@type': 'EntryPoint', urlTemplate: site.links.orderDelivery },
      },
    ],
    sameAs: [...Object.values(site.social), site.links.brand],
    foundingDate: String(site.founded.year),
    parentOrganization: { '@type': 'Organization', name: 'Meat Moot', url: site.links.brand },
  };
}

export function menuSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Menu',
    '@id': `${site.url}/menu#menu`,
    name: 'Meat Moot Seattle Menu',
    url: abs('/menu'),
    inLanguage: 'en-US',
    hasMenuSection: [
      {
        '@type': 'MenuSection',
        name: 'Smoked Meats — sold by the pound',
        description: 'Every cut is halal and served with unlimited house sauces, salads, sides and a beverage.',
        hasMenuItem: cuts.map((c) => ({
          '@type': 'MenuItem',
          name: c.name,
          description: c.summary,
          url: abs(`/menu/${c.slug}`),
          suitableForDiet: 'https://schema.org/HalalDiet',
          offers: {
            '@type': 'Offer',
            price: c.pricePerLb.toFixed(2),
            priceCurrency: 'USD',
            priceSpecification: {
              '@type': 'UnitPriceSpecification',
              price: c.pricePerLb.toFixed(2),
              priceCurrency: 'USD',
              unitCode: 'LBR',
              unitText: 'lb',
            },
          },
        })),
      },
      {
        '@type': 'MenuSection',
        name: lunchSpecial.title,
        description: `${lunchSpecial.days}, ${lunchSpecial.time}`,
        hasMenuItem: lunchSpecial.choices.map((name) => ({
          '@type': 'MenuItem',
          name: `${lunchSpecial.portion} ${name}`,
          description: lunchSpecial.note,
          suitableForDiet: 'https://schema.org/HalalDiet',
          offers: { '@type': 'Offer', price: lunchSpecial.price.toFixed(2), priceCurrency: 'USD' },
        })),
      },
      {
        '@type': 'MenuSection',
        name: 'Salads & Sides (included)',
        hasMenuItem: included.sides.map((name) => ({ '@type': 'MenuItem', name })),
      },
    ],
  };
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [{ name: 'Home', path: '/' }, ...items].map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: abs(item.path),
    })),
  };
}

export function faqSchema(items: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function articleSchema(opts: { title: string; description: string; path: string; published: Date; updated?: Date; image: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: opts.title,
    description: opts.description,
    mainEntityOfPage: abs(opts.path),
    image: abs(opts.image),
    datePublished: opts.published.toISOString(),
    dateModified: (opts.updated ?? opts.published).toISOString(),
    author: { '@type': 'Organization', name: site.name, url: site.url },
    publisher: { '@id': restaurantId },
  };
}
