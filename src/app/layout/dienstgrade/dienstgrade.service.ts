import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/toPromise';
import {Router} from "@angular/router";
import {Rank} from '../../entities/rank';

@Injectable()
export class RankService {
    constructor(private http: HttpClient, private router: Router) { }

    findAll(): Promise<Rank[]> {
        let url = 'https://localhost:8080/ranks?size=1000';
        let headers = new HttpHeaders().set('Accept', 'application/json');
        return this.http.get<Array<Rank>>(url, {headers})
            .toPromise().then(ranks => ranks['_embedded']['ranks']);
    }
    findById(id: string): Observable<Rank> {
        const url = 'https://localhost:8080/ranks/' + id;
        const headers = new HttpHeaders()
            .set('Accept', 'application/json');
        return this.http.get<Rank>(url, {headers});
    }
    createRank(rank: Rank): Observable<Rank> {
        let url = 'https://localhost:8080/ranks';
        let headers = new HttpHeaders().set('Accept', 'application/json').set('Content-Type', 'application/json');
        return this.http.post<Rank>(url, rank, { headers });
    }
    updateRank(rank: Rank): Observable<Rank> {
        let url = 'https://localhost:8080/ranks/' + rank.id;
        let headers = new HttpHeaders().set('Accept', 'application/json');
        return this.http.put<Rank>(url, rank, { headers });
    }
    deleteRank(id: string): Observable<Rank> {
        let url = 'https://localhost:8080/ranks/' + id;
        let headers = new HttpHeaders().set('Accept', 'application/json');
        return this.http.delete<Rank>(url, { headers });
    }
    findByRankAbbreviation(rankAbbreviation: string): Promise<Rank[]> {
        const url = 'https://localhost:8080/ranks/search/findByAbbreviationContaining?projection=all';
        const headers = new HttpHeaders()
            .set('Accept', 'application/json');
        let params = new HttpParams() .set('abbreviation', rankAbbreviation);
        return this.http.get<Array<Rank>>(url, {headers,params})
            .toPromise().then(ranks => ranks['_embedded']['ranks'])
    }
    findByRankDescription(rankDescription: string): Promise<Rank[]> {
        const url = 'https://localhost:8080/ranks/search/findByDescriptionContaining?projection=all';
        const headers = new HttpHeaders()
            .set('Accept', 'application/json');
        let params = new HttpParams() .set('description', rankDescription);
        return this.http.get<Array<Rank>>(url, {headers,params})
            .toPromise().then(ranks => ranks['_embedded']['ranks'])
    }
}
