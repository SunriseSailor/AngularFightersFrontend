import { Component, OnInit } from '@angular/core';
import { FireEngineAbbreviation } from '../../entities/fireEngineAbbreviation';
import { FireEngineAbbreviationService } from './fahrzeugbezeichnung.service';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-fahrzeugbezeichnung',
    templateUrl: './fahrzeugbezeichnung.component.html',
    styleUrls: ['./fahrzeugbezeichnung.component.scss'],
    animations: [routerTransition()]
})
export class FahrzeugbezeichnungComponent implements OnInit {
    fireEngineAbbreviations: Array<FireEngineAbbreviation> = [];
    selectedFireEngineAbbreviation: FireEngineAbbreviation;

    constructor(private fireEngineAbbreviationService: FireEngineAbbreviationService) {}

    ngOnInit() {
        this.showAllFireEngineAbbreviations();
    }

    select(b:FireEngineAbbreviation):void {
        this.selectedFireEngineAbbreviation = b;
        console.log(this.fireEngineAbbreviations)
    }
    deselect(): void {
        this.selectedFireEngineAbbreviation = null;
    }
    showAllFireEngineAbbreviations(): void {
        this.fireEngineAbbreviationService.findAll()
            .then(fireEngineAbbreviation => this.fireEngineAbbreviations = fireEngineAbbreviation)
            .catch(err=>console.log(err))
    }
}
