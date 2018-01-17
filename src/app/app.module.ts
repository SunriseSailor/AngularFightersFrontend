import {NgModule } from '@angular/core';
import {CommonModule } from '@angular/common';
import {BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule, HttpClient } from '@angular/common/http';
import {TranslateModule, TranslateLoader } from '@ngx-translate/core';
import {TranslateHttpLoader } from '@ngx-translate/http-loader';
import {AppRoutingModule } from './app-routing.module';
import {AppComponent } from './app.component';
import {AuthGuard } from './shared';
import {FormsModule} from '@angular/forms';
import {FireEngineService} from "./layout/fahrzeuge/fahrzeuge.service";
import {FireBrigadeService} from "./layout/feuerwehr/feuerwehr.service";
import {FireFighterService} from "./layout/mitarbeiter/mitarbeiter.service";
import {FireEngineAbbreviationService} from "./layout/fahrzeugbezeichnung/fahrzeugbezeichnung.service";
import {FireFighterStatusService} from "./layout/status/status.service";
import {RankService} from "./layout/dienstgrade/dienstgrade.service";


// AoT requires an exported function for factories
export function createTranslateLoader(http: HttpClient) {
    // for development
    // return new TranslateHttpLoader(http, '/start-angular/SB-Admin-BS4-Angular-5/master/dist/assets/i18n/', '.json');
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient]
            }
        }),
        AppRoutingModule
    ],
    declarations: [AppComponent],
    providers: [AuthGuard, RankService, FireEngineAbbreviationService, FireEngineService, FireBrigadeService, FireFighterService,  FireFighterStatusService],
    bootstrap: [AppComponent]
})
export class AppModule {}
