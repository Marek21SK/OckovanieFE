import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Osoba} from "../models/osoba.model";
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {OsobaService} from "../../osoba.service";

@Component({
  selector: 'app-osoba-formular',
  templateUrl: './osoba-formular.component.html',
  styleUrls: ['./osoba-formular.component.css']
})
export class OsobaFormularComponent{

  @Input()
  set osoba(data: Osoba | undefined){
    if (data){
      this.vyplnForm(data);
    }
  }

  @Output()
  pridajOsobu = new EventEmitter<Osoba>();

  @Output()
  upravOsobu = new EventEmitter<Osoba>();

  @Output()
  zmazOsobu = new EventEmitter<Osoba>();

  form!: FormGroup;
  emailRegex = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';

  constructor(private osobaService: OsobaService) {
    this.vytvorForm();
  }

  private vytvorForm(): void {
    this.form = new FormGroup({
      id: new FormControl(null),
      meno: new FormControl(null, Validators.required),
      priezvisko: new FormControl(null, Validators.required),
      email: new FormControl('',{
        validators: [Validators.required,Validators.pattern(this.emailRegex)], updateOn: 'blur',
      }),
      rodne_cislo: new FormControl(null, Validators.required),
      kontakt: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      pohlavie: new FormControl(null),
      bydlisko: new FormControl(null, Validators.required)
    });
  }

  get validator(){
    return true;
  }

  private vyplnForm(osoba: Osoba): void{
    this.form.controls["id"].setValue(osoba.id);
    this.form.controls["meno"].setValue(osoba.meno);
    this.form.controls["priezvisko"].setValue(osoba.priezvisko);
    this.form.controls["email"].setValue(osoba.email);
    this.form.controls["rodne_cislo"].setValue(osoba.rodne_cislo);
    this.form.controls["kontakt"].setValue(osoba.kontakt);
    this.form.controls["pohlavie"].setValue(osoba.pohlavie);
    this.form.controls["bydlisko"].setValue(osoba.bydlisko);
  }

  public pridaj(): void{
    if (this.form.valid){
      this.pridajOsobu.emit(this.form.value);
      this.form.reset();
      alert("Udaje osoby boli zapísané do databázy")
    }
  }
/**
  public uprav(): void {
    this.upravOsobu.emit(this.form.value);
    this.form.reset();
  }

  public zrus(): void{
    this.form.reset();
  }
 */
}
