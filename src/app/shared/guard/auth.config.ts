import { AuthConfig } from 'angular-oauth2-oidc';

    export const authConfig: AuthConfig = {
      issuer: 'https://localhost:8081/login',
      redirectUri: window.location.origin + '/index.html',
      clientId: 'firefighterClient',
      scope: 'read write'
        }
