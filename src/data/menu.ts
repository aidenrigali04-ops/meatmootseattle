import type { ImageMetadata } from 'astro';
import lambShankPlated from '@/assets/img/lamb-shank-plated.jpg';
import lambShoulderPlated from '@/assets/img/lamb-shoulder-plated.jpg';
import lambNeckPlated from '@/assets/img/lamb-neck-plated.jpg';
import lambRibsPlated from '@/assets/img/lamb-ribs-plated.jpg';
import beefRibsPlated from '@/assets/img/beef-ribs-plated.jpg';
import beefShankPlated from '@/assets/img/beef-shank-plated.jpg';
import brisketPlated from '@/assets/img/beef-brisket-plated.jpg';

export type Cut = {
  slug: string;
  name: string;
  animal: 'Lamb' | 'Beef';
  pricePerLb: number;
  summary: string;
  story: string;
  texture: string;
  pairsWith: string[];
  image: ImageMetadata;
  imageAlt: string;
  /** How the cut is sold at the carving counter. */
  soldBy: 'pound' | 'piece';
  /** One-line order note: minimum weight or typical piece size. */
  serving: string;
  /** Primary search phrase this cut's page targets. */
  keyword: string;
  signature?: boolean;
};

export const cuts: Cut[] = [
  {
    slug: 'beef-brisket',
    name: 'Beef Brisket',
    animal: 'Beef',
    pricePerLb: 49.99,
    summary: 'Tender halal brisket, smoked low and slow for 16 hours and sliced to order.',
    story:
      'The cut that built our name. A whole halal brisket goes onto the wood smoke for 16 hours until the bark sets dark and the fat renders through, then it is weighed and sliced at the carving counter in front of you.',
    texture: 'Peppery bark, a soft smoke ring and slices that pull apart under a fork.',
    pairsWith: ['Chimichurri', 'BBQ sauce', 'Meat Moot Special Rice', 'Mixed pickles'],
    image: brisketPlated,
    imageAlt: 'Smoked halal beef brisket on a black platter with rosemary, yellow rice, salads and house sauces',
    soldBy: 'pound',
    serving: 'Sold by the pound. Minimum order ½ lb.',
    keyword: 'smoked brisket Seattle',
    signature: true,
  },
  {
    slug: 'lamb-shank',
    name: 'Lamb Shank',
    animal: 'Lamb',
    pricePerLb: 49.99,
    summary: 'Our finest smoked shanks — rich, falling from the bone and finished at the table.',
    story:
      'Each halal lamb shank is seasoned with our house spice blend and smoked until the meat slips off the bone. It arrives whole on the board so you can carve and share it the way it is done in Istanbul.',
    texture: 'Deep, gelatinous and juicy, with a lacquered, smoky crust.',
    pairsWith: ['Honey', 'Smoky green garlic', 'Bulgur salad', 'Roasted garlic'],
    image: lambShankPlated,
    imageAlt: 'Smoked halal lamb shanks on a black platter with rosemary, roasted potatoes, cherry tomatoes and a ring of house sauces',
    soldBy: 'piece',
    serving: 'Sold by the piece. Each shank is about 0.4–0.7 lb.',
    keyword: 'lamb shank Seattle',
    signature: true,
  },
  {
    slug: 'lamb-shoulder',
    name: 'Lamb Shoulder',
    animal: 'Lamb',
    pricePerLb: 49.99,
    summary: 'An authentic smoked shoulder, marbled and generous — built for the whole table.',
    story:
      'Shoulder is the cut that rewards patience. The marbling melts through hours of smoke, leaving a sweet, rich meat that shreds into soft, juicy pieces — ideal for groups who want to keep coming back to the board.',
    texture: 'Rich and marbled, shredding into soft, smoky pieces.',
    pairsWith: ['Dynamite sauce', 'Turkish salad', 'Spicy potato', 'Mushroom sauce'],
    image: lambShoulderPlated,
    imageAlt: 'Whole smoked halal lamb shoulder on a black platter, surrounded by house sauces, salads, garlic and roasted potatoes',
    soldBy: 'pound',
    serving: 'Sold by the pound. Minimum 3 lb; each shoulder is usually 3–4.5 lb.',
    keyword: 'smoked lamb shoulder Seattle',
    signature: true,
  },
  {
    slug: 'lamb-neck',
    name: 'Lamb Neck',
    animal: 'Lamb',
    pricePerLb: 49.99,
    summary: 'A classic smoked neck — the connoisseur’s cut, served with a trio of house sauces.',
    story:
      'Lamb neck is the cut regulars order once they know. Slow smoke turns its web of connective tissue into the most succulent meat on the menu, bursting with flavour around the bone.',
    texture: 'Succulent and intensely flavoured, best eaten straight from the bone.',
    pairsWith: ['Hot sauce', 'Arabic salad', 'Jalapeño peppers', 'Mashed potato'],
    image: lambNeckPlated,
    imageAlt: 'Smoked halal lamb neck on a black platter with rosemary, roasted potatoes, cherry tomatoes and house sauces',
    soldBy: 'pound',
    serving: 'Sold by the pound. Minimum 1 lb; each piece is usually 1–1.7 lb.',
    keyword: 'halal lamb Seattle',
    signature: true,
  },
  {
    slug: 'lamb-ribs',
    name: 'Lamb Ribs',
    animal: 'Lamb',
    pricePerLb: 52.99,
    summary: 'The finest smoked lamb ribs, glossy with rendered fat and served by the rack.',
    story:
      'Smaller and richer than beef, our halal lamb ribs are smoked until the fat caps crisp and the meat comes clean off the bone. Order a rack for the table and pass them around.',
    texture: 'Crisp edges, rich meat and a clean pull from the bone.',
    pairsWith: ['Honey mustard', 'Haydaria salad', 'Cherry tomatoes', 'Rosemary'],
    image: lambRibsPlated,
    imageAlt: 'A full rack of smoked halal lamb ribs on a black platter with rosemary, cherry tomatoes, rice, salads and house sauces',
    soldBy: 'pound',
    serving: 'Sold by the pound. Minimum order 1 lb.',
    keyword: 'lamb ribs Seattle',
  },
  {
    slug: 'beef-ribs',
    name: 'Beef Ribs',
    animal: 'Beef',
    pricePerLb: 52.99,
    summary: 'Juicy, slow-smoked halal beef ribs — big bones, bigger flavour.',
    story:
      'Thick halal beef ribs take their time in the smoker until the meat is tender enough to cut with a spoon. They land on the board as a showpiece and disappear just as fast.',
    texture: 'Thick, juicy and beefy, with a dark, peppery bark.',
    pairsWith: ['BBQ sauce', 'Meat Moot salad', 'Meat Moot Special Rice', 'Roasted garlic'],
    image: beefRibsPlated,
    imageAlt: 'A rack of smoked halal beef ribs on a black platter with rosemary, roasted potatoes, cherry tomatoes and house sauces',
    soldBy: 'pound',
    serving: 'Sold by the pound. Minimum order 1 lb.',
    keyword: 'halal beef ribs Seattle',
  },
  {
    slug: 'beef-shank',
    name: 'Beef Shank',
    animal: 'Beef',
    pricePerLb: 49.99,
    summary: 'Smoky, tender beef shank with a marrow-rich centre, carved at the counter.',
    story:
      'A cut built for slow cooking. Hours of smoke break the shank down into tender, deeply beefy meat around a marrow bone — a hearty choice for anyone who loves bold flavour.',
    texture: 'Tender and beefy, enriched by the marrow at its heart.',
    pairsWith: ['Smoky green garlic', 'Bulgur salad', 'Mixed pickles', 'Spicy potato'],
    image: beefShankPlated,
    imageAlt: 'Upright smoked halal beef shank with a marrow bone, yellow rice, salads and house sauces',
    soldBy: 'piece',
    serving: 'Sold by the piece. Each shank is about 0.8–1 lb.',
    keyword: 'smoked beef shank Seattle',
  },
];

