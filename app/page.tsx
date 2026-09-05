import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';
import { business, mailtoHref } from '../lib/business';

const privateItems = [
  'Vlaga, buđ i kondenzacija',
  'Loš vazduh i nedovoljna ventilacija',
  'Grejanje i hlađenje',
  'Topla voda',
];

const businessItems = [
  'Grejanje velikih i visokih prostora',
  'Ventilacija i kvalitet vazduha',
  'Grejanje, hlađenje i topla voda',
  'Rešenja za sportske sale, ugostiteljstvo i druge objekte',
];

const technologyItems = [
  {
    title: 'Climtec',
    text: 'Ventilacija sa povratom toplote za stanove, kuće i poslovne prostore — bez velikog sistema kanala.',
    href: '/climtec',
    cta: 'Izbor opreme i ponuda →',
  },
  {
    title: 'EFFI',
    text: 'Radijaciono grejanje za visoke i velike prostore, gde klasično zagrevanje vazduha često nije najefikasnije rešenje.',
    href: '/effi',
    cta: 'Izbor opreme i ponuda →',
  },
  {
    title: 'Toplotne pumpe',
    text: 'Za grejanje, hlađenje i toplu vodu — od kuća do posebnih rešenja za sportske, poslovne i javne objekte.',
    href: '/toplotne-pumpe',
    cta: 'Opis rešenja →',
  },
];

const nav = [
  { href: '#dom', label: 'Za dom i stan' },
  { href: '#objekti', label: 'Za objekte' },
  { href: '#tehnologije', label: 'Tehnologije' },
  { href: '#kontakt', label: 'Kontakt' },
];

export default function HomePage() {
  return (
    <main>
      <SiteHeader nav={nav} homeHref="#top" />

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Inženjerska rešenja u Srbiji</p>
          <h1>Rešenja za svež vazduh, grejanje i udobniji prostor.</h1>
          <p className="lead">
            Za stanove, kuće, poslovne i javne objekte. Prvo gledamo šta je problem i šta objekat zaista traži, pa tek onda biramo rešenje.
          </p>
          <div className="hero-actions">
            <a className="button" href="#dom">Za dom i stan</a>
            <a className="button button-secondary" href="#objekti">Za poslovne i javne objekte</a>
          </div>
        </div>
      </section>

      <section className="section split" id="dom">
        <div>
          <p className="eyebrow">Za privatne klijente</p>
          <h2>Za dom i stan</h2>
          <p>
            Ako imate vlagu, buđ, kondenzaciju, loš vazduh ili problem sa grejanjem, prvo treba razumeti uzrok. Tek tada ima smisla birati opremu ili radove.
          </p>
          <div className="hero-actions">
            <a className="button button-secondary" href="/vlaga">Vlaga, buđ i kondenzacija →</a>
            <a className="button button-secondary" href="/climtec">Ventilacija sa rekuperacijom →</a>
            <a className="button button-secondary" href="/toplotne-pumpe">Toplotne pumpe →</a>
          </div>
        </div>
        <ul className="service-list">
          {privateItems.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>

      <section className="section split panel" id="objekti">
        <div>
          <p className="eyebrow">Za firme i ustanove</p>
          <h2>Za poslovne i javne objekte</h2>
          <p>
            Pomažemo kada objekat ima problem sa grejanjem, hlađenjem, ventilacijom, toplom vodom ili potrošnjom energije.
          </p>
          <p>
            Radimo sa sportskim salama i centrima, kafićima i restoranima, školama, komercijalnim, industrijskim i logističkim objektima.
          </p>
          <div className="hero-actions">
            <a className="button button-secondary" href="/effi">EFFI radijaciono grejanje →</a>
            <a className="button button-secondary" href="/climtec">Climtec ventilacija →</a>
            <a className="button button-secondary" href="/toplotne-pumpe">Toplotne pumpe →</a>
          </div>
        </div>
        <ul className="service-list">
          {businessItems.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>

      <section className="section" id="tehnologije">
        <p className="eyebrow">Tehnologije i rešenja</p>
        <h2>Biramo rešenje prema objektu i problemu.</h2>
        <div className="cards">
          {technologyItems.map((item) => (
            <article className="card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <a className="button button-secondary" href={item.href}>{item.cta}</a>
            </article>
          ))}
        </div>
      </section>

      <section className="section contact" id="kontakt">
        <div>
          <p className="eyebrow">Kontakt</p>
          <h2>Opišite problem ili objekat.</h2>
          <p>Pošaljite nekoliko rečenica i, ako je korisno, fotografije. Odgovoriću šta ima smisla proveriti kao sledeći korak.</p>
        </div>
        <div className="contact-links">
          <a href={mailtoHref()}>{business.email}</a>
          <a href={business.phone.href}>{business.phone.display}</a>
          <a href={business.whatsapp.href}>{business.whatsapp.label}</a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
