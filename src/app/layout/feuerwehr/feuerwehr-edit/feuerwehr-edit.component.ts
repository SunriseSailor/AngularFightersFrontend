import { Component, OnInit } from '@angular/core';
import { FireBrigade } from '../../../entities/fireBrigade';
import { FireBrigadeService } from '../feuerwehr.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'feuerwehr-edit',
  templateUrl: './feuerwehr-edit.component.html',
  styleUrls: ['./feuerwehr-edit.component.scss']
})

export class FeuerwehrEditComponent implements OnInit {

    id: string;
    fireBrigade: FireBrigade;
    errors: string;

    constructor(private fireBrigadeService: FireBrigadeService,
                private route: ActivatedRoute,
                private router: Router) { }

    create() {
        this.fireBrigadeService.createFireBrigade(this.fireBrigade).subscribe(
            fireBrigadeNew => {
                let fireBrigadeId = this.fireBrigade.id;
                this.fireBrigade = fireBrigadeNew;
                console.log('Successfully created FireBrigade.');
                this.router.navigate(['/feuerwehr'])

            },
            err => {
                console.log('Error creating FireBrigade.');
            }
        );
    };

    update() {
        this.fireBrigadeService.updateFireBrigade(this.fireBrigade).subscribe(
            fireBrigadeNew => {
            let fireBrigadeId = this.fireBrigade.id;
            this.fireBrigade = fireBrigadeNew;
            console.log('Successfully updated FireBrigade.');
                this.router.navigate(['/feuerwehr'])

        },
        err => {
            console.log('Error updated FireBrigade.');
        }
        );
    };

    ngOnInit() {
        this.route.params.subscribe(
            params => {
                this.id = params['id'];
                if (this.id != null) {

                    this.fireBrigadeService.findById(this.id).subscribe(
                        fireBrigade => {
                            this.fireBrigade = fireBrigade;
                            this.errors = '';
                        },
                        err => {
                            this.errors = 'Fehler beim Laden';
                        }
                    );
                } else {
                    this.fireBrigade = {
                        id: NaN,
                        name: '',
                        postTown: '',
                        postalCode: '',
                        streetName: ''
                    };
                }
            }
        );
    }

}
