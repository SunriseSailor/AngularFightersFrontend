import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { OAuthService } from 'angular-oauth2-oidc';
import {AppService} from "../app.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    public isLoggedIn = false;

    constructor(public router: Router,private appService: AppService) {}

    ngOnInit() {
        this.isLoggedIn = this.appService.isLoggedIn();
    }

    onLoggedin() {
        this.appService.obtainAccessToken();
        localStorage.setItem('isLoggedin', 'true');
    }
}
