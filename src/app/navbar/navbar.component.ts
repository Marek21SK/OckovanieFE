import { Component} from '@angular/core';
import {Router} from "@angular/router";

enum MENU {LOGIN}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{

  menu = MENU;

  constructor(private router: Router) { }

  nastaMenu(m: MENU){
    if (m == MENU.LOGIN){
      this.router.navigate(["/prihlasenie"])
    }
  }
}
