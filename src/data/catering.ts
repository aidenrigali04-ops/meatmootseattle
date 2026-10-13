import data from './catering.json';
import { site, fullAddress } from './site';
import { cuts, formatPrice } from './menu';

export type PageIntent = 'catering' | 'events';

export type CateringPackage = (typeof data.packages)[number];
export type EventType = (typeof data.eventTypes)[number];
export type PlanningRow = (typeof data.preorder.rows)[number];

export const catering = data;

const shoulder = cuts.find((c) => c.slug === 'lamb-shoulder');

/** Confirmed shoulder facts from the menu — not the unconfirmed Regular/Large package prices. */
export const lambShoulder = {
  name: shoulder?.name ?? 'Lamb Shoulder',
  pricePerLb: shoulder ? formatPrice(shoulder.pricePerLb) : null,
  serving: shoulder?.serving ?? '',
};

export const cateringContact = {
  name: site.name,
  address: fullAddress,
  street: site.address.street,
  streetShort: site.address.streetShort,
  city: site.address.city,
  region: site.address.region,
  postalCode: site.address.postalCode,
  neighborhood: site.address.neighborhood,
  phone: site.phone,
  phoneE164: site.phoneE164,
  hoursSummary: site.hoursSummary,
  orderOnline: site.links.orderOnline,
  reservations: site.reservations.bookingUrl,
  formEndpoint: site.reservations.formEndpoint,
  menuPath: '/menu',
  howItWorksPath: '/#how-it-works',
  contactPath: '/visit',
};

export function pageCopy(intent: PageIntent) {
  return catering.pages[intent];
}

export function packagesFor(intent: PageIntent): CateringPackage[] {
  return catering.pages[intent].packageOrder
    .map((id) => catering.packages.find((p) => p.id === id))
    .filter((p): p is CateringPackage => Boolean(p));
}

export function eventTypesFor(intent: PageIntent): EventType[] {
  return catering.pages[intent].eventOrder
    .map((id) => catering.eventTypes.find((e) => e.id === id))
    .filter((e): e is EventType => Boolean(e));
}

export function packageById(id: string) {
  return catering.packages.find((p) => p.id === id);
}

export const unconfirmedFields = catering.unconfirmed;
