import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Vakcinacia, VakcinaciaZoznam} from "../models/vakcinacia.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";
import {OsobaZoznam} from "../models/osoba.model";
import {Vakcina} from "../models/vakcina.model";

@Component({
  selector: 'app-vakcinacia-formular',
  templateUrl: './vakcinacia-formular.component.html',
  styleUrls: ['./vakcinacia-formular.component.css']
})
export class VakcinaciaFormularComponent{

  @Input()
  set vakcinacia(data: Vakcinacia){
    if(data) {
      this.vyplnForm(data);
    }
  }
  private subscription: Subscription = new Subscription();

  @Input()
  vakcinacie: VakcinaciaZoznam[] = [];

  @Input()
  vakciny: Vakcina[] = []

  @Input()
  osoby: OsobaZoznam[] = [];

  @Output()
  pridajVakcinaciu = new EventEmitter<Vakcinacia>();

  form!: FormGroup;
  submitted = false;

  constructor(private router: Router) {
    this.vytvorForm();

  }
  private vytvorForm(): void{
    this.form = new FormGroup({
      id: new FormControl(null),
      vakcinaId: new FormControl(null, [Validators.required]),
      osobaId: new FormControl(null, Validators.required),
      meno: new FormControl(null, Validators.required),
      priezvisko: new FormControl(null, Validators.required),
      zaockovanostDo: new FormControl(null, Validators.required)
    });
  }

  private vyplnForm(vakcinacia: Vakcinacia): void{
    this.form.controls["id"].setValue(vakcinacia.id);
    this.form.controls["vakcinaId"].setValue(vakcinacia.vakcinaId);
    this.form.controls["osobaId"].setValue(vakcinacia.osobaId);
    this.form.controls["meno"].setValue(vakcinacia.meno);
    this.form.controls["priezvisko"].setValue(vakcinacia.priezvisko);
    this.form.controls["zaockovanostDo"].setValue(vakcinacia.zaockovanostDo);
  }

  public pridaj(): void {
    if (this.form.valid) {
      this.pridajVakcinaciu.emit(this.form.value);
      alert("Údaje vakcinácie boli zapísané do databázy")
      this.form.reset();
    }
  }
}
