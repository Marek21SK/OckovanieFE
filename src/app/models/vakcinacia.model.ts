export class Vakcinacia{
  id: number;
  vakcinaId: string;
  osobaId: string;
  meno: string;
  priezvisko: string;
  zaockovanostDo: Date;
  nazovVakciny: String;
  pocetDavok: number;

  constructor(vakcinacia: Vakcinacia) {
    this.id = vakcinacia.id;
    this.vakcinaId = vakcinacia.vakcinaId;
    this.osobaId = vakcinacia.osobaId;
    this.meno = vakcinacia.meno;
    this.priezvisko = vakcinacia.priezvisko;
    this.zaockovanostDo = vakcinacia.zaockovanostDo;
    this.nazovVakciny = vakcinacia.nazovVakciny;
    this.pocetDavok = vakcinacia.pocetDavok;
  }
}
export class VakcinaciaZoznam{
  id: number;
  vakcinaId: string;
  osobaId: string;
  meno: string;
  priezvisko: string;
  zaockovanostDo: Date;
  nazovVakciny: String;
  pocetDavok: number;

  constructor(vakcinacia: VakcinaciaZoznam) {
    this.id = vakcinacia.id;
    this.vakcinaId = vakcinacia.vakcinaId;
    this.osobaId = vakcinacia.osobaId;
    this.meno = vakcinacia.meno;
    this.priezvisko = vakcinacia.priezvisko;
    this.zaockovanostDo = vakcinacia.zaockovanostDo;
    this.nazovVakciny = vakcinacia.nazovVakciny;
    this.pocetDavok = vakcinacia.pocetDavok;
  }
}
