import { Component, OnInit } from '@angular/core';
import { FireFighter } from '../../entities/fireFighter';
import { FireFighterService } from './mitarbeiter.service';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-mitarbeiter',
    templateUrl: './mitarbeiter.component.html',
    styleUrls: ['./mitarbeiter.component.scss'],
    animations: [routerTransition()]
})

export class MitarbeiterComponent implements OnInit {
    fireFighters: Array<FireFighter> = [];
    //fireBrigades: FireBrigade[];
    //fireBrigadeId: number;
    selectedFireFighter: FireFighter;
    filtered: boolean = false;

    constructor(private fireFighterService: FireFighterService) {}

    ngOnInit() {
        this.showAllFireFighters();
        this.fireFighterService.findAllFireBrigades()
            .catch(err=>console.log(err));
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
}
