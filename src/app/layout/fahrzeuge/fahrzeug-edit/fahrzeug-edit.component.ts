import { Component, OnInit } from '@angular/core';
import {FireEngine} from "../../../entities/fireEngine";
import {FireEngineService} from "../fahrzeuge.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FireBrigade} from "../../../entities/fireBrigade";
import {FireEngineAbbreviation} from "../../../entities/fireEngineAbbreviation";

@Component({
  selector: 'fahrzeug-edit',
  templateUrl: './fahrzeug-edit.component.html',
  styleUrls: ['./fahrzeug-edit.component.scss']
})
export class FahrzeugEditComponent implements OnInit {

    id: string;
    fireEngine: FireEngine;
    fireBrigades: FireBrigade[];
    abbreviations: FireEngineAbbreviation[];
    errors: string;
  constructor(private fireEngineService: FireEngineService,
              private route: ActivatedRoute,
              private router: Router  ) { }

  ngOnInit() {
      this.route.params.subscribe(
          params => {
              this.id = params['id'];

                  this.fireEngineService.findById(this.id).subscribe(
                      fireEngine => {
                          this.fireEngine = fireEngine;
                          this.errors = '';
                      },
                      err => {
                          this.errors = 'Fehler beim Laden';
                      }
                  );
              this.fireEngineService.findAllFireBrigades()
                  .then(fireBrigades => this.fireBrigades = fireBrigades)
                  .catch(err=>console.log(err))
              this.fireEngineService.findAllFireEngineAbbreviations()
                  .then(abbreviations => this.abbreviations = abbreviations)
                  .catch(err=>console.log(err))
          }
      );


  }

    update() {
        this.fireEngineService.updateFireEngine(this.fireEngine).subscribe(
            fireEngine => {
                this.fireEngine = fireEngine;
                this.errors = 'Saving was successful!';
                this.router.navigate(['/fahrzeuge', { success: this.errors}])
            },
            err => {
                this.errors = 'Error saving data';
                console.log(this.errors)
            }
        );
    }

    create() {
        this.fireEngineService.createFireEngine(this.fireEngine).subscribe(
            fireEngine => {
                this.fireEngine = fireEngine;
                this.errors = 'Creating was successful!';
                this.router.navigate(['/fahrzeuge', { success: this.errors}])
            },
            err => {
                this.errors = 'Error saving data';
            }
        );
    }

}
