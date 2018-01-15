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
    selectedFireFighter: FireFighter;

    constructor(private fireFighterService: FireFighterService) {}

    ngOnInit() {
        this.showAllFireFighters();
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
            .then(fireFighter => this.fireFighters = fireFighter)
            .catch(err => console.log(err));
    }


}
