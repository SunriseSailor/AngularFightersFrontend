import { Component, OnInit } from '@angular/core';
import { FireFighterStatus } from '../../entities/fireFighterStatus';
import { FireFighterStatusService } from './status.service';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-status',
    templateUrl: './status.component.html',
    styleUrls: ['./status.component.scss'],
    animations: [routerTransition()]
})
export class StatusComponent implements OnInit {
    fireFighterStatuses: Array<FireFighterStatus> = [];
    selectedFireFighterStatus: FireFighterStatus;

    constructor(private fireFighterStatusService: FireFighterStatusService) {}

    ngOnInit() {
        this.showAllFireFighterStatuses();
    }

    select(s:FireFighterStatus):void {
        this.selectedFireFighterStatus = s;
        console.log(this.fireFighterStatuses)
    }
    deselect(): void {
        this.selectedFireFighterStatus = null;
    }
    showAllFireFighterStatuses(): void {
        this.fireFighterStatusService.findAll()
            .then(fireFighterStatus => this.fireFighterStatuses = fireFighterStatus)
            .catch(err=>console.log(err))
    }
}
