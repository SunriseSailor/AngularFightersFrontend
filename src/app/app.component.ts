import { Component, OnInit } from '@angular/core';
import { JwksValidationHandler, OAuthService } from 'angular-oauth2-oidc';
import {authConfig} from './shared/guard/auth.config';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private oauthService: OAuthService) {

      this.configureWithNewConfigApi();
          }
      private configureWithNewConfigApi() {
          this.oauthService.configure(authConfig);
          this.oauthService.tokenValidationHandler = new JwksValidationHandler();
          this.oauthService.loadDiscoveryDocumentAndTryLogin();

          }
    ngOnInit() {
    }
}
