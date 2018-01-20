import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {FireEngine} from "../../entities/fireEngine";
import 'rxjs/add/operator/toPromise';
import {FireBrigade} from "../../entities/fireBrigade";
import {FireEngineAbbreviation} from "../../entities/fireEngineAbbreviation";
import {Params, Router} from "@angular/router";

@Injectable()
export class FireEngineService {
    constructor(private http: HttpClient, private router: Router) {
    }

    findAll(): Promise<FireEngine[]> {
        let url = 'https://localhost:8080/fireEngines?projection=all&size=100';
        let headers = new HttpHeaders().set('Accept', 'application/json');
        return this.http.get<Array<FireEngine>>(url, {headers}).toPromise().then(fireEngines => fireEngines['_embedded']['fireEngines'])
    }

    findAllFireBrigades(): Promise<FireBrigade[]> {
        let url = 'https://localhost:8080/fireBrigades';
        let headers = new HttpHeaders().set('Accept', 'application/json');
        return this.http.get<Array<FireBrigade>>(url, {headers}).toPromise().then(fireBrigades => fireBrigades['_embedded']['fireBrigades'])
    }

    findAllFireEngineAbbreviations(): Promise<FireEngineAbbreviation[]> {
        let url = 'https://localhost:8080/fireEngineAbbreviations?size=41';
        let headers = new HttpHeaders().set('Accept', 'application/json');
        return this.http.get<Array<FireEngineAbbreviation>>(url, {headers})
            .toPromise().then(fireEngineAbbreviations => fireEngineAbbreviations['_embedded']['fireEngineAbbreviations'])
    }

    findById(id: string): Observable<FireEngine> {
        const url = 'https://localhost:8080/fireEngines/'+id+'?projection=all';
        const headers = new HttpHeaders()
            .set('Accept', 'application/json');
        return this.http.get<FireEngine>(url, {headers});
    }

    findByFireBrigadeId(fireBrigadeId: string): Promise<FireEngine[]> {
        const url = 'https://localhost:8080/fireEngines/search/findByFireBrigade_Id?projection=all';
        const headers = new HttpHeaders()
            .set('Accept', 'application/json');
        let params = new HttpParams() .set('id', fireBrigadeId);
        return this.http.get<Array<FireEngine>>(url, {headers,params})
            .toPromise().then(fireEngines => fireEngines['_embedded']['fireEngines'])
    }

    createFireEngine(fireEngine: FireEngine): Observable<FireEngine> {
        let url = 'https://localhost:8080/fireEngines';
        let headers = new HttpHeaders().set('Accept', 'application/json').set('Content-Type', 'application/json');
        return this.http.post<FireEngine>(url, fireEngine, { headers });
    }

    fullCreate(fireEngine: FireEngine) : void {
        let fireEngineWithout: FireEngine = {
            id: null,
            model: fireEngine.model,
            licensePlate: fireEngine.licensePlate,
            performance: fireEngine.performance,
            buildYear: fireEngine.buildYear,
            active: fireEngine.active,
            abbreviation: {
                id: NaN,
                abbreviation: "",
                description: "",
                operatingLife: ""
            },
            fireBrigade: {
                id: NaN,
                name: "",
                postTown: "",
                postalCode: "",
                streetName: ""
            }
        };
        this.createFireEngine(fireEngineWithout).subscribe(
            fireEngineNew => {
                let abbreviationId = fireEngine.abbreviation.id
                let fireBrigadeId = fireEngine.fireBrigade.id
                console.log(fireEngineNew.id)
                fireEngine = fireEngineNew;

                fireEngine.abbreviation = {
                                            id: abbreviationId,
                                            abbreviation:"",
                                            description:"",
                                            operatingLife:""
                                            };

                fireEngine.fireBrigade = {
                                            id: fireBrigadeId,
                                            name:"",
                                            postalCode:"",
                                            postTown:"",
                                            streetName:""
                                        };
                console.log(fireEngine.id)

                console.log("Successfully created FireEngine.");
                this.updateFireEngineAbbreviation(fireEngine).subscribe(
                    abbreviation => {
                        fireEngine.abbreviation = abbreviation;
                        console.log("Abbreviation was added");
                        this.updateFireEngineFireBrigade(fireEngine).subscribe(
                            fireBrigade => {
                                fireEngine.fireBrigade = fireBrigade;
                                console.log("FireBrigade was added");
                                this.router.navigate(['/fahrzeuge'])
                            },
                            err => {
                                console.log("FireBrigade was not added" )
                            }
                        );

                    },
                    err => {
                        console.log("Abbreviation was not added")
                    }
                );

            },
            err => {
                console.log(fireEngine.id);
                console.log("Error creating FireEngine.")
            }
        );

    }



    updateFireEngine(fireEngine: FireEngine): Observable<FireEngine> {
        let url = 'https://localhost:8080/fireEngines/'+fireEngine.id;
        let headers = new HttpHeaders().set('Accept', 'application/json');
        fireEngine.abbreviation = null;
        fireEngine.fireBrigade = null;
        return this.http.put<FireEngine>(url, fireEngine, { headers });

    }

    updateFireEngineFireBrigade(fireEngine: FireEngine): Observable<FireBrigade> {
        let url = 'https://localhost:8080/fireEngines/'+fireEngine.id+'/fireBrigade';
        let headers = new HttpHeaders().set('Content-Type', 'text/uri-list');
        let changeUrl = 'https://localhost:8080/fireBrigades/'+ fireEngine.fireBrigade.id;
        return this.http.put<FireBrigade>(url, changeUrl, { headers });
    }

    updateFireEngineAbbreviation(fireEngine: FireEngine): Observable<FireEngineAbbreviation> {
        let url = 'https://localhost:8080/fireEngines/'+fireEngine.id+'/abbreviation';
        let headers = new HttpHeaders().set('Content-Type', 'text/uri-list');
        let changeUrl = 'https://localhost:8080/fireEngineAbbreviations/'+ fireEngine.abbreviation.id
        return this.http.put<FireEngineAbbreviation>(url, changeUrl, { headers });
    }

    fullUpdate(fireEngine:FireEngine):void {

        this.updateFireEngineAbbreviation(fireEngine).subscribe(
            abbreviation => {
                fireEngine.abbreviation = abbreviation;
                console.log("Abbreviation was changed");
                this.updateFireEngineFireBrigade(fireEngine).subscribe(
                    fireBrigade => {
                        fireEngine.fireBrigade = fireBrigade;
                        console.log("FireBrigade was changed");
                        this.updateFireEngine(fireEngine).subscribe(
                            fireEngineNew => {
                                fireEngine = fireEngineNew;

                                this.router.navigate(['/fahrzeuge'])
                            },
                            err => {
                                console.log("FireEngine was not changed!")
                            }
                        );
                    },
                    err => {
                        console.log("FireBrigade was not changed" )
                    }
                );

            },
            err => {
                console.log("Abbreviation was not changed")
            }
        );

    }


    deleteFireEngine(id:string): Observable<FireEngine> {
        let url = 'https://localhost:8080/fireEngines/'+id;
        let headers = new HttpHeaders().set('Accept', 'application/json');
        return this.http.delete<FireEngine>(url, { headers });
    }

}

