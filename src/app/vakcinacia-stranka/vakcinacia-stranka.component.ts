import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {OsobaZoznam} from "../models/osoba.model";
import {Vakcina} from "../models/vakcina.model";
import {Vakcinacia, VakcinaciaZoznam} from "../models/vakcinacia.model";
import {Subscription} from "rxjs";
import {OsobaService} from "../../osoba.service";
import {VakcinaService} from "../../vakcina.service";
import {VakcinaciaService} from "../../vakcinacia.service";

@Component({
  selector: 'app-vakcinacia-stranka',
  templateUrl: './vakcinacia-stranka.component.html',
  styleUrls: ['./vakcinacia-stranka.component.css']
})
export class VakcinaciaStrankaComponent implements OnInit, OnDestroy {

  osoby: OsobaZoznam [] = [];
  vakciny: Vakcina[] = [];
  vakcinacie: VakcinaciaZoznam[] = [];

  private subscription: Subscription = new Subscription();

  constructor(private router: Router, private vakcinaciaService: VakcinaciaService, private osobaService: OsobaService, private vakcinaService: VakcinaService){}
  ngOnInit(): void {
    this.refreshVakcinacii();
    this.refreshOsob();
    this.refreshVakcin();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  refreshVakcinacii(): void{
    this.subscription.add(this.vakcinaciaService.getVakcinacie().subscribe(data =>{
      console.log('Prislo:', data);
      this.vakcinacie = data;
    }));
  }

  refreshVakcin(): void{
    this.subscription.add(this.vakcinaService.getVakciny().subscribe(data =>{
      console.log('Prislo:', data);
      this.vakciny=data;
    }));
  }

  refreshOsob(): void{
    this.subscription.add(this.osobaService.getOsoby().subscribe(data =>{
      console.log('Prislo:', data);
      this.osoby = data;
    }));
  }

  pridaj(vakcinacia: Vakcinacia): void{
    this.subscription.add(this.vakcinaciaService.createVakcinacia(vakcinacia).subscribe(data =>{
      console.log('Prislo:', data);
      this.refreshVakcinacii();
    }));
  }

  zmazVakcinaciuZoZoznamu(vakcinaciaId: number): void{
    if (confirm('Naozaj?')){
      this.subscription.add(this.vakcinaciaService.deleteVakcinacia(vakcinaciaId).subscribe(data =>{
        this.refreshVakcinacii();
      }));
    }
  }

  chodSpat(): void{
    this.router.navigate(['']);
  }
}
