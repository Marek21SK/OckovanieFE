import { Component} from '@angular/core';
import {Router} from "@angular/router";

enum MENU {OSOBY}
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  menu = MENU;

  constructor(private router: Router) { }

  nastaMenu(m: MENU){
    if (m == MENU.OSOBY){
      this.router.navigate(["/osoba"]);
    }
  }
}
