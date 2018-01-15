import { Component, OnInit } from '@angular/core';
import { FireBrigade } from '../../entities/fireBrigade';
import { FireBrigadeService } from './feuerwehr.service';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-feuerwehr',
    templateUrl: './feuerwehr.component.html',
    styleUrls: ['./feuerwehr.component.scss'],
    animations: [routerTransition()]
})

export class FeuerwehrComponent implements OnInit {

    fireBrigades: Array<FireBrigade> = [];
    selectedFireBrigade: FireBrigade;

    constructor(private fireBrigadeService: FireBrigadeService) {}

    ngOnInit() {
        this.showAllFireBrigades();
    }

    select(f: FireBrigade): void {
        this.selectedFireBrigade = f;
        console.log(this.fireBrigades);
    }

    deselect(): void {
        this.selectedFireBrigade = null;
    }

    showAllFireBrigades(): void {
        this.fireBrigadeService.findAll()
            .then(fireBrigade => this.fireBrigades = fireBrigade)
            .catch(err => console.log(err));
    }


}
