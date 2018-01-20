import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/toPromise';
import {Router} from "@angular/router";
import { FireEngineAbbreviation } from '../../entities/fireEngineAbbreviation';

@Injectable()
export class FireEngineAbbreviationService {
    constructor(private http: HttpClient, private router: Router) { }

    findAll(): Promise<FireEngineAbbreviation[]> {
        let url = 'https://localhost:8080/fireEngineAbbreviations?size=500';
        let headers = new HttpHeaders().set('Accept', 'application/json');
        return this.http.get<Array<FireEngineAbbreviation>>(url, {headers})
            .toPromise().then(fireEngineAbbreviations => fireEngineAbbreviations['_embedded']['fireEngineAbbreviations']);
    }
    findById(id: string): Observable<FireEngineAbbreviation> {
        const url = 'https://localhost:8080/fireEngineAbbreviations/' + id;
        const headers = new HttpHeaders()
            .set('Accept', 'application/json');
        return this.http.get<FireEngineAbbreviation>(url, {headers});
    }
    createFireEngineAbbreviation(fireEngineAbbreviation: FireEngineAbbreviation): Observable<FireEngineAbbreviation> {
        let url = 'https://localhost:8080/fireEngineAbbreviations';
        let headers = new HttpHeaders().set('Accept', 'application/json').set('Content-Type', 'application/json');
        return this.http.post<FireEngineAbbreviation>(url, fireEngineAbbreviation, { headers });
    }
    updateFireEngineAbbreviation(fireEngineAbbreviation: FireEngineAbbreviation): Observable<FireEngineAbbreviation> {
        let url = 'https://localhost:8080/fireEngineAbbreviations/' + fireEngineAbbreviation.id;
        let headers = new HttpHeaders().set('Accept', 'application/json');
        return this.http.put<FireEngineAbbreviation>(url, fireEngineAbbreviation, { headers });
    }
    deleteFireEngineAbbreviation(id: string): Observable<FireEngineAbbreviation> {
        let url = 'https://localhost:8080/fireEngineAbbreviations/' + id;
        let headers = new HttpHeaders().set('Accept', 'application/json');
        return this.http.delete<FireEngineAbbreviation>(url, { headers });
    }
}
