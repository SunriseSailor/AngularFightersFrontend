import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {FireFighter} from "../../entities/fireFighter";
import 'rxjs/add/operator/toPromise';
import {Router} from "@angular/router";
import {Rank} from "../../entities/rank";
import {FireBrigade} from "../../entities/fireBrigade";
import {FireFighterStatus} from "../../entities/fireFighterStatus";

@Injectable()
export class FireFighterService {
    constructor(private http: HttpClient, private router: Router) {
    }

    findAll(): Promise<FireFighter[]> {
        let url = 'http://localhost:8080/fireFighters?projection=all&size=100';
        let headers = new HttpHeaders().set('Accept', 'application/json');
        return this.http.get<Array<FireFighter>>(url, {headers}).toPromise().then(fireFighters => fireFighters['_embedded']['fireFighters'])
    }

    findAllRanks(): Promise<Rank[]> {
        let url = 'http://localhost:8080/ranks?size=500';
        let headers = new HttpHeaders().set('Accept', 'application/json');
        return this.http.get<Array<Rank>>(url, {headers}).toPromise().then(ranks => ranks['_embedded']['ranks'])
    }

    findAllFireBrigades(): Promise<FireBrigade[]> {
        let url = 'http://localhost:8080/fireBrigades';
        let headers = new HttpHeaders().set('Accept', 'application/json');
        return this.http.get<Array<FireBrigade>>(url, {headers}).toPromise().then(fireBrigades => fireBrigades['_embedded']['fireBrigades'])
    }

    findAllFireFighterStatuses(): Promise<FireFighterStatus[]> {
        let url = 'http://localhost:8080/fireFighterStatuses';
        let headers = new HttpHeaders().set('Accept', 'application/json');
        return this.http.get<Array<FireFighterStatus>>(url, {headers})
            .toPromise().then(fireFighterStatuses => fireFighterStatuses['_embedded']['fireFighterStatuses'])
    }

    findById(id: string): Observable<FireFighter> {
        const url = 'http://localhost:8080/fireFighters/'+id+'?projection=all';
        const headers = new HttpHeaders()
            .set('Accept', 'application/json');
        return this.http.get<FireFighter>(url, {headers});
    }

    findByFireBrigadeId(fireBrigadeId: string): Promise<FireFighter[]> {
        const url = 'http://localhost:8080/fireFighters/search/findByFireBrigade_Id?projection=all';
        const headers = new HttpHeaders()
            .set('Accept', 'application/json');
        let params = new HttpParams() .set('id', fireBrigadeId);
        return this.http.get<Array<FireFighter>>(url, {headers,params}).toPromise().then(fireFighters => fireFighters['_embedded']['fireFighters'])

    }

    createFireFighter(fireFighter: FireFighter): Observable<FireFighter> {
        let url = 'http://localhost:8080/fireFighters';
        let headers = new HttpHeaders().set('Accept', 'application/json').set('Content-Type', 'application/json');
        return this.http.post<FireFighter>(url, fireFighter, { headers });
    }

    fullCreate(fireFighter: FireFighter) : void {
        let fireFighterWithout: FireFighter = {
            id: null,
            gender: fireFighter.gender,
            title: fireFighter.title,
            surname: fireFighter.surname,
            name: fireFighter.name,
            dayOfBirth: fireFighter.dayOfBirth,
            rank: {
                id: NaN,
                description: "",
                abbreviation: ""
            },
            fireBrigade: {
                id: NaN,
                name: "",
                streetName: "",
                postalCode: "",
                postTown: ""
            },
            fireFighterStatus: {
                id: NaN,
                description: ""
            }
        };
        this.createFireFighter(fireFighterWithout).subscribe(
            fireFighterNew => {
                let rankId = fireFighter.rank.id
                let fireBrigadeId = fireFighter.fireBrigade.id
                let fireFighterStatusId = fireFighter.fireFighterStatus.id
                console.log(fireFighterNew.id)
                fireFighter = fireFighterNew;
                fireFighter.rank = {
                                            id: rankId,
                                            description:"",
                                            abbreviation:""
                                            };
                fireFighter.fireBrigade = {
                                            id: fireBrigadeId,
                                            name:"",
                                            streetName:"",
                                            postalCode:"",
                                            postTown:""
                                        };
                fireFighter.fireFighterStatus = {
                                            id: fireFighterStatusId,
                                            description:""
                                            };

                console.log(fireFighter.id)

                console.log("Successfully created FireFighter.");
                this.updateFireFighterRank(fireFighter).subscribe(
                    rank => {
                        fireFighter.rank = rank;
                        console.log("Rank was added");

                        this.updateFireFighterFireBrigade(fireFighter).subscribe(
                            fireBrigade => {
                                fireFighter.fireBrigade = fireBrigade;
                                console.log("FireBrigade was added");

                                this.updateFireFighterFireFighterStatus(fireFighter).subscribe(
                                    fireFighterStatus => {
                                        fireFighter.fireFighterStatus = fireFighterStatus;
                                        console.log("Fire Fighter Status was added");
                                        },
                                        err => {
                                            console.log("Fire Fighter Status was not added")});
                        },
                        err => {
                            console.log("Fire Brigade was not added")});
                    },
                    err => {
                        console.log("Rank was not added")});
            },
            err => {
                console.log(fireFighter.id);
                console.log("Error creating FireFighter.")
            }
        );

    }

