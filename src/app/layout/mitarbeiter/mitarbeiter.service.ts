import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {FireFighter} from "../../entities/fireFighter";
import 'rxjs/add/operator/toPromise';
import {Router} from "@angular/router";
import {FireBrigade} from "../../entities/fireBrigade";

@Injectable()
export class FireFighterService {
    constructor(private http: HttpClient, private router: Router) {
    }

    findAll(): Promise<FireFighter[]> {
        let url = 'http://localhost:8080/fireFighters?projection=all&size=200';
        let headers = new HttpHeaders().set('Accept', 'application/json');
        return this.http.get<Array<FireFighter>>(url, {headers}).toPromise().then(fireFighters => fireFighters['_embedded']['fireFighters'])
    }

    findAllFireBrigades(): Promise<FireBrigade[]> {
        let url = 'http://localhost:8080/fireBrigades';
        let headers = new HttpHeaders().set('Accept', 'application/json');
        return this.http.get<Array<FireBrigade>>(url, {headers}).toPromise().then(fireBrigades => fireBrigades['_embedded']['fireBrigades'])
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

    updateFireFighterFireBrigade(fireFighter: FireFighter): Observable<FireBrigade> {
        let url = 'http://localhost:8080/fireFighters/'+fireFighter.id+'/fireBrigade';
        let headers = new HttpHeaders().set('Content-Type', 'text/uri-list');
        let changeUrl = 'http://localhost:8080/fireBrigades/'+ fireFighter.fireBrigade.id;
        return this.http.put<FireBrigade>(url, changeUrl, { headers });
    }

    deleteFireFighter(id:string): Observable<FireFighter> {
        let url = 'http://localhost:8080/fireFighters/'+id;
        let headers = new HttpHeaders().set('Accept', 'application/json');
        return this.http.delete<FireFighter>(url, { headers });
    }

}

