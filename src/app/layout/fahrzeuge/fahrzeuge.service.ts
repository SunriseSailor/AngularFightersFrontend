import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {FireEngine} from "../../entities/fireEngine";
import 'rxjs/add/operator/toPromise';
import {FireBrigade} from "../../entities/fireBrigade";
import {FireEngineAbbreviation} from "../../entities/fireEngineAbbreviation";

@Injectable()
export class FireEngineService {
    constructor(private http: HttpClient) {
    }

    findAll(): Promise<FireEngine[]> {
        let url = 'http://localhost:8080/fireEngines?projection=all';
        let headers = new HttpHeaders().set('Accept', 'application/json');
        return this.http.get<Array<FireEngine>>(url, {headers}).toPromise().then(fireEngines => fireEngines['_embedded']['fireEngines'])
    }

    findAllFireBrigades(): Promise<FireBrigade[]> {
        let url = 'http://localhost:8080/fireBrigades';
        let headers = new HttpHeaders().set('Accept', 'application/json');
        return this.http.get<Array<FireBrigade>>(url, {headers}).toPromise().then(fireBrigades => fireBrigades['_embedded']['fireBrigades'])
    }

    findAllFireEngineAbbreviations(): Promise<FireEngineAbbreviation[]> {
        let url = 'http://localhost:8080/fireEngineAbbreviations?size=41';
        let headers = new HttpHeaders().set('Accept', 'application/json');
        return this.http.get<Array<FireEngineAbbreviation>>(url, {headers}).toPromise().then(fireEngineAbbreviations => fireEngineAbbreviations['_embedded']['fireEngineAbbreviations'])
    }


    findById(id: string): Observable<FireEngine> {
        const url = 'http://localhost:8080/fireEngines/'+id+'?projection=all';
        const headers = new HttpHeaders()
            .set('Accept', 'application/json');
        return this.http.get<FireEngine>(url, {headers});
    }

    createFireEngine(fireEngine: FireEngine): Observable<FireEngine> {
        let url = 'http://localhost:8080/fireEngines';
        let headers = new HttpHeaders().set('Accept', 'application/json');
        return this.http.post<FireEngine>(url, fireEngine, { headers });
    }

    updateFireEngine(fireEngine: FireEngine): Observable<FireEngine> {
        let url = 'http://localhost:8080/fireEngines/'+fireEngine.id;
        let headers = new HttpHeaders().set('Accept', 'application/json');
        this.updateFireEngineAbbreviation(fireEngine).subscribe(
            abbreviation => {
                fireEngine.abbreviation = abbreviation;
                console.log("Abbreviation was changed");
            },
            err => {
                console.log("Abbreviation was not changed")
            }
        );
        fireEngine.abbreviation = null;

        this.updateFireEngineFireBrigade(fireEngine).subscribe(
            fireBrigade => {
                fireEngine.fireBrigade = fireBrigade;
                console.log("FireBrigade was changed");
            },
            err => {
                console.log("FireBrigade was not changed" )
            }
        );

        fireEngine.fireBrigade = null;

        return this.http.put<FireEngine>(url, fireEngine, { headers });

        
    }
    updateFireEngineFireBrigade(fireEngine: FireEngine): Observable<FireBrigade> {
        let url = 'http://localhost:8080/fireEngines/'+fireEngine.id+'/fireBrigade';
        let headers = new HttpHeaders().set('Content-Type', 'text/uri-list');
        let changeUrl = 'http://localhost:8080/fireBrigades/'+ fireEngine.fireBrigade.id;
        return this.http.put<FireBrigade>(url, changeUrl, { headers });
    }

    updateFireEngineAbbreviation(fireEngine: FireEngine): Observable<FireEngineAbbreviation> {
        let url = 'http://localhost:8080/fireEngines/'+fireEngine.id+'/abbreviation';
        let headers = new HttpHeaders().set('Content-Type', 'text/uri-list');
        let changeUrl = 'http://localhost:8080/fireEngineAbbreviations/'+ fireEngine.abbreviation.id
        return this.http.put<FireEngineAbbreviation>(url, changeUrl, { headers });
    }


    deleteFireEngine(id:string): Observable<FireEngine> {
        let url = 'http://localhost:8080/fireEngines/'+id;
        let headers = new HttpHeaders().set('Accept', 'application/json');
        return this.http.delete<FireEngine>(url, { headers });
    }

}