    updateFireFighter(fireFighter: FireFighter): Observable<FireFighter> {
        let url = 'http://localhost:8080/fireFighters/'+fireFighter.id;
        let headers = new HttpHeaders().set('Accept', 'application/json');
        //fireFighter.abbreviation = null;
        fireFighter.fireBrigade = null;
        return this.http.put<FireFighter>(url, fireFighter, { headers });

    }

     updateFireFighterRank(fireFighter: FireFighter): Observable<Rank> {
        let url = 'http://localhost:8080/fireFighters/'+fireFighter.id+'/rank';
        let headers = new HttpHeaders().set('Content-Type', 'text/uri-list');
        let changeUrl = 'http://localhost:8080/ranks/'+ fireFighter.rank.id;
        return this.http.put<Rank>(url, changeUrl, { headers });
    }

    updateFireFighterFireBrigade(fireFighter: FireFighter): Observable<FireBrigade> {
        let url = 'http://localhost:8080/fireFighters/'+fireFighter.id+'/fireBrigade';
        let headers = new HttpHeaders().set('Content-Type', 'text/uri-list');
        let changeUrl = 'http://localhost:8080/fireBrigades/'+ fireFighter.fireBrigade.id;
        return this.http.put<FireBrigade>(url, changeUrl, { headers });
    }

    updateFireFighterFireFighterStatus(fireFighter: FireFighter): Observable<FireFighterStatus> {
        let url = 'http://localhost:8080/fireFighters/'+fireFighter.id+'/fireFighterStatus';
        let headers = new HttpHeaders().set('Content-Type', 'text/uri-list');
        let changeUrl = 'http://localhost:8080/fireFighterStatuses/'+ fireFighter.fireFighterStatus.id
        return this.http.put<FireFighterStatus>(url, changeUrl, { headers });
    }

    fullUpdate(fireFighter:FireFighter):void {

        this.updateFireFighterRank(fireFighter).subscribe(
            rank => {
                fireFighter.rank = rank;
                console.log("Rank was changed");
                this.updateFireFighterFireBrigade(fireFighter).subscribe(
                    fireBrigade => {
                        fireFighter.fireBrigade = fireBrigade;
                        console.log("FireBrigade was changed");

                        this.updateFireFighterFireFighterStatus(fireFighter).subscribe(
                            fireFighterStatus => {
                                fireFighter.fireFighterStatus = fireFighterStatus;
                                console.log("Fire Fighter Status was changed");
                                this.updateFireFighter(fireFighter).subscribe(
                                    fireFighterNew => {
                                        fireFighter = fireFighterNew;
                                        this.router.navigate(['/mitarbeiter'])
                                    },
                                    err => {
                                        console.log("FireFighter was not changed!")
                                    }
                                );
                            },
                            err => {
                                console.log("Fire Fighter Status was not changed" )
                            }
                        );
                    },
                    err => {
                        console.log("Fire Brigade was not changed")
                    }
                );
    },
    err => {
    console.log("Rank was not changed")
}
);
    }

    deleteFireFighter(id:string): Observable<FireFighter> {
        let url = 'http://localhost:8080/fireFighters/'+id;
        let headers = new HttpHeaders().set('Accept', 'application/json');
        return this.http.delete<FireFighter>(url, { headers });
    }

}

