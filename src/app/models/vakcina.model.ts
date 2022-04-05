export class Vakcina{
  id: number;
  nazov: string;
  vyrobca: string;
  pocet_davok: string;
  trvacnost: string

  constructor(vakcina: Vakcina) {
    this.id = vakcina.id;
    this.nazov = vakcina.nazov;
    this.vyrobca = vakcina.vyrobca;
    this.pocet_davok = vakcina.pocet_davok;
    this.trvacnost = vakcina.trvacnost;
  }
}

export class VakcinaZoznam{
  id: number;
  nazov: string;
  vyrobca: string;
  pocet_davok: string;
  trvacnost: string;

  constructor(vakcina: VakcinaZoznam) {
    this.id = vakcina.id;
    this.nazov = vakcina.nazov;
    this.vyrobca = vakcina.vyrobca;
    this.pocet_davok = vakcina.pocet_davok;
    this.trvacnost = vakcina.trvacnost;
  }
}
