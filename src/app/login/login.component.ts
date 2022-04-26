import { Component} from '@angular/core';
import { OAuthService} from "angular-oauth2-oidc";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  constructor(private router: Router, private oauthService:OAuthService) {}

  login(){
    this.oauthService.loadDiscoveryDocumentAndLogin();
  }

  logout(){
    this.oauthService.logOut();
  }

  chodSpat(): void{
    this.router.navigate(['']);
  }
}
