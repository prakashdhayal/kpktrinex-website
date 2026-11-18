/**
 * The company as registered - every page, the footer and the structured data read it from here. The name, the address
 * and the Udyam number are word for word as on the Udyam Registration Certificate: Meta, Google and anyone checking
 * compare them, so change them only when the certificate changes.
 */
export const COMPANY = {
  name: 'KPK Trinex Technologies',
  legalName: 'KPK TRINEX TECHNOLOGIES',
  slogan: 'We build. We run. We evolve.',
  udyam: 'UDYAM-RJ-35-0026257',
  enterprise: 'Micro enterprise (MSME), services',
  registeredOn: '2026-10-23',
  businessSince: '2026-09-01',
  founder: 'Prakash Dhayal',
  site: 'https://kpktrinextechnologies.in',
} as const;

/** The registered office, as on the certificate, line by line. */
export const ADDRESS = {
  lines: ['House No. 312, Dhayal Farm House', 'Dhayalo ki Dhani, Village Bhawsiya', 'Parbatsar, District Didwana Kuchaman', 'Rajasthan 341512, India'],
  short: 'Parbatsar, Didwana Kuchaman, Rajasthan 341512',
  street: 'House No. 312, Dhayal Farm House, Dhayalo ki Dhani, Village Bhawsiya',
  locality: 'Parbatsar',
  district: 'Didwana Kuchaman',
  region: 'Rajasthan',
  postalCode: '341512',
  country: 'IN',
} as const;

export const CONTACT = {
  phone: '+91 63761 54794',
  phoneHref: 'tel:+916376154794',
  whatsapp: 'https://wa.me/916376154794',
  email: 'hello@kpktrinextechnologies.in',
} as const;

export const NAV = [
  { href: '/products/', label: 'Products' },
  { href: '/work/', label: 'Work' },
  { href: '/about/', label: 'About' },
  { href: '/contact/', label: 'Contact' },
] as const;
