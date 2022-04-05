export class Osoba{
  id: number;
  meno: string;
  priezvisko: string;
  email: string;
  rodne_cislo: string;
  kontakt: string;
  pohlavie: string;
  bydlisko: string;


  constructor(osoba: Osoba) {
    this.id = osoba.id;
    this.meno = osoba.meno;
    this.priezvisko = osoba.priezvisko;
    this.email = osoba.email;
    this.rodne_cislo = osoba.rodne_cislo;
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
  rodne_cislo: string;
  kontakt: string;
  pohlavie: string;
  bydlisko: string;

  constructor(osoba: OsobaZoznam) {
    this.id = osoba.id;
    this.meno = osoba.meno;
    this.priezvisko = osoba.priezvisko;
    this.email = osoba.email;
    this.rodne_cislo = osoba.rodne_cislo;
    this.kontakt = osoba.kontakt;
    this.pohlavie = osoba.pohlavie;
    this.bydlisko = osoba.bydlisko;
  }
}
