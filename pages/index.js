import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  function scrollToElement(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <>
      <main>
        <div className="mainImage">
          <h1>
            OBEZBEDITE SIGURNOST <br /> VAŠEG POSLOVANJA <br /> UZ NAŠU POMOĆ
          </h1>
          <div
            className="down-arrow"
            onClick={() => scrollToElement("services")}
          >
            <svg viewBox="0 0 24 24">
              <path d="M12 22L1 11l3-3 8 8 8-8 3 3-11 11z"></path>
            </svg>
          </div>
        </div>
        <div className="container">
          <div className="services" id="services">
            <h2 className="sectionTitle">USLUGE</h2>
            <span className="underline"></span>
            <div className="servicesGrid">
              {services.map((service) => (
                <div key={service.title} className="service paper">
                  <h3>{service.title}</h3>
                  <ul>
                    {service.items.map((item, index) => (
                      <li
                        className={service.bold && index == 0 ? "bolded" : ""}
                        key={index}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="reviews">
          <div className="item">
            <p className="big">40+</p>
            <p>klijenata pod ugovorom</p>
          </div>
          <div className="item bordered">
            <p className="big">500+</p>
            <p>izradjenih planova evakuacije</p>
          </div>
          <div className="item">
            <p className="big">900+</p>
            <p>izvršenih procena rizika</p>
          </div>
        </div>
        <div className="container">
          <div className="contact">
            <h2 className="sectionTitle">KONTAKT</h2>
            <span className="underline"></span>
          </div>
        </div>
      </main>
    </>
  );
}

const services = [
  {
    title: "ZAŠTITA OD POŽARA",
    bold: true,
    items: [
      "Izrada planova evakuacije sa obeležavanjem puteva evakuacije i mesta evakuacije",
      "Usluga ovlaštenog pravnog lica za poslove referenta iz oblasti zaštite od požara za pravna lica iz II i I kategorije ugroženosti.",
      "Izrada Pravila zaštite od požara",
      "Izrada planova zaštite od požara",
      "Obuka zaposlenih iz oblasti Zaštite od požara uz vođenje zakonom propisane evidencije (sl. Glasnik 111/09 i 20/15)",
      "Referent ZOP za pravna lica iz 2. i 3. Kategorije",
    ],
  },
  {
    title: "TEHNIČKA ISPITIVANJA",
    bold: true,
    items: [
      "Ispitivanje ispravnosti niskonaponskih električnih instalacija",
      "Ispitivanje ispravnosti gromobranskih instalacija",
      "Prethodno ispitivanje niskonaponskih elektro instalacija sa izdavanjem izveštaja koji je uslov za priključenje potrošača na javnu elektroenergetsku mrežu (zeleni karton).",
      "Ispitivanje ispravnosti protivpanične rasvete.",
      "Ispitivanje instalacija i opreme u protiveksplozionoj zaštiti (lakirnice, benzinske pumpe, rezervoari za TNG i sl.)",
      "Ispitivanje sistema za detekciju gasa.",
    ],
  },
  {
    title: "BEZBEDNOST I ZDRAVLJE NA RADU",
    bold: true,
    items: [
      "Izrada zakonom predviđene dokumentacije (Akt o proceni rizika)",
      "Stručne usluge lica za bezbednost i zdravlje na radu u svojstvu licenciranog pravnog lica.",
      "ispitivanje mikroklimatskih parametara na radnom mestu",
      "ispitivanje opreme za rad",
      "Obuka zaposlenih",
    ],
  },
  {
    title: "IZVOĐENJE RADOVA, PROJEKTOVANJE, TEHNIČKI  PRIJEM  I ODRŽAVANJE",
    items: [
      "Elektro instalacija niskog i srednjeg napona",
      "Gromobranskih instalacija",
      "Sistema za video nadzor",
      "Sistema za kontrolu pristupa",
      "Sistema za dojavu požara",
      "Sistema za detekciju gasa",
      "Protivpanične rasvete",
    ],
  },
  {
    title: "PROJEKTOVANJE IZ OBLASTI ZAŠTITE OD POŽARA",
    items: [
      "Izrada elaborata zaštite od požara.",
      "Izrada Glavnog projekta zaštite od požara.",
    ],
  },
  {
    title: "ORGANIZOVANJE STRUČNIH OBUKA",
    items: [
      "Rukovanje kotlovskim postrojenjima",
      "Rukovanje sudovima pod pritiskom",
      "Obuka zavarivača sa izdavanjem atesta",
      "Rukovanje gradilišnim mašinama",
      "Rukovanje viljuškarima",
    ],
  },
  {
    title: "ZAŠTITA ŽIVOTNE SREDINE",
    items: ["Usluga referenta za zaštitu životne sredine."],
  },
  {
    title: "VANREDNE SITUACIJE: KATASTROFE I UDESI",
    items: ["Izrada procene rizika", "Izrada plana zaštite i spašavanja"],
  },
  {
    title: "REVIZIJA I ISPITIVANJA TRAFOSTANICA",
    items: [
      "Revizija trafostanica",
      "Termovizijsko ispitivanje",
      "Ispitivanje trafoulja",
    ],
  },
];
