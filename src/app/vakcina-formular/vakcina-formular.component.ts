import { Component, EventEmitter, Input, Output } from '@angular/core';
import {Vakcina} from "../models/vakcina.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {VakcinaService} from "../../vakcina.service";

@Component({
  selector: 'app-vakcina-formular',
  templateUrl: './vakcina-formular.component.html',
  styleUrls: ['./vakcina-formular.component.css']
})
export class VakcinaFormularComponent{

  @Input()
  set vakcina(data: Vakcina | undefined){
    if (data){
      this.vyplnForm(data);
    }
  }

  @Output()
  pridajVakcinu = new EventEmitter<Vakcina>();

  @Output()
  upravVakcinu = new EventEmitter<Vakcina>();

  @Output()
  zmazVakcinu = new EventEmitter<Vakcina>();

  form!: FormGroup;

  constructor(private vakcinaService: VakcinaService) {
    this.vytvorForm();
  }

  private vytvorForm(): void {
    this.form = new FormGroup({
      id: new FormControl(null),
      nazov: new FormControl(null, Validators.required),
      vyrobca: new FormControl(null, Validators.required),
      pocet_davok: new FormControl(null, Validators.required),
      trvacnost: new FormControl(null, Validators.required),
    });
  }

  get validator(){
    return true;
  }

  private vyplnForm(vakcina: Vakcina): void{
    this.form.controls["id"].setValue(vakcina.id);
    this.form.controls["nazov"].setValue(vakcina.nazov);
    this.form.controls["vyrobca"].setValue(vakcina.vyrobca);
    this.form.controls["pocet_davok"].setValue(vakcina.pocet_davok);
    this.form.controls["trvacnost"].setValue(vakcina.trvacnost);
  }

  public pridaj(): void{
    if (this.form.valid){
      this.pridajVakcinu.emit(this.form.value);
      this.form.reset();
      alert("Udaje vakcíny boli zapísané do databázy")
    }
  }
  /**
   * Funkčné pridávanie
   public uprav(): void {
    this.upravVakcinu.emit(this.form.value);
    this.form.reset();
  }
   public zrus(): void{
    this.form.reset();
  }
   */
}
