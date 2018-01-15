import { Component, OnInit } from '@angular/core';
import { FireBrigade } from '../../../entities/fireBrigade';
import { FireBrigadeService } from '../feuerwehr.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'feuerwehr-detail',
  templateUrl: './feuerwehr-detail.component.html',
  styleUrls: ['./feuerwehr-detail.component.scss']
})

export class FeuerwehrDetailComponent implements OnInit {

    id: string;
    fireBrigade: FireBrigade;
    errors: string;

    constructor(private fireBrigadeService: FireBrigadeService,
                private route: ActivatedRoute,
                private router: Router) { }

    deleteDetail(): void {
        this.fireBrigadeService.deleteFireBrigade(this.fireBrigade.id.toString()).subscribe(
            (ok) => {
                console.log('Successfully deleted Fire Brigade ' + this.fireBrigade.id);
                this.router.navigate(['/feuerwehr']);
            },
            (errResp) => {
                console.error('Error deleting Fire Brigade', errResp);
            }

        );

    }

    ngOnInit() {
        this.route.params.subscribe(
            params => {
                this.id = params['id'];
                this.fireBrigadeService.findById(this.id).subscribe(
                    fireBrigade => {
                        this.fireBrigade = fireBrigade;
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
