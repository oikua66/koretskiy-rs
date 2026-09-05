import { business } from '../../lib/business';

type NavItem = { href: string; label: string };

type Props = {
  nav: NavItem[];
  homeHref?: string;
};

export default function SiteHeader({ nav, homeHref = '/' }: Props) {
  return (
    <header className="site-header">
      <a className="brand" href={homeHref} aria-label={business.siteName}>
        <img className="brand-logo" src={business.logoUrl} alt={business.operatingName} />
        <span className="brand-text">Engineering Solutions Serbia</span>
      </a>
      <nav>
        {nav.map((item) => <a href={item.href} key={`${item.href}-${item.label}`}>{item.label}</a>)}
      </nav>
    </header>
  );
}
