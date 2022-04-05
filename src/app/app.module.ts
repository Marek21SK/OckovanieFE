import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { OsobaFormularComponent } from './osoba-formular/osoba-formular.component';
import { OsobaStrankaComponent } from './osoba-stranka/osoba-stranka.component';
import { OsobaZoznamComponent } from './osoba-zoznam/osoba-zoznam.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { VakcinaFormularComponent } from './vakcina-formular/vakcina-formular.component';
import { VakcinaStrankaComponent } from './vakcina-stranka/vakcina-stranka.component';
import { VakcinaZoznamComponent } from './vakcina-zoznam/vakcina-zoznam.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    OsobaFormularComponent,
    OsobaStrankaComponent,
    OsobaZoznamComponent,
    VakcinaFormularComponent,
    VakcinaStrankaComponent,
    VakcinaZoznamComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
