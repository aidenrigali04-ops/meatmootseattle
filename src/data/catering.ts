import data from './catering.json';
import { site, fullAddress } from './site';

export type PageIntent = 'catering' | 'events';

export type CateringPackage = (typeof data.packages)[number];
export type EventType = (typeof data.eventTypes)[number];
export type PlanningRow = (typeof data.preorder.rows)[number];

export const catering = data;

export function packagePriceLine(pricePerPerson: number) {
  return `From $${pricePerPerson}${catering.priceLineSuffix}`;
}

export function includedText(pkg: CateringPackage) {
  return pkg.includes.join(', ');
}

export const lambShoulder = {
  copy: catering.lamb_shoulder.copy,
  regular: `Regular: $${catering.lamb_shoulder.regular.price}, at least ${catering.lamb_shoulder.regular.min_cooked_lb} lb cooked, serves ${catering.lamb_shoulder.regular.serves}`,
  large: `Large: $${catering.lamb_shoulder.large.price}, at least ${catering.lamb_shoulder.large.min_cooked_lb} lb cooked, serves ${catering.lamb_shoulder.large.serves}`,
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

export function visibleSpaceFields() {
  const { capacity_seated, capacity_standing, private_area, av, space_wording } = catering.space;
  return {
    space_wording,
    capacity_seated: capacity_seated || null,
    capacity_standing: capacity_standing || null,
    private_area: private_area || null,
    av: av || null,
  };
}

export const unconfirmedFields = catering.unconfirmed;
