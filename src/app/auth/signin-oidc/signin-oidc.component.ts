import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-signin-oidc',
  templateUrl: './signin-oidc.component.html',
  styleUrl: './signin-oidc.component.css'
})
export class SigninOidcComponent implements OnInit{

  constructor(private oidcSecurityService: OidcSecurityService,
     private router: Router
  ) {}

  ngOnInit(): void {
     this.oidcSecurityService.checkAuth().subscribe(({ isAuthenticated }) => {
      if (isAuthenticated) {
        console.warn('Successful Authentication');
        this.router.navigate(['/home']);
      } else {
        console.warn('User not authenticated');
      }
    });
  }

}
