export const environment = {
  production: false,

  auth: {
    authority: 'https://pbs-security-authserver-gybthph8g6hpf4c4.southafricanorth-01.azurewebsites.net',                   // Your auth server base URL
    clientId: 'b2f504f6ebd94655ac4a0df4bf05c35c',          // Your SPA Client ID
    redirectUri: 'http://localhost:4200/signin-oidc',      // Callback route in your Angular app
    postLogoutRedirectUri: 'http://localhost:4200',        // Where to go after logout
    scope: 'openid profile email roles offline_access',    // The scopes your server supports
    responseType: 'code',                                  // OIDC Authorization Code Flow + PKCE
  }
};
