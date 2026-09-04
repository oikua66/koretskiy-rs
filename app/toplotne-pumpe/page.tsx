import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Toplotne pumpe i nestandardna rešenja | Koretskiy Serbia',
  description: 'Toplotne pumpe za kuće, stanove, poslovne i javne objekte, uključujući nestandardne energetske šeme i povrat otpadne toplote.',
};

const applications = [
  'Kuće i stanovi',
  'Poslovni i javni objekti',
  'Sportski objekti i svlačionice',
  'Ugostiteljski objekti',
  'Objekti sa velikom potrošnjom sanitarne tople vode',
  'Rekonstrukcije postojećih sistema grejanja i hlađenja',
];

const ideas = [
  {
    title: 'Dvorežimski sistem',
    text: 'Kada objekat ima različite režime rada tokom dana ili sezone, moguće je razmatrati sistem koji radi u dva različita temperaturna ili funkcionalna režima umesto jednog univerzalnog režima za sve potrebe.',
  },
  {
    title: 'Toplotna pumpa za tuševe sportskog objekta',
    text: 'Kod sportskih sala i centara značajan deo energije odlazi na pripremu sanitarne tople vode. Jedna od mogućih koncepcija je kombinovanje toplotne pumpe sa povratom toplote iz otpadne vode tuševa, kako bi se deo energije koji bi inače otišao u kanalizaciju ponovo iskoristio.',
  },
  {
    title: 'Kombinovanje više izvora toplote',
    text: 'U nekim objektima nema smisla forsirati jedan izvor za sve režime. Toplotna pumpa može raditi zajedno sa postojećim kotlom, električnim dogrevanjem, solarnim sistemom ili drugim izvorom, zavisno od potreba objekta.',
  },
];

export default function HeatPumpsPage() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="/" aria-label="Koretskiy Engineering Solutions Serbia">
          <img className="brand-logo" src="https://koretskiy.com/logo.svg" alt="Koretskiy Consulting" />
          <span className="brand-text">Engineering Solutions Serbia</span>
        </a>
        <nav>
          <a href="/">Početna</a>
          <a href="#primena">Primena</a>
          <a href="#nestandardno">Nestandardna rešenja</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
      </header>

      <section className="hero subpage-hero">
        <div className="hero-copy">
          <p className="eyebrow">Toplotne pumpe</p>
          <h1>Nije svaka toplotna pumpa isto rešenje za svaki objekat.</h1>
          <p className="lead">
            Toplotna pumpa može biti glavni izvor grejanja, deo kombinovanog sistema, izvor za hlađenje ili rešenje za pripremu sanitarne tople vode. Važno je kako se uklapa u ceo objekat.
          </p>
        </div>
      </section>

      <section className="section split" id="primena">
        <div>
          <p className="eyebrow">Gde ima smisla</p>
          <h2>Od kuće do sportskog ili poslovnog objekta.</h2>
          <p>
            Kod izbora nije dovoljno pogledati samo površinu objekta. Bitni su potrebna temperatura vode, postojeći sistem grejanja, režim rada, potrebe za hlađenjem i potrošnja sanitarne tople vode.
          </p>
        </div>
        <ul className="service-list">
          {applications.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>

      <section className="section panel" id="nestandardno">
        <p className="eyebrow">Nestandardna rešenja</p>
        <h2>Ponekad je važnija šema sistema nego sam uređaj.</h2>
        <div className="cards">
          {ideas.map((item) => (
            <article className="card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section split">
        <div>
          <p className="eyebrow">Pristup</p>
          <h2>Prvo definišemo režime rada objekta.</h2>
        </div>
        <div>
          <p>
            Za običnu kuću rešenje može biti relativno jednostavno. Kod sportskog, ugostiteljskog ili javnog objekta često treba odvojeno posmatrati grejanje prostora, hlađenje, ventilaciju i pripremu sanitarne tople vode.
          </p>
          <p>
            Zato na ovoj stranici za sada prikazujemo principe i moguće koncepcije, bez vezivanja za konkretnog proizvođača ili model opreme.
          </p>
        </div>
      </section>

      <section className="section contact" id="kontakt">
        <div>
          <p className="eyebrow">Kontakt</p>
          <h2>Imate objekat ili nestandardnu ideju?</h2>
          <p>
            Pošaljite kratak opis objekta i šta želite da rešite. Možemo razgovarati o mogućoj tehničkoj koncepciji pre nego što se uopšte bira konkretna oprema.
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
