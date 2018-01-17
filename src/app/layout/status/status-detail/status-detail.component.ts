import { Component, OnInit } from '@angular/core';
import { FireFighterStatus } from '../../../entities/fireFighterStatus';
import { FireFighterStatusService } from '../status.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'status-detail',
    templateUrl: './status-detail.component.html',
    styleUrls: ['./status-detail.component.scss']
})

export class StatusDetailComponent implements OnInit {
    id: string;
    fireFighterStatus: FireFighterStatus;
    errors: string;

    constructor(private fireFighterStatusService: FireFighterStatusService, private route: ActivatedRoute, private router: Router) { }

    deleteDetail(): void {
        this.fireFighterStatusService.deleteFireFighterStatus(this.fireFighterStatus.id.toString()).subscribe(
            (ok) => {
                console.log('Successfully deleted Fire Fighter Status ' + this.fireFighterStatus.id);
                this.router.navigate(['/status']);
            },
            (errResp) => {
                console.error('Error deleting Fire Fighter Status', errResp);
            }
        );
    }
    ngOnInit() {
        this.route.params.subscribe(
            params => {
                this.id = params['id'];
                this.fireFighterStatusService.findById(this.id).subscribe(
                    fireFighterStatus => {
                        this.fireFighterStatus = fireFighterStatus;
                        this.errors = '';
                    },
                    err => {
                        this.errors = 'Fehler beim Laden';
                    }
                );
            }
        );
    }
}
