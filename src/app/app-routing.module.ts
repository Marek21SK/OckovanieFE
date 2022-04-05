import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {OsobaStrankaComponent} from "./osoba-stranka/osoba-stranka.component";
import {MenuComponent} from "./menu/menu.component";
import {VakcinaStrankaComponent} from "./vakcina-stranka/vakcina-stranka.component";


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
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{
}
