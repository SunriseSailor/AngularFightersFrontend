import { Component, OnInit } from '@angular/core';
import { FireEngineAbbreviation } from '../../../entities/fireEngineAbbreviation';
import { FireEngineAbbreviationService } from '../fahrzeugbezeichnung.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'fahrzeugbezeichnung-detail',
    templateUrl: './fahrzeugbezeichnung-detail.component.html',
    styleUrls: ['./fahrzeugbezeichnung-detail.component.scss']
})

export class FahrzeugbezeichnungDetailComponent implements OnInit {
    id: string;
    fireEngineAbbreviation: FireEngineAbbreviation;
    errors: string;

    constructor(private fireEngineAbbreviationService: FireEngineAbbreviationService, private route: ActivatedRoute, private router: Router) { }

    deleteDetail(): void {
        this.fireEngineAbbreviationService.deleteFireEngineAbbreviation(this.fireEngineAbbreviation.id.toString()).subscribe(
            (ok) => {
                console.log('Successfully deleted Fire Engine Abbreviation' + this.fireEngineAbbreviation.id);
                this.router.navigate(['/fahrzeugbezeichnung']);
            },
            (errResp) => {
                console.error('Error deleting Engine Abbreviation', errResp);
            }
        );
    }

    ngOnInit() {
        this.route.params.subscribe(
            params => {
                this.id = params['id'];
                this.fireEngineAbbreviationService.findById(this.id).subscribe(
                    fireEngineAbbreviation => {
                        this.fireEngineAbbreviation = fireEngineAbbreviation;
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