export const lunchSpecial = {
  title: 'Weekday Lunch',
  price: 19.99,
  days: 'Monday – Friday',
  time: '12pm – 3pm',
  options: [
    { name: 'Chicken Quarter', portion: '1 quarter' },
    { name: 'Beef Brisket', portion: '½ lb', href: '/menu/beef-brisket' },
    { name: 'Lamb Shank', portion: '1 piece', href: '/menu/lamb-shank' },
  ],
  note: 'Choose a chicken quarter, ½ lb of smoked brisket, or one lamb shank. Served with house sauces, salads and a drink.',
  served: 'Served with house sauces, salads and a drink.',
};

export const included = {
  sauces: [
    'Chimichurri',
    'Honey Mustard',
    'Dynamite',
    'BBQ',
    'Hot Sauce',
    'Honey',
    'Mushroom',
    'Smoky Green Garlic',
  ],
  sides: [
    'Meat Moot Salad',
    'Arabic Salad',
    'Haydaria Salad',
    'Bulgur Salad',
    'Turkish Salad',
    'Mashed Potato',
    'Mixed Pickles',
    'Meat Moot Special Rice',
  ],
  garnish: ['Jalapeño Peppers', 'Cherry Tomato', 'Roasted Garlic', 'Spicy Potato', 'Rosemary'],
  beverages: ['Mineral Water', 'Soft Drinks'],
};

export const formatPrice = (n: number) => `$${n.toFixed(2)}`;
