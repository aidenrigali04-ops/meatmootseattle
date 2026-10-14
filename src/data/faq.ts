import { site, fullAddress } from './site';
import { lunchSpecial } from './menu';
import { catering } from './catering';

export type FaqItem = { q: string; a: string; tags: Array<'general' | 'halal' | 'menu' | 'visit' | 'events'> };

export const faqs: FaqItem[] = [
  {
    q: 'Is Meat Moot Seattle fully halal?',
    a: catering.faqs.find((f) => f.q === 'Is everything halal?')?.a ?? 'Yes. All our meat is halal, and all drinks are alcohol-free.',
    tags: ['halal', 'general'],
  },
  {
    q: 'Do you serve alcohol?',
    a: catering.faqs.find((f) => f.q === 'Do you serve alcohol?')?.a ?? 'No. We serve mocktails and Turkish tea instead.',
    tags: ['halal', 'menu'],
  },
  {
    q: 'How does ordering by the pound work?',
    a: `Most cuts are priced per pound, with a minimum (for example ½ lb of brisket, 1 lb of ribs). Lamb shoulder is a set price: Regular $${catering.lamb_shoulder.regular.price} (at least ${catering.lamb_shoulder.regular.min_cooked_lb} lb cooked, serves ${catering.lamb_shoulder.regular.serves}) or Large $${catering.lamb_shoulder.large.price} (at least ${catering.lamb_shoulder.large.min_cooked_lb} lb cooked, serves ${catering.lamb_shoulder.large.serves}). Lamb shank and beef shank are sold by the piece. We weigh and carve to order and bring it to your table with unlimited house sauces, salads, sides and a drink.`,
    tags: ['menu', 'general'],
  },
  {
    q: 'How much meat should I order per person?',
    a: catering.faqs.find((f) => f.q === 'How much meat per person?')?.a ?? 'About ¾ lb at dinner and ½ lb at lunch. See the planning table.',
    tags: ['menu'],
  },
  {
    q: 'What is included with my order?',
    a: 'Every cut comes with unlimited house-made sauces — chimichurri, BBQ, hot sauce, honey, Moot Sauce and chili sauce — plus rice, taboullah, tatziki and green salad, garnishes of tomatoes, rosemary, garlic and potatoes, and your choice of beverage.',
    tags: ['menu'],
  },
  {
    q: 'Do you serve appetizers, brunch and dessert?',
    a: 'Yes. Appetizers are hummus, babaganoush and labneh. Extra sides are mac & cheese, roasted potatoes, french fries, rice and loaded brisket fries. Brunch includes menemen, shakshuka, merquez and eggs, smoked meat menemen, and tomato, feta and olives. Desserts are baklava, ice cream, creme brulee and kunafa.',
    tags: ['menu', 'general'],
  },
  {
    q: 'Do you have a lunch special?',
    a: `Yes. ${lunchSpecial.days}, ${lunchSpecial.time}, choose a chicken quarter, ½ lb of smoked brisket, or one lamb shank for $${lunchSpecial.price}. Sauces, salads and a drink are included.`,
    tags: ['menu', 'general'],
  },
  {
    q: 'What are your hours?',
    a: `We are open every day from 11am to 9pm.`,
    tags: ['visit', 'general'],
  },
  {
    q: 'Where are you located?',
    a: `${fullAddress}, in South Lake Union — on the corner of Fairview Ave N and Republican St, a short walk from the Amazon campus and Lake Union Park.`,
    tags: ['visit', 'general'],
  },
  {
    q: 'Do I need a reservation?',
    a: `Walk-ins are welcome when the room allows, but we recommend reserving, especially for dinner and weekends. Book online at ${site.url}/reserve for parties of up to ${site.reservations.largePartySize - 1}. For ${site.reservations.largePartySize} or more, email ${site.email} or call ${site.phone}.`,
    tags: ['visit', 'events'],
  },
  {
    q: 'Can you host team dinners, celebrations or private events?',
    a: 'Yes. Our shared-board format is made for groups — from team lunches near the South Lake Union tech offices to birthdays and family celebrations. Send an enquiry through the Events page, or request a catering quote if you want us to come to you.',
    tags: ['events'],
  },
  {
    q: 'Do you offer catering, takeout or delivery?',
    a: `${catering.faqs.find((f) => f.q === 'Do you deliver?')?.a} Everyday orders can also use Toast Delivery, DoorDash or Uber Eats. For group catering, send an enquiry through the Catering page.`,
    tags: ['events', 'menu'],
  },
  {
    q: 'Is Meat Moot family-friendly?',
    a: 'Absolutely. Sharing boards, generous portions and theatrical table-side service make it a favourite for families and celebrations.',
    tags: ['general', 'visit'],
  },
];

export const faqsByTag = (tag: FaqItem['tags'][number]) => faqs.filter((f) => f.tags.includes(tag));
