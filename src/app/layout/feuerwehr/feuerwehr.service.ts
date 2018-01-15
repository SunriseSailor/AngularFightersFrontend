import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import { FireBrigade } from '../../entities/fireBrigade';
import { Router } from '@angular/router';

@Injectable()
export class FireBrigadeService {

    constructor(private http: HttpClient, private router: Router) { }

    findAll(): Promise<FireBrigade[]> {
        let url = 'http://localhost:8080/fireBrigades?projection=all&size=100';
        let headers = new HttpHeaders().set('Accept', 'application/json');
        return this.http.get<Array<FireBrigade>>(url, {headers})
            .toPromise().then(fireBrigades => fireBrigades['_embedded']['fireBrigades']);
    }

    findById(id: string): Observable<FireBrigade> {
        const url = 'http://localhost:8080/fireBrigades/' + id + '?projection=all';
        const headers = new HttpHeaders()
            .set('Accept', 'application/json');
        return this.http.get<FireBrigade>(url, {headers});
    }

    createFireBrigade(fireBrigade: FireBrigade): Observable<FireBrigade> {
        let url = 'http://localhost:8080/fireBrigades';
        let headers = new HttpHeaders().set('Accept', 'application/json').set('Content-Type', 'application/json');
        return this.http.post<FireBrigade>(url, fireBrigade, { headers });
    }
/*
    fullCreate(fireBrigade: FireBrigade): void {
        this.createFireBrigade(fireBrigade).subscribe(
            fireBrigadeNew => {
                let fireBrigadeId = fireBrigade.id;
                fireBrigade = fireBrigadeNew;

                fireBrigade = {
                    id: fireBrigadeId,
                    name: '',
                    streetName: '',
                    postalCode: '',
                    postTown: ''
                };
                console.log('Successfully created FireBrigade.');

            },
            err => {
                console.log('Error creating FireBrigade.');
            }
        );
    }
*/
    updateFireBrigade(fireBrigade: FireBrigade): Observable<FireBrigade> {
        let url = 'http://localhost:8080/fireBrigades/' + fireBrigade.id;
        let headers = new HttpHeaders().set('Accept', 'application/json');
        return this.http.put<FireBrigade>(url, fireBrigade, { headers });
    }

    deleteFireBrigade(id: string): Observable<FireBrigade> {
        let url = 'http://localhost:8080/fireBrigades/' + id;
        let headers = new HttpHeaders().set('Accept', 'application/json');
        return this.http.delete<FireBrigade>(url, { headers });
    }

}
