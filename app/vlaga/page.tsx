import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vlaga, buđ i kondenzacija | Koretskiy Serbia',
  description: 'Dijagnostika uzroka vlage, buđi i kondenzacije u stanovima i kućama u Srbiji. Prvo utvrđujemo uzrok, pa tek onda biramo rešenje.',
};

const causes = [
  'Nedovoljna ventilacija i visoka vlažnost vazduha',
  'Hladni zidovi i toplotni mostovi',
  'Prodor kiše kroz fasadu, krov ili spojeve',
  'Curenje vode iz instalacija',
  'Kapilarna ili bočna vlaga iz konstrukcije',
  'Kombinacija više uzroka istovremeno',
];

const steps = [
  {
    n: '01',
    title: 'Pošaljite opis i fotografije',
    text: 'Napišite gde se problem pojavljuje, kada je najizraženiji i šta je do sada rađeno. Fotografije često već pokažu u kom pravcu treba tražiti uzrok.',
  },
  {
    n: '02',
    title: 'Procena mogućih uzroka',
    text: 'Razdvajamo simptom od uzroka i određujemo šta treba proveriti: ventilaciju, temperaturu površina, vlagu u zidu, instalacije ili spoljne prodore vode.',
  },
  {
    n: '03',
    title: 'Jasan sledeći korak',
    text: 'Dobijate preporuku šta zaista ima smisla raditi i da li je potreban pregled na licu mesta i dodatna merenja.',
  },
];

export default function VlagaPage() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="/" aria-label="Koretskiy Engineering Solutions Serbia">
          <img className="brand-logo" src="https://koretskiy.com/logo.svg" alt="Koretskiy Consulting" />
          <span className="brand-text">Engineering Solutions Serbia</span>
        </a>
        <nav>
          <a href="/">Početna</a>
          <a href="#uzroci">Uzroci</a>
          <a href="#pregled">Kako radimo</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
      </header>

      <section className="hero damp-hero">
        <div className="hero-copy">
          <p className="eyebrow">Vlaga · buđ · kondenzacija</p>
          <h1>Buđ na zidu nije dijagnoza.</h1>
          <p className="lead">
            Isti trag na zidu može imati potpuno različite uzroke. Zato prvo utvrđujemo šta stvara vlagu, a tek onda biramo rešenje.
          </p>
          <div className="hero-actions">
            <a className="button" href="https://wa.me/381638421005">Pošaljite fotografije</a>
            <a className="button button-secondary" href="#pregled">Kako izgleda pregled</a>
          </div>
        </div>
      </section>

      <section className="section split" id="uzroci">
        <div>
          <p className="eyebrow">Šta može biti uzrok</p>
          <h2>Vlaga nije uvek problem hidroizolacije.</h2>
          <p>
            Plesan i mokre površine mogu nastati zbog loše ventilacije, hladnog zida, curenja, prodora kiše ili vlage iz same konstrukcije. Pogrešan uzrok znači i pogrešan popravak.
          </p>
        </div>
        <ul className="service-list">
          {causes.map((cause) => <li key={cause}>{cause}</li>)}
        </ul>
      </section>

      <section className="section panel" id="pregled">
        <p className="eyebrow">Kako radimo</p>
        <h2>Od simptoma do uzroka.</h2>
        <div className="cards damp-steps">
          {steps.map((step) => (
            <article className="card" key={step.n}>
              <span className="step-number">{step.n}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section split">
        <div>
          <p className="eyebrow">Važno</p>
          <h2>Ne prodajemo unapred određeno rešenje.</h2>
        </div>
        <div>
          <p>
            Ako je uzrok ventilacija, rešenje može biti poboljšanje izmene vazduha ili decentralizovana ventilacija sa rekuperacijom. Ako je uzrok zid, prodor vode ili instalacija, ventilator neće rešiti problem.
          </p>
          <p>
            Cilj je da pre radova znate šta zapravo treba uraditi i zbog čega.
          </p>
        </div>
      </section>

      <section className="section contact" id="kontakt">
        <div>
          <p className="eyebrow">Prvi korak</p>
          <h2>Pošaljite fotografije problema.</h2>
          <p>
            Dovoljno je nekoliko fotografija, grad, tip objekta i kratko objašnjenje kada se vlaga ili buđ pojavljuju. Ako fotografije nisu dovoljne, reći ćemo šta treba proveriti na licu mesta.
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
