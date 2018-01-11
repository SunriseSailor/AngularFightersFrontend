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


    findById(id: string): Observable<FireEngine> {
        const url = 'http://localhost:8080/fireEngines';
        const params = new HttpParams()
            .set('id', id);
        const headers = new HttpHeaders()
            .set('Accept', 'application/json');
        return this.http.get<FireEngine>(url, {params, headers});
    }

    save(fireEngine: FireEngine): Observable<FireEngine> {
        let url = 'http://localhost:8080/fireEngines';
        let headers = new HttpHeaders().set('Accept', 'application/json');
        return this.http.post<FireEngine>(url, fireEngine, { headers });
    }

    deleteFireEngine(id:string): Observable<FireEngine> {
        let url = 'http://localhost:8080/fireEngines/'+id;
        let headers = new HttpHeaders().set('Accept', 'application/json');
        console.log('deleted');
        return this.http.delete<FireEngine>(url, { headers });
    }

}

