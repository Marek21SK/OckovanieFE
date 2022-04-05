import { Component, OnInit, OnDestroy } from '@angular/core';
import {Vakcina, VakcinaZoznam} from "../models/vakcina.model";
import {Router} from "@angular/router";
import {VakcinaService} from "../../vakcina.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-vakcina-stranka',
  templateUrl: './vakcina-stranka.component.html',
  styleUrls: ['./vakcina-stranka.component.css']
})
export class VakcinaStrankaComponent implements OnInit, OnDestroy {

  vakciny: VakcinaZoznam[] = [];

  vakcinaNaUpravu?: Vakcina;

  private subscription: Subscription = new Subscription();

  constructor(private router: Router, private vakcinaService: VakcinaService) { }
  ngOnInit(): void{
    this.refreshVakcin();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  refreshVakcin(): void{
    this.subscription.add(this.vakcinaService.getVakciny().subscribe(data =>{
      console.log('prislo:', data);
      this.vakciny = data;
    }));
  }

  chodSpat(): void{
    this.router.navigate(['']);
  }

  pridaj(vakcina: Vakcina): void{
    this.subscription.add(this.vakcinaService.createVakcina(vakcina).subscribe(data => {
      console.log('prislo', data);
      this.refreshVakcin()
    }));
  }

  uprav(vakcina: Vakcina): void{
    if (vakcina.id !== undefined) {
      this.subscription.add(this.vakcinaService.updateVakcina(vakcina.id, vakcina).subscribe(data => {
        console.log('prislo', data);
        this.refreshVakcin()
      }));
    }
  }

  upravVakcinuZoZoznamu(vakcinaId: number): void{
    this.subscription.add(this.vakcinaService.getVakcina(vakcinaId).subscribe(data => {
      console.log('prislo', data);
      this.vakcinaNaUpravu = data;
    }));
  }

  zmazVakcinuZoZoznamu(vakcinaId: number): void {
    if (confirm('Naozaj chcete zmazat?')){
      this.subscription.add(this.vakcinaService.deleteVakcina(vakcinaId).subscribe(data => {
        this.refreshVakcin();
      }));
    }
  }
}
