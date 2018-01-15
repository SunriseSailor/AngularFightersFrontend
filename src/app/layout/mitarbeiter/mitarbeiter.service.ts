import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {FireFighter} from "../../entities/fireFighter";
import 'rxjs/add/operator/toPromise';
import {FireBrigade} from "../../entities/fireBrigade";
import {Router} from "@angular/router";

@Injectable()
export class FireFighterService {
    constructor(private http: HttpClient, private router: Router) {
    }

    findAll(): Promise<FireFighter[]> {
        let url = 'http://localhost:8080/fireFighters?projection=all&size=100';
        let headers = new HttpHeaders().set('Accept', 'application/json');
        return this.http.get<Array<FireFighter>>(url, {headers}).toPromise().then(fireFighters => fireFighters['_embedded']['fireFighters'])
    }

    findAllFireFighters(): Promise<FireFighter[]> {
        let url = 'http://localhost:8080/fireFighters';
        let headers = new HttpHeaders().set('Accept', 'application/json');
        return this.http.get<Array<FireFighter>>(url, {headers}).toPromise().then(fireFighters => fireFighters['_embedded']['fireFighters'])
    }

    findById(id: string): Observable<FireFighter> {
        const url = 'http://localhost:8080/fireFighters/'+id+'?projection=all';
        const headers = new HttpHeaders()
            .set('Accept', 'application/json');
        return this.http.get<FireFighter>(url, {headers});
    }

    createFireFighter(fireFighter: FireFighter): Observable<FireFighter> {
        let url = 'http://localhost:8080/fireFighters';
        let headers = new HttpHeaders().set('Accept', 'application/json').set('Content-Type', 'application/json');
        return this.http.post<FireFighter>(url, fireFighter, { headers });
    }

    updateFireFighter(fireFighter: FireFighter): Observable<FireFighter> {
        let url = 'http://localhost:8080/fireFighters/'+fireFighter.id;
        let headers = new HttpHeaders().set('Accept', 'application/json');
        fireFighter.fireBrigade = null;
        return this.http.put<FireFighter>(url, fireFighter, { headers });

    }

    deleteFireFighter(id:string): Observable<FireFighter> {
        let url = 'http://localhost:8080/fireFighters/'+id;
        let headers = new HttpHeaders().set('Accept', 'application/json');
        return this.http.delete<FireFighter>(url, { headers });
    }

}

