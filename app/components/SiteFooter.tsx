import { business } from '../../lib/business';

type Props = { backToHome?: boolean };

export default function SiteFooter({ backToHome = false }: Props) {
  return (
    <footer>
      <span>© 2026 {business.operatingName}</span>
      {backToHome
        ? <a href="/">← Nazad na početnu</a>
        : <a href={business.website.consultingUrl}>Business & consulting → koretskiy.com</a>}
    </footer>
  );
}
