import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Injectable()
export class AuthService {

    constructor(private oauthService: OAuthService) {

    }

    // userName: string;
    get userName(): string {
        let claims = this.oauthService.getIdentityClaims();
        if (!claims) return null;
        console.debug('id_token', this.oauthService.getIdToken());
        return claims['given_name'];
    }

}
