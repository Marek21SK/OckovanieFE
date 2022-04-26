export class Osoba{
  id: number;
  meno: string;
  priezvisko: string;
  email: string;
  rodne_cislo: string;
  kontakt: string;
  pohlavie: string;
  bydlisko: string;
  nazovVakciny: string;
  pocet_davok: number;
  zaockovanostDo: Date;
  zaockovanostOd: Date;


  constructor(osoba: Osoba) {
    this.id = osoba.id;
    this.meno = osoba.meno;
    this.priezvisko = osoba.priezvisko;
    this.email = osoba.email;
    this.rodne_cislo = osoba.rodne_cislo;
    this.kontakt = osoba.kontakt;
    this.pohlavie = osoba.pohlavie;
    this.bydlisko = osoba.bydlisko;
    this.nazovVakciny = osoba.nazovVakciny;
    this.pocet_davok = osoba.pocet_davok;
    this.zaockovanostDo = osoba.zaockovanostDo;
    this.zaockovanostOd = osoba.zaockovanostOd;
  }
}
export class OsobaZoznam{
  id: number;
  meno: string;
  priezvisko: string;
  email: string;
  rodne_cislo: string;
  kontakt: string;
  pohlavie: string;
  bydlisko: string;
  nazovVakciny: string;
  pocet_davok: number;
  zaockovanostDo: Date;
  zaockovanostOd: Date;

  constructor(osoba: OsobaZoznam) {
    this.id = osoba.id;
    this.meno = osoba.meno;
    this.priezvisko = osoba.priezvisko;
    this.email = osoba.email;
    this.rodne_cislo = osoba.rodne_cislo;
    this.kontakt = osoba.kontakt;
    this.pohlavie = osoba.pohlavie;
    this.bydlisko = osoba.bydlisko;
    this.nazovVakciny = osoba.nazovVakciny;
    this.pocet_davok = osoba.pocet_davok;
    this.zaockovanostDo = osoba.zaockovanostDo;
    this.zaockovanostOd = osoba.zaockovanostOd;
  }
}
