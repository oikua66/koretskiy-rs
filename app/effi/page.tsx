import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'EFFI radijaciono grejanje | Koretskiy Serbia',
  description: 'Radijacioni sistemi grejanja EFFI za sportske, ugostiteljske, industrijske, logističke i druge objekte sa velikom zapreminom ili posebnim zahtevima za grejanje.',
};

const applications = [
  'Sportske sale i sportski centri',
  'Kafići, restorani i ugostiteljski prostori',
  'Industrijske hale i radionice',
  'Logistički i skladišni objekti',
  'Škole, javni i višenamenski prostori',
  'Visoki prostori gde klasično zagrevanje vazduha stvara velike gubitke',
];

const benefits = [
  {
    title: 'Toplota tamo gde je potrebna',
    text: 'Radijaciono grejanje prenosi toplotu direktno prema ljudima i površinama, umesto da se najveći deo energije prvo troši na zagrevanje vazduha ispod plafona.',
  },
  {
    title: 'Pogodno za visoke i velike prostore',
    text: 'Kod hala, sportskih sala i drugih visokih prostora može se smanjiti problem raslojavanja toplog vazduha i nepotrebnog pregrevanja gornjih zona.',
  },
  {
    title: 'Može da radi sa toplotnom pumpom',
    text: 'Sistem se može projektovati kao deo šireg rešenja sa toplotnom pumpom kao izvorom toplote, u zavisnosti od režima objekta i potrebnih temperatura vode.',
  },
];

export default function EffiPage() {
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
          <a href="#izbor">Kako biramo</a>
          <a href="#ponuda">Ponuda</a>
        </nav>
      </header>

      <section className="hero subpage-hero">
        <div className="hero-copy">
          <p className="eyebrow">EFFI · radijaciono grejanje</p>
          <h1>Grejanje velikih i visokih prostora bez nepotrebnog zagrevanja plafona.</h1>
          <p className="lead">
            Rešenje za sportske, ugostiteljske, industrijske, logističke i javne objekte gde je važno da se toplota usmeri prema zoni boravka ljudi.
          </p>
          <div className="hero-actions">
            <a className="button" href="#ponuda">Odaberite opremu i zatražite ponudu</a>
            <a className="button button-secondary" href="#primena">Gde se koristi</a>
          </div>
        </div>
      </section>

      <section className="section split" id="primena">
        <div>
          <p className="eyebrow">Primena</p>
          <h2>Za objekte gde klasično grejanje vazduha nije najbolje rešenje.</h2>
          <p>
            EFFI paneli su posebno zanimljivi u prostorima velike zapremine, sa visokim plafonima ili promenljivim režimom korišćenja, gde je važno brzo i ciljano obezbediti toplotni komfor.
          </p>
        </div>
        <ul className="service-list">
          {applications.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>

      <section className="section panel">
        <p className="eyebrow">Zašto radijaciono grejanje</p>
        <h2>Drugačiji način prenosa toplote.</h2>
        <div className="cards">
          {benefits.map((item) => (
            <article className="card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section split" id="izbor">
        <div>
          <p className="eyebrow">Izbor sistema</p>
          <h2>Paneli se biraju prema objektu, ne samo prema kvadraturi.</h2>
        </div>
        <div>
          <p>
            Za preliminarni izbor gledamo dimenzije i visinu prostora, namenu objekta, režim korišćenja, postojeći ili planirani izvor toplote, željenu temperaturu i mogućnosti montaže.
          </p>
          <p>
            Kod složenijih objekata EFFI se može kombinovati sa toplotnom pumpom i zasebnim sistemom ventilacije, uključujući rešenja za kontrolisano kretanje vazduha kada je to potrebno.
          </p>
        </div>
      </section>

      <section className="section contact" id="ponuda">
        <div>
          <p className="eyebrow">Preliminarni izbor i ponuda</p>
          <h2>Pošaljite podatke o objektu — predložićemo konfiguraciju i opremu.</h2>
          <p>
            Pošaljite lokaciju, namenu objekta, približne dimenzije, visinu, postojeći sistem grejanja i, ako imate, plan ili fotografije. Na osnovu toga možemo pripremiti preliminarni izbor EFFI panela i predlog rešenja za ponudu.
          </p>
        </div>
        <div className="contact-links">
          <a href="https://wa.me/381638421005">Pošaljite podatke na WhatsApp</a>
          <a href="mailto:consulting@koretskiy.com?subject=EFFI%20-%20zahtev%20za%20izbor%20opreme%20i%20ponudu">Zatražite ponudu emailom</a>
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
