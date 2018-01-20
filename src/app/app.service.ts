import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import { OAuthService } from 'angular-oauth2-oidc';
@Injectable()
export class AppService {

    constructor(
        private _router: Router, private oauthService: OAuthService){
        this.oauthService.loginUrl = 'https://localhost:8081/oauth/authorize';
        this.oauthService.redirectUri = 'http://localhost:4200/';
        this.oauthService.clientId = "firefighterClient";
        this.oauthService.scope = "read write";
        this.oauthService.oidc = false;
        this.oauthService.setStorage(sessionStorage);
        this.oauthService.tryLogin({});
    }


    obtainAccessToken(){
        this.oauthService.initImplicitFlow();
    }

    isLoggedIn(){
        if (this.oauthService.getAccessToken() === null){
            return false;
        }
        return true;
    }

    logout() {
        this.oauthService.logOut();
        location.reload();
    }
}
