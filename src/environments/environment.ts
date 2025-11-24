export const environment = {
  production: false,

  auth: {
    authority: 'https://localhost:7040',                   // Your auth server base URL
    clientId: 'ed11c369fa1e49278d03caa1ab4dff1f',          // Your SPA Client ID
    redirectUri: 'http://localhost:4200/signin-oidc',      // Callback route in your Angular app
    postLogoutRedirectUri: 'http://localhost:4200',        // Where to go after logout
    scope: 'openid profile email roles offline_access',    // The scopes your server supports
    responseType: 'code',                                  // OIDC Authorization Code Flow + PKCE
  }
};
