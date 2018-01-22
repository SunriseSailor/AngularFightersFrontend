import { Component, OnInit } from '@angular/core';
import { FireFighter } from '../../entities/fireFighter';
import { FireFighterService } from './mitarbeiter.service';
import { routerTransition } from '../../router.animations';
import {FireBrigade} from "../../entities/fireBrigade";
import {FireFighterStatus} from "../../entities/fireFighterStatus";

@Component({
    selector: 'app-mitarbeiter',
    templateUrl: './mitarbeiter.component.html',
    styleUrls: ['./mitarbeiter.component.scss'],
    animations: [routerTransition()]
})

export class MitarbeiterComponent implements OnInit {

    fireFighters: Array<FireFighter> = [];
    fireBrigades: FireBrigade[];
    fireFighterStatuses: FireFighterStatus[];
    fireFighterStatusId:number;
    fireBrigadeId: number;
    selectedFireFighter: FireFighter;
    filtered: boolean = false;
    filterFireBrigade: boolean = false;
    filterName: boolean = false;
    filterSurname: boolean = false;
    filterStatus: boolean = false;

    constructor(private fireFighterService: FireFighterService) {}

    ngOnInit() {
        this.showAllFireFighters();
        this.fireFighterService.findAllFireBrigades()
            .then(fireBrigades => this.fireBrigades = fireBrigades)
            .catch(err=>console.log(err));

        this.fireFighterService.findAllFireFighterStatuses()
            .then(fireFighterStatus => this.fireFighterStatuses = fireFighterStatus)
            .catch(err => console.log(err));
    }
    select(f: FireFighter): void {
        this.selectedFireFighter = f;
        console.log(this.fireFighters);
    }

    deselect(): void {
        this.selectedFireFighter = null;
    }

    showAllFireFighters(): void {
        this.fireFighterService.findAll()
            .then(fireFighters => this.fireFighters = fireFighters)
            .catch(err => console.log(err));
        this.filtered = false;
    }

    filterByFireBrigade(fireBrigadeId: number):void {
        this.fireFighterService.findByFireBrigadeId(fireBrigadeId.toString())
            .then(fireFighters => this.fireFighters = fireFighters)
            .catch(err => console.log(err));
        this.filtered = true;
    }

    filterByFireFighterName(fireFighterName: string):void {
        this.fireFighterService.findByFireFighterName(fireFighterName)
            .then(fireFighters => this.fireFighters = fireFighters)
            .catch(err => console.log(err));
        this.filtered = true;
    }

    filterByFireFighterSurname(fireFighterSurname: string):void {
        this.fireFighterService.findByFireFighterSurname(fireFighterSurname)
            .then(fireFighters => this.fireFighters = fireFighters)
            .catch(err => console.log(err));
        this.filtered = true;
    }

    filterByFireFighterStatus(fireFighterStatus: string):void {
        this.fireFighterService.findByFireFighterStatus(fireFighterStatus)
            .then(fireFighters => this.fireFighters = fireFighters)
            .catch(err => console.log(err));
        this.filtered = true;
    }

    showForm(form: string):void {
        switch(form) {
            case 'name': {
                this.filterName = true;
                this.filterFireBrigade  = false;
                this.filterSurname = false;
                this.filterStatus = false;
                break;
            }
            case 'fireBrigade': {
                this.filterFireBrigade = true;
                this.filterName = false;
                this.filterSurname = false;
                this.filterStatus = false;
                break;
            }
            case 'surname': {
                this.filterSurname = true;
                this.filterFireBrigade = false;
                this.filterName = false;
                this.filterStatus = false;
                break;
            }
            case 'status': {
                this.filterSurname = false;
                this.filterFireBrigade = false;
                this.filterName = false;
                this.filterStatus = true;
                break;
            }
            default: {
                //statements;
                break;
            }
        }
    }

}
