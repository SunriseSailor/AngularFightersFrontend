import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class StatistikService {

    constructor(private http: HttpClient, private router: Router) { }

    countByGenderM(): Observable<number> {
        const url = 'https://localhost:8080/fireFighters/search/countByGender?gender=m';
        const headers = new HttpHeaders().set('Accept', 'application/json');
        return this.http.get<number>(url, {headers});
    }

    countByGenderW(): Observable<number> {
        const url = 'https://localhost:8080/fireFighters/search/countByGender?gender=w';
        const headers = new HttpHeaders().set('Accept', 'application/json');
        return this.http.get<number>(url, {headers});
    }

    countByStatusActive(): Observable<number> {
        const url = 'https://localhost:8080/fireFighters/search/countByFireFighterStatus_Description?status=aktiv';
        const headers = new HttpHeaders().set('Accept', 'application/json');
        return this.http.get<number>(url, {headers});
    }

    countByStatusYouth(): Observable<number> {
        const url = 'https://localhost:8080/fireFighters/search/countByFireFighterStatus_Description?status=jugend';
        const headers = new HttpHeaders().set('Accept', 'application/json');
        return this.http.get<number>(url, {headers});
    }

    countByStatusReserve(): Observable<number> {
        const url = 'https://localhost:8080/fireFighters/search/countByFireFighterStatus_Description?status=reserve';
        const headers = new HttpHeaders().set('Accept', 'application/json');
        return this.http.get<number>(url, {headers});
    }

}
