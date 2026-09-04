import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Climtec ventilacija sa rekuperacijom | Koretskiy Serbia',
  description: 'Decentralizovana ventilacija sa rekuperacijom za stanove, kuće i poslovne objekte. Rešenja bez velikih sistema kanala i sa kontrolisanom izmenom vazduha.',
};

const where = [
  'Stanovi i kuće',
  'Rekonstrukcije gde nema prostora za velike ventilacione kanale',
  'Kancelarije i manji poslovni prostori',
  'Lokali, kafići i restorani',
  'Sportski i javni prostori gde je važna kontrolisana izmena vazduha',
];

const benefits = [
  {
    title: 'Svež vazduh bez stalno otvorenih prozora',
    text: 'Sistem obezbeđuje kontrolisanu izmenu vazduha, što je posebno važno u dobro zaptivenim objektima i tokom hladnog perioda.',
  },
  {
    title: 'Povrat dela toplote',
    text: 'Rekuperacija koristi energiju izlaznog vazduha kako bi se smanjili gubici koji nastaju klasičnim provetravanjem.',
  },
  {
    title: 'Pogodno za postojeće objekte',
    text: 'Decentralizovani pristup može biti praktičan kada izgradnja centralnog sistema sa mrežom kanala nije realna ili bi zahtevala veliki remont.',
  },
];

export default function ClimtecPage() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="/" aria-label="Koretskiy Engineering Solutions Serbia">
          <img className="brand-logo" src="https://koretskiy.com/logo.svg" alt="Koretskiy Consulting" />
          <span className="brand-text">Engineering Solutions Serbia</span>
        </a>
        <nav>
          <a href="/">Početna</a>
          <a href="#gde">Primena</a>
          <a href="#kako">Kako biramo</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
      </header>

      <section className="hero subpage-hero">
        <div className="hero-copy">
          <p className="eyebrow">Climtec · decentralizovana ventilacija</p>
          <h1>Ventilacija sa rekuperacijom bez velikog sistema kanala.</h1>
          <p className="lead">
            Za stanove, kuće i objekte gde je potrebna kontrolisana izmena vazduha, a klasična centralna ventilacija nije praktična.
          </p>
          <div className="hero-actions">
            <a className="button" href="#kontakt">Pošaljite podatke o prostoru</a>
            <a className="button button-secondary" href="#gde">Gde ima smisla</a>
          </div>
        </div>
      </section>

      <section className="section split" id="gde">
        <div>
          <p className="eyebrow">Gde se koristi</p>
          <h2>Kada treba uvesti svež vazduh bez velikog remonta.</h2>
          <p>
            Climtec je jedno od rešenja koje razmatramo kada prostor nema dovoljan prirodni ili mehanički dotok vazduha, a ugradnja velikog sistema kanala nije poželjna.
          </p>
        </div>
        <ul className="service-list">
          {where.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>

      <section className="section panel">
        <p className="eyebrow">Šta je prednost</p>
        <h2>Kontrolisan vazduh uz manje gubitke toplote.</h2>
        <div className="cards">
          {benefits.map((item) => (
            <article className="card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section split" id="kako">
        <div>
          <p className="eyebrow">Izbor rešenja</p>
          <h2>Ne biramo uređaj samo po kvadraturi.</h2>
        </div>
        <div>
          <p>
            Za preliminarni izbor gledamo zapreminu prostorije, broj korisnika, postojeći način provetravanja, raspored prostorija i potreban režim izmene vazduha.
          </p>
          <p>
            U nekim objektima dovoljne su pojedinačne jedinice, dok je u drugima potrebno kombinovati više tačaka dovoda i odvoda ili posebno rešavati kretanje vazduha između zona.
          </p>
          <p>
            Ako je problem vlaga ili buđ, prvo proveravamo da li je nedovoljna ventilacija zaista uzrok. Ventilacija ne rešava curenje, prodor vode ili kapilarnu vlagu.
          </p>
        </div>
      </section>

      <section className="section contact" id="kontakt">
        <div>
          <p className="eyebrow">Preliminarni izbor</p>
          <h2>Pošaljite osnovne podatke o prostoru.</h2>
          <p>
            Napišite grad, tip objekta, približnu površinu i visinu prostorija, broj korisnika i šta želite da rešite: loš vazduh, kondenzaciju, nedostatak ventilacije ili drugi problem.
          </p>
        </div>
        <div className="contact-links">
          <a href="https://wa.me/381638421005">WhatsApp</a>
          <a href="mailto:consulting@koretskiy.com">consulting@koretskiy.com</a>
          <a href="tel:+381638421005">+381 63 842 1005</a>
        </div>
      </section>

      <footer>
        <span>© 2026 Koretskiy Consulting</span>
        <a href="/">← Nazad na početnu</a>
      </footer>
    </main>
  );
}
