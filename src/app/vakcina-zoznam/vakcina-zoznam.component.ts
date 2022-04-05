import {Component, EventEmitter, Input, Output} from '@angular/core';
import {VakcinaZoznam} from "../models/vakcina.model";

@Component({
  selector: 'app-vakcina-zoznam',
  templateUrl: './vakcina-zoznam.component.html',
  styleUrls: ['./vakcina-zoznam.component.css']
})
export class VakcinaZoznamComponent{

  @Input()
  vakciny: VakcinaZoznam[] = []

  @Output()
  upravVakcinu: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  zmazVakcinu: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  /**
   uprav(osobaId: number): void{
    this.upravOsobu.emit(osobaId);
  }
   zmaz(osobaId: number): void{
    this.zmazOsobu.emit(osobaId);
  }
   */
}
