import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/toPromise';
import {Router} from "@angular/router";
import { FireFighterStatus } from '../../entities/fireFighterStatus';

@Injectable()
export class FireFighterStatusService{
    constructor(private http: HttpClient, private router: Router) { }

    findAll(): Promise<FireFighterStatus[]> {
        let url = 'http://localhost:8080/fireFighterStatuses?size=500';
        let headers = new HttpHeaders().set('Accept', 'application/json');
        return this.http.get<Array<FireFighterStatus>>(url, {headers})
            .toPromise().then(fireFighterStatuses => fireFighterStatuses['_embedded']['fireFighterStatuses']);
    }
    findById(id: string): Observable<FireFighterStatus> {
        const url = 'http://localhost:8080/fireFighterStatuses/' + id;
        const headers = new HttpHeaders()
            .set('Accept', 'application/json');
        return this.http.get<FireFighterStatus>(url, {headers});
    }
    createFireFighterStatus(fireFighterStatus: FireFighterStatus): Observable<FireFighterStatus> {
        let url = 'http://localhost:8080/fireFighterStatuses';
        let headers = new HttpHeaders().set('Accept', 'application/json').set('Content-Type', 'application/json');
        return this.http.post<FireFighterStatus>(url, fireFighterStatus, { headers });
    }
    updateFireFighterStatus(fireFighterStatus: FireFighterStatus): Observable<FireFighterStatus> {
        let url = 'http://localhost:8080/fireFighterStatuses/' + fireFighterStatus.id;
        let headers = new HttpHeaders().set('Accept', 'application/json');
        return this.http.put<FireFighterStatus>(url, fireFighterStatus, { headers });
    }
    deleteFireFighterStatus(id:string): Observable<FireFighterStatus> {
        let url = 'http://localhost:8080/fireFighterStatuses/'+id;
        let headers = new HttpHeaders().set('Accept', 'application/json');
        return this.http.delete<FireFighterStatus>(url, { headers });
    }
}
