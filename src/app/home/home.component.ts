import { Component, OnInit } from '@angular/core';
import { OidcSecurityService,UserDataResult  } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  isAuthenticated = false;
  accessToken = '';
  idToken = '';
  userData: any = null;

  constructor(private oidcSecurityService: OidcSecurityService) {
  }
  ngOnInit(): void {
  this.oidcSecurityService.isAuthenticated().subscribe((isAuth: boolean) => {
    this.isAuthenticated = isAuth;

    if (isAuth) {
      this.loadTokens();
    }
  });
}

  login() {
    this.oidcSecurityService.authorize();
  }

  logout() {
    this.oidcSecurityService.logoff();
  }

  private loadTokens() {
    // Get Access Token
    this.oidcSecurityService.getAccessToken().subscribe(token => {
      this.accessToken = token ?? '';
    });

    // Get ID Token
    this.oidcSecurityService.getIdToken().subscribe(id => {
      this.idToken = id ?? '';
    });

  }

}
