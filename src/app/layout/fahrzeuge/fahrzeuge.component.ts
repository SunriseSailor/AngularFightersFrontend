import { Component, OnInit } from '@angular/core';
import {FireEngine} from "../../entities/fireEngine";
import {FireEngineService} from "./fahrzeuge.service";
import {routerTransition} from "../../router.animations";
import {FireBrigade} from "../../entities/fireBrigade";

@Component({
    selector: 'app-fahrzeuge',
    templateUrl: './fahrzeuge.component.html',
    styleUrls: ['./fahrzeuge.component.scss'],
    animations: [routerTransition()]
})
export class FahrzeugeComponent implements OnInit {

    fireEngines: Array<FireEngine> = [];
    selectedFireEngine: FireEngine;
    constructor(private fireEngineService: FireEngineService) {}

    ngOnInit() {
        this.showAllFireEngines();


    }
   /* search(): void {
        this.flightService
            .find()
            .subscribe(
                (fireEngines: FireEngine[]) => {
                    this.fireEngines = fireEngines;
                },
                (errResp) => {
                    console.error('Error loading flights', errResp);
                }
            );
    }*/

    select(f:FireEngine):void {
        this.selectedFireEngine = f;
        console.log(this.fireEngines)

    }
    deselect():void {
        this.selectedFireEngine = null;
    }

    showAllFireEngines(): void {
        this.fireEngineService.findAll()
            .then(fireEngines => this.fireEngines = fireEngines)
            .catch(err=>console.log(err))

    }


}
