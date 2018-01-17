import { Component, OnInit } from '@angular/core';
import { FireFighter } from '../../../entities/fireFighter';
import { FireFighterService } from '../mitarbeiter.service';
import { ActivatedRoute, Router } from '@angular/router';
import {FireBrigade} from "../../../entities/fireBrigade";

@Component({
    selector: 'mitarbeiter-edit',
    templateUrl: './mitarbeiter-edit.component.html',
    styleUrls: ['./mitarbeiter-edit.component.scss']
})

export class MitarbeiterEditComponent implements OnInit {
    id: string;
    fireFighter: FireFighter;
    fireBrigades: FireBrigade[];
    errors: string;

    constructor(private fireFighterService: FireFighterService,
                private route: ActivatedRoute,
                private router: Router) { }

    create() {
        this.fireFighterService.createFireFighter(this.fireFighter).subscribe(
            fireFighterNew => {
                let fireFighterId = this.fireFighter.id;
                this.fireFighter = fireFighterNew;
                console.log('Successfully created FireFighter');
                this.router.navigate(['/mitarbeiter']);

            },
            err => {
                console.log('Error creating FireFighter');
            }
        );
    };
    update() {
        this.fireFighterService.updateFireFighter(this.fireFighter).subscribe(
            fireFighterNew => {
                let fireFighterId = this.fireFighter.id;
                this.fireFighter = fireFighterNew;
                console.log('Successfully updated FireFighter');
                this.router.navigate(['/mitarbeiter']);

            },
            err => {
                console.log('Error updating FireFighter');
            }
        );
    };
    ngOnInit() {
        this.route.params.subscribe(
            params => {
                this.id = params['id'];
                if (this.id != null) {
                    this.fireFighterService.findById(this.id).subscribe(
                        fireFighter => {
                            this.fireFighter = fireFighter;
                            this.errors = '';
                        },
                        err => {
                            this.errors = 'Fehler beim Laden';
                        }
                    );
                } else {
                    this.fireFighter = {
                        id: NaN,
                        title: '',
                        surname: '',
                        name: '',
                        fireBrigade:{
                            id: NaN,
                            name:"",
                            postTown:"",
                            postalCode:"",
                            streetName:""
                        }
                    };
                }
                this.fireFighterService.findAllFireBrigades()
                    .then(fireBrigades => this.fireBrigades = fireBrigades)
                    .catch(err=>console.log(err))
            }
        );
    }
}
