const privateItems = [
  'Vlaga, buđ i kondenzacija',
  'Ventilacija i kvalitet vazduha',
  'Toplotne pumpe',
  'Grejanje i hlađenje',
];

const businessItems = [
  'Radijaciono grejanje EFFI',
  'Climtec ventilacija sa rekuperacijom',
  'Toplotne pumpe',
  'Modernizacija mikroklime',
  'Rešenja za sportske, ugostiteljske i druge objekte',
];

const technologyItems = [
  {
    title: 'Climtec',
    text: 'Decentralizovana ventilacija sa rekuperacijom za stanove, kuće, rekonstrukcije i objekte gde je potrebna kontrolisana izmena vazduha.',
    href: '/climtec',
    cta: 'Izbor opreme i ponuda →',
  },
  {
    title: 'EFFI',
    text: 'Radijacioni sistemi grejanja za visoke, velike i specifične prostore, sa manjim zagrevanjem vazduha ispod plafona.',
    href: '/effi',
    cta: 'Izbor opreme i ponuda →',
  },
  {
    title: 'Toplotne pumpe',
    text: 'Izbor i uklapanje toplotnih pumpi u sistem grejanja, hlađenja i pripreme objekta za efikasniji rad.',
  },
];

export default function HomePage() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Koretskiy Engineering Solutions Serbia">
          <img className="brand-logo" src="https://koretskiy.com/logo.svg" alt="Koretskiy Consulting" />
          <span className="brand-text">Engineering Solutions Serbia</span>
        </a>
        <nav>
          <a href="#dom">Za dom i stan</a>
          <a href="#objekti">Za objekte</a>
          <a href="#tehnologije">Tehnologije</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Inženjerska rešenja u Srbiji</p>
          <h1>Praktična rešenja za bolji vazduh, grejanje i mikroklimu.</h1>
          <p className="lead">
            Za stanove i kuće, kao i za poslovne i javne objekte. Polazimo od konkretnog problema i biramo rešenje koje odgovara objektu.
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
            Kada se pojave vlaga, buđ, kondenzacija, loš vazduh ili problem sa grejanjem, prvo treba razumeti uzrok. Tek tada ima smisla birati opremu ili radove.
          </p>
          <div className="hero-actions">
            <a className="button button-secondary" href="/vlaga">Vlaga, buđ i kondenzacija →</a>
            <a className="button button-secondary" href="/climtec">Ventilacija sa rekuperacijom →</a>
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
            Rešenja za objekte sa velikom zapreminom, promenljivim brojem korisnika, posebnim zahtevima za temperaturu, kvalitet vazduha ili kretanje vazduha.
          </p>
          <p>
            Primena uključuje sportske sale i centre, kafiće i restorane, škole, komercijalne prostore, industrijske i logističke objekte.
          </p>
          <div className="hero-actions">
            <a className="button button-secondary" href="/effi">EFFI radijaciono grejanje →</a>
            <a className="button button-secondary" href="/climtec">Climtec ventilacija →</a>
          </div>
        </div>
        <ul className="service-list">
          {businessItems.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>

      <section className="section" id="tehnologije">
        <p className="eyebrow">Tehnologije i rešenja</p>
        <h2>Oprema je deo rešenja, ne polazna tačka.</h2>
        <div className="cards">
          {technologyItems.map((item) => (
            <article className="card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              {item.href ? <a className="button button-secondary" href={item.href}>{item.cta}</a> : null}
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
          <a href="mailto:consulting@koretskiy.com">consulting@koretskiy.com</a>
          <a href="tel:+381638421005">+381 63 842 1005</a>
          <a href="https://wa.me/381638421005">WhatsApp</a>
        </div>
      </section>

      <footer>
        <span>© 2026 Koretskiy Consulting</span>
        <a href="https://koretskiy.com">Business & consulting → koretskiy.com</a>
      </footer>
    </main>
  );
}
