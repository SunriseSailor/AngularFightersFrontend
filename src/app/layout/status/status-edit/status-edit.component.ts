import { Component, OnInit } from '@angular/core';
import { FireFighterStatus } from '../../../entities/fireFighterStatus';
import { FireFighterStatusService } from '../status.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'status-edit',
    templateUrl: './status-edit.component.html',
    styleUrls: ['./status-edit.component.scss']
})

export class StatusEditComponent implements OnInit {
    id: string;
    fireFighterStatus: FireFighterStatus;
    errors: string;

    constructor(private fireFighterStatusService: FireFighterStatusService, private route: ActivatedRoute, private router: Router) { }

    create() {
        this.fireFighterStatusService.createFireFighterStatus(this.fireFighterStatus).subscribe(
            fireFighterStatusNew => {
                let fireFighterStatusId = this.fireFighterStatus.id;
                this.fireFighterStatus = fireFighterStatusNew;
                console.log('Successfully created Fire Fighter Status');
                this.router.navigate(['/status'])

            },
            err => {
                console.log('Error creating Fire Fighter Status');
            }
        );
    };
    update() {
        this.fireFighterStatusService.updateFireFighterStatus(this.fireFighterStatus).subscribe(
            fireFighterStatusNew => {
                let fireFighterStatusId = this.fireFighterStatus.id;
                this.fireFighterStatus = fireFighterStatusNew;
                console.log('Successfully updated Fire Fighter Status');
                this.router.navigate(['/status'])

            },
            err => {
                console.log('Error updated Fire Fighter Status');
            }
        );
    };
    ngOnInit() {
        this.route.params.subscribe(
            params => {
                this.id = params['id'];
                if (this.id != null) {
                    this.fireFighterStatusService.findById(this.id).subscribe(
                        fireFighterStatus => {
                            this.fireFighterStatus = fireFighterStatus;
                            this.errors = '';
                        },
                        err => {
                            this.errors = 'Fehler beim Laden';
                        }
                    );
                } else {
                    this.fireFighterStatus = {
                        id: NaN,
                        description: ''
                    };
                }
            }
        );
    }
}
