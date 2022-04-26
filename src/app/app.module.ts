import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { OsobaFormularComponent } from './osoba-formular/osoba-formular.component';
import { OsobaStrankaComponent } from './osoba-stranka/osoba-stranka.component';
import { OsobaZoznamComponent } from './osoba-zoznam/osoba-zoznam.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { VakcinaFormularComponent } from './vakcina-formular/vakcina-formular.component';
import { VakcinaStrankaComponent } from './vakcina-stranka/vakcina-stranka.component';
import { VakcinaZoznamComponent } from './vakcina-zoznam/vakcina-zoznam.component';
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {InputTextModule} from "primeng/inputtext";
import {TooltipModule} from "primeng/tooltip";
import {PaginatorModule} from "primeng/paginator";
import {TableModule} from "primeng/table";
import {FooterComponent} from "./footer/footer.component";
import { NavbarComponent } from './navbar/navbar.component';
import { VakcinaciaFormularComponent } from './vakcinacia-formular/vakcinacia-formular.component';
import { VakcinaciaStrankaComponent } from './vakcinacia-stranka/vakcinacia-stranka.component';
import { VakcinaciaZoznamComponent } from './vakcinacia-zoznam/vakcinacia-zoznam.component';
import { LoginComponent } from './login/login.component';
import {NullValidationHandler, OAuthModule, OAuthService} from "angular-oauth2-oidc";
import {AuthInterceptor} from "../AuthInterceptor";
import {authCodeFlowConfig} from "../AuthConfig";


function init_app(oauthService: OAuthService) {
  return () => configureWithNewConfigApi(oauthService);
}

function configureWithNewConfigApi(oauthService: OAuthService) {
  oauthService.configure(authCodeFlowConfig);
  oauthService.tokenValidationHandler = new NullValidationHandler();
  oauthService.setupAutomaticSilentRefresh();
  oauthService.events.subscribe(e => { });
  return oauthService.loadDiscoveryDocumentAndTryLogin();
}

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    OsobaFormularComponent,
    OsobaStrankaComponent,
    OsobaZoznamComponent,
    VakcinaFormularComponent,
    VakcinaStrankaComponent,
    VakcinaZoznamComponent,
    FooterComponent,
    NavbarComponent,
    VakcinaciaFormularComponent,
    VakcinaciaStrankaComponent,
    VakcinaciaZoznamComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ButtonModule,
    RippleModule,
    InputTextModule,
    TooltipModule,
    PaginatorModule,
    TableModule,
    OAuthModule.forRoot()
  ],
  providers: [
    {
    provide: APP_INITIALIZER,
    useFactory: init_app,
    deps: [
      OAuthService
    ],
    multi: true
  },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
