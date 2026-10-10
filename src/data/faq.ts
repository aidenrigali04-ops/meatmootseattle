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
    a: 'Choose your cut at the carving counter and tell us how much you would like. We weigh it in front of you, carve it to order and bring it to your table with unlimited house sauces, fresh salads, sides and a drink.',
    tags: ['menu', 'general'],
  },
  {
    q: 'How much meat should I order per person?',
    a: 'Most guests are happy with about half a pound each. For big appetites or a table that wants to try several cuts, plan on three-quarters of a pound per person. Our carvers are happy to help you decide.',
    tags: ['menu'],
  },
  {
    q: 'What is included with my order?',
    a: 'Every cut comes with unlimited house-made sauces — chimichurri, honey mustard, dynamite, BBQ, hot sauce, honey, mushroom and smoky green garlic — plus salads and sides such as Meat Moot Special Rice, mashed potato and mixed pickles, and your choice of beverage.',
    tags: ['menu'],
  },
  {
    q: 'Do you have a lunch special?',
    a: `Yes. ${lunchSpecial.days}, ${lunchSpecial.time}, get a ${lunchSpecial.portion} portion of lamb shank or beef brisket for $${lunchSpecial.price}.`,
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
    a: `Walk-ins are welcome when the room allows, but we recommend reserving, especially for dinner and weekends. For parties of ${site.reservations.largePartySize} or more, please call us at ${site.phone}.`,
    tags: ['visit', 'events'],
  },
  {
    q: 'Can you host team dinners, celebrations or private events?',
    a: 'Yes. Our shared-board format is made for groups — from team lunches near the South Lake Union tech offices to birthdays and family celebrations. Send an enquiry through our Events page and we will plan the menu with you.',
    tags: ['events'],
  },
  {
    q: 'Do you offer catering, takeout or delivery?',
    a: 'Yes. We cater events, and you can order pickup or delivery through our online ordering partners. For larger catering orders, contact us directly so we can smoke enough for your group.',
    tags: ['events', 'menu'],
  },
  {
    q: 'Is Meat Moot family-friendly?',
    a: 'Absolutely. Sharing boards, generous portions and theatrical table-side service make it a favourite for families and celebrations.',
    tags: ['general', 'visit'],
  },
];

export const faqsByTag = (tag: FaqItem['tags'][number]) => faqs.filter((f) => f.tags.includes(tag));
