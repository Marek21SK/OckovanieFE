import { Component, EventEmitter, Input, Output} from '@angular/core';
import {OsobaZoznam} from "../models/osoba.model";
import {VakcinaciaZoznam} from "../models/vakcinacia.model";

@Component({
  selector: 'app-vakcinacia-zoznam',
  templateUrl: './vakcinacia-zoznam.component.html',
  styleUrls: ['./vakcinacia-zoznam.component.css']
})
export class VakcinaciaZoznamComponent{

  constructor() {}

  @Input()
  osoby: OsobaZoznam[] = [];

  @Input()
  vakcinacie: VakcinaciaZoznam[] = []

  @Output()
  upravVakcinaciu: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  zmazVakcinaciu: EventEmitter<number> = new EventEmitter<number>();


  zmaz(vakcinaciaId: number): void{
    this.zmazVakcinaciu.emit(vakcinaciaId);
  }
}
