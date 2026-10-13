/**
 * Single source of truth for business details (NAP: name, address, phone).
 * Google cross-checks these against the Google Business Profile, Yelp, Apple Maps
 * and every directory listing — keep them character-for-character identical.
 */
export const site = {
  name: 'Meat Moot Seattle',
  shortName: 'Meat Moot',
  legalName: 'Meat Moot Seattle',
  url: 'https://meatmootseattle.com',
  tagline: "Seattle's halal smokehouse",
  description:
    'Halal smoked brisket, ribs and lamb, sold by the pound in South Lake Union. 100% halal and alcohol-free. Open daily 11am–9pm. Weekday lunch $19.99.',

  phone: '(206) 261-0661',
  phoneE164: '+12062610661',
  email: 'info@meatmootseattle.com',

  address: {
    street: '400 Fairview Ave N, Suite P001',
    streetShort: '400 Fairview Ave N',
    city: 'Seattle',
    region: 'WA',
    postalCode: '98109',
    country: 'US',
    neighborhood: 'South Lake Union',
    crossStreets: 'Corner of Fairview Ave N & Republican St',
  },
  geo: { lat: 47.622899, lng: -122.334003 },

  /** 24h "HH:MM". Seattle runs one schedule all week. */
  hours: [
    { day: 'Monday', short: 'Mon', opens: '11:00', closes: '21:00' },
    { day: 'Tuesday', short: 'Tue', opens: '11:00', closes: '21:00' },
    { day: 'Wednesday', short: 'Wed', opens: '11:00', closes: '21:00' },
    { day: 'Thursday', short: 'Thu', opens: '11:00', closes: '21:00' },
    { day: 'Friday', short: 'Fri', opens: '11:00', closes: '21:00' },
    { day: 'Saturday', short: 'Sat', opens: '11:00', closes: '21:00' },
    { day: 'Sunday', short: 'Sun', opens: '11:00', closes: '21:00' },
  ],
  hoursSummary: 'Open daily, 11am – 9pm',
  timeZone: 'America/Los_Angeles',

  priceRange: '$$',
  cuisines: ['Halal', 'Barbecue', 'Smokehouse', 'Turkish', 'Middle Eastern', 'Steakhouse'],

  stats: {
    yearsOpen: 5,
    locations: 42,
    smokeHours: 16,
  },
  founded: { year: 2021, city: 'Istanbul' },

  halal: {
    /** Name of the certifying body, shown on the Halal page when set. */
    certifier: '',
  },

  links: {
    /** Paste the "Ask for reviews" link from Google Business Profile → Read reviews → Get more reviews. */
    googleReview: '',
    googleMaps:
      'https://www.google.com/maps/search/?api=1&query=Meat+Moot+Seattle%2C+400+Fairview+Ave+N%2C+Seattle%2C+WA+98109',
    directions:
      'https://www.google.com/maps/dir/?api=1&destination=Meat+Moot+Seattle%2C+400+Fairview+Ave+N%2C+Seattle%2C+WA+98109',
    mapEmbed:
      'https://www.google.com/maps?q=Meat+Moot+Seattle,+400+Fairview+Ave+N,+Seattle,+WA+98109&z=16&output=embed',
    /** Toast online ordering for pickup (and in-house Toast checkout). */
    orderOnline:
      'https://www.toasttab.com/local/order/mm-seattle-smb-pos-new-business-em-400-fairview-avenue-north',
    /** Toast Delivery — same Toast menu; guests choose delivery at checkout. */
    orderDelivery:
      'https://www.toasttab.com/local/order/mm-seattle-smb-pos-new-business-em-400-fairview-avenue-north',
    /** Secondary delivery apps. Toast remains the primary delivery path. */
    deliveryPartners: [
      {
        name: 'DoorDash',
        href: 'https://www.doordash.com/store/meat-moot-seattle-38006001/',
      },
      {
        name: 'Uber Eats',
        href: 'https://www.ubereats.com/feed?diningMode=DELIVERY&q=Meat%20Moot&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMjQwMCUyMEZhaXJ2aWV3JTIwQXZlJTIwTiUyQyUyMFNlYXR0bGUlMkMlMjBXQSUyMDk4MTA5JTIyJTJDJTIycmVmZXJlbmNlJTIyJTNBJTIyJTIyJTJDJTIycmVmZXJlbmNlVHlwZSUyMiUzQSUyMmdvb2dsZV9wbGFjZXMlMjIlMkMlMjJsYXRpdHVkZSUyMiUzQTQ3LjYyMjg5OSUyQyUyMmxvbmdpdHVkZSUyMiUzQS0xMjIuMzM0MDAzJTdE',
      },
    ],
    appAndroid: 'https://play.google.com/store/apps/details?id=com.meatmoot.io',
    brand: 'https://meatmoot.com.tr/',
    press: {
      eater:
        'https://seattle.eater.com/restaurant-news/87371/a-theatrical-high-end-halal-chain-is-coming-to-seattle',
    },
  },

  social: {
    instagram: 'https://www.instagram.com/meatmoot_seattle/',
    tiktok: 'https://www.tiktok.com/@meatmoot.seattle',
    facebook: 'https://www.facebook.com/245263288663753',
  },

  reservations: {
    provider: 'OpenTable',
    /** Public OpenTable page; used as the fallback button until `widgetSnippet` is set. */
    bookingUrl: 'https://www.opentable.com/r/meat-moot-seattle',
    /**
     * `src` of the OpenTable widget script (OpenTable for Restaurants → Restaurant Profile →
     * Reservation widget → Copy code). Loaded only when the booking panel nears the viewport.
     */
    widgetScript:
      'https://www.opentable.com/widget/reservation/loader?rid=1461475&type=standard&theme=standard&color=3&dark=false&iframe=true&domain=com&lang=en-US&newtab=false&ot_source=Restaurant%20website&cfe=true',
    /**
     * Inbox for events and catering form submissions. Never rendered as visible text —
     * guests only see the enquiry form, not this address.
     */
    enquiryEmail: 'aiden@meatmootseattle.com',
    /**
     * Formsubmit.co AJAX endpoint for the event/catering form. Posts to `enquiryEmail`
     * without showing the address on the page.
     */
    formEndpoint: 'https://formsubmit.co/ajax/aiden@meatmootseattle.com',
    largePartySize: 6,
  },

  analytics: {
    /** GA4 Measurement ID, e.g. "G-XXXXXXX". Can also be set via PUBLIC_GA_ID. */
    ga4: import.meta.env.PUBLIC_GA_ID ?? '',
  },
} as const;

export const fullAddress = `${site.address.street}, ${site.address.city}, ${site.address.region} ${site.address.postalCode}`;

export function formatTime(hhmm: string): string {
  const [h, m] = hhmm.split(':').map(Number);
  const suffix = h >= 12 ? 'pm' : 'am';
  const hour = h % 12 === 0 ? 12 : h % 12;
  return m === 0 ? `${hour}${suffix}` : `${hour}:${String(m).padStart(2, '0')}${suffix}`;
}
