import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from 'angular-auth-oidc-client';
import { environment } from '../environments/environment';
import { SigninOidcComponent } from './auth/signin-oidc/signin-oidc.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninOidcComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     AuthModule.forRoot({
      config: {
        authority: environment.auth.authority,
        redirectUrl: environment.auth.redirectUri,
        postLogoutRedirectUri: environment.auth.postLogoutRedirectUri,
        clientId: environment.auth.clientId,
        scope: environment.auth.scope,
        responseType: 'code',
        useRefreshToken: true,
        silentRenew: true,
        autoUserInfo: false 
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
