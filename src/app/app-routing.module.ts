import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {OsobaStrankaComponent} from "./osoba-stranka/osoba-stranka.component";
import {MenuComponent} from "./menu/menu.component";
import {VakcinaStrankaComponent} from "./vakcina-stranka/vakcina-stranka.component";
import {VakcinaciaStrankaComponent} from "./vakcinacia-stranka/vakcinacia-stranka.component";
import {LoginComponent} from "./login/login.component";


const routes: Routes =[
  {
    path: 'osoba',
    component: OsobaStrankaComponent
  },
  {
    path: 'vakcina',
    component:VakcinaStrankaComponent
  },
  {
    path: '',
    component: MenuComponent
  },
  {
    path: 'vakcinacia',
    component: VakcinaciaStrankaComponent
  },
  {
    path: 'prihlasenie',
    component: LoginComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{
}
