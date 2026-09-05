export const business = {
  operatingName: 'Koretskiy Consulting',
  siteName: 'Koretskiy Engineering Solutions Serbia',
  registeredName: 'OLEKSANDR KORETSKIY PR AGENCIJA ZA TEHNIČKI KONSALTING FUTOG',
  logoUrl: 'https://koretskiy.com/logo.svg',
  email: 'consulting@koretskiy.com',
  phone: {
    e164: '+381638421005',
    display: '+381 63 842 1005',
    href: 'tel:+381638421005',
  },
  whatsapp: {
    href: 'https://wa.me/381638421005',
    label: 'WhatsApp',
  },
  website: {
    canonicalUrl: 'https://koretskiy.rs',
    consultingUrl: 'https://koretskiy.com',
  },
} as const;

export function mailtoHref(subject?: string) {
  return subject
    ? `mailto:${business.email}?subject=${encodeURIComponent(subject)}`
    : `mailto:${business.email}`;
}
