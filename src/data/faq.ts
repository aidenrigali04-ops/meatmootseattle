import { site, fullAddress } from './site';
import { lunchSpecial } from './menu';

export type FaqItem = { q: string; a: string; tags: Array<'general' | 'halal' | 'menu' | 'visit' | 'events'> };

export const faqs: FaqItem[] = [
  {
    q: 'Is Meat Moot Seattle fully halal?',
    a: 'Yes. Every meat we serve is halal, and the restaurant is completely pork-free and alcohol-free. Our bar pours non-alcoholic drinks only.',
    tags: ['halal', 'general'],
  },
  {
    q: 'Do you serve alcohol?',
    a: 'No. Meat Moot is an alcohol-free restaurant. Mineral water and soft drinks are included with every meat order.',
    tags: ['halal', 'menu'],
  },
  {
    q: 'How does ordering by the pound work?',
    a: 'Prices are per pound. Choose your cut at the carving counter and tell us how much you would like — each cut has a minimum (for example ½ lb of brisket, 1 lb of ribs, 3 lb of lamb shoulder). Lamb shank and beef shank are sold by the piece. We weigh it in front of you, carve it to order and bring it to your table with unlimited house sauces, salads, sides and a drink.',
    tags: ['menu', 'general'],
  },
  {
    q: 'How much meat should I order per person?',
    a: 'Most guests are happy with about half a pound each. For big appetites or a table that wants to try several cuts, plan on three-quarters of a pound per person. Our carvers are happy to help you decide.',
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
    a: 'Yes. We cater events. Order online through Toast for pickup, or choose Toast Delivery — DoorDash and Uber Eats are also available. For larger catering orders, send an enquiry through the Catering page so we can smoke enough for your group.',
    tags: ['events', 'menu'],
  },
  {
    q: 'Is Meat Moot family-friendly?',
    a: 'Absolutely. Sharing boards, generous portions and theatrical table-side service make it a favourite for families and celebrations.',
    tags: ['general', 'visit'],
  },
];

export const faqsByTag = (tag: FaqItem['tags'][number]) => faqs.filter((f) => f.tags.includes(tag));
