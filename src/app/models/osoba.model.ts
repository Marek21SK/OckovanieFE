export class Osoba{
  id: number;
  meno: string;
  priezvisko: string;
  email: string;
  datum_narodenia: Date;
  kontakt: string;
  pohlavie: string;
  bydlisko: string;


  constructor(osoba: Osoba) {
    this.id = osoba.id;
    this.meno = osoba.meno;
    this.priezvisko = osoba.priezvisko;
    this.email = osoba.email;
    this.datum_narodenia = osoba.datum_narodenia;
    this.kontakt = osoba.kontakt;
    this.pohlavie = osoba.pohlavie;
    this.bydlisko = osoba.bydlisko;
  }
}
export class OsobaZoznam{
  id: number;
  meno: string;
  priezvisko: string;
  email: string;
  datum_narodenia: Date;
  kontakt: string;
  pohlavie: string;
  bydlisko: string;

  constructor(osoba: OsobaZoznam) {
    this.id = osoba.id;
    this.meno = osoba.meno;
    this.priezvisko = osoba.priezvisko;
    this.email = osoba.email;
    this.datum_narodenia = osoba.datum_narodenia;
    this.kontakt = osoba.kontakt;
    this.pohlavie = osoba.pohlavie;
    this.bydlisko = osoba.bydlisko;
  }
}
