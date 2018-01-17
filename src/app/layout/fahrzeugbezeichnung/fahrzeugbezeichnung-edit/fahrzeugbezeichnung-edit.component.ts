import { Component, OnInit } from '@angular/core';
import { FireEngineAbbreviation } from '../../../entities/fireEngineAbbreviation';
import { FireEngineAbbreviationService } from '../fahrzeugbezeichnung.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'fahrzeugbezeichnung-edit',
    templateUrl: './fahrzeugbezeichnung-edit.component.html',
    styleUrls: ['./fahrzeugbezeichnung-edit.component.scss']
})

export class FahrzeugbezeichnungEditComponent implements OnInit {
    id: string;
    fireEngineAbbreviation: FireEngineAbbreviation;
    errors: string;

    constructor(private fireEngineAbbreviationService: FireEngineAbbreviationService, private route: ActivatedRoute, private router: Router) { }

    create() {
        this.fireEngineAbbreviationService.createFireEngineAbbreviation(this.fireEngineAbbreviation).subscribe(
            fireEngineAbbreviationNew => {
                let fireEngineAbbreviationId = this.fireEngineAbbreviation.id;
                this.fireEngineAbbreviation = fireEngineAbbreviationNew;
                console.log('Successfully created Fire Engine Abbreviation');
                this.router.navigate(['/fahrzeugbezeichnung'])

            },
            err => {
                console.log('Error creating Fire Engine Abbreviation');
            }
        );
    };
    update() {
        this.fireEngineAbbreviationService.updateFireEngineAbbreviation(this.fireEngineAbbreviation).subscribe(
            fireEngineAbbreviationNew => {
                let fireEngineAbbreviationId = this.fireEngineAbbreviation.id;
                this.fireEngineAbbreviation = fireEngineAbbreviationNew;
                console.log('Successfully updated Fire Engine Abbreviation');
                this.router.navigate(['/fahrzeugbezeichnung'])

            },
            err => {
                console.log('Error updated Fire Engine Abbreviation.');
            }
        );
    };
    ngOnInit() {
        this.route.params.subscribe(
            params => {
                this.id = params['id'];
                if (this.id != null) {
                    this.fireEngineAbbreviationService.findById(this.id).subscribe(
                        fireEngineAbbreviation => {
                            this.fireEngineAbbreviation = fireEngineAbbreviation;
                            this.errors = '';
                        },
                        err => {
                            this.errors = 'Fehler beim Laden';
                        }
                    );
                } else {
                    this.fireEngineAbbreviation = {
                        id: NaN,
                        description: '',
                        abbreviation: '',
                        operatingLife: ''
                    };
                }
            }
        );
    }
}
