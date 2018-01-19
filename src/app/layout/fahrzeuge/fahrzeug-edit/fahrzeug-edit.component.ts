import { Component, OnInit } from '@angular/core';
import {FireEngine} from "../../../entities/fireEngine";
import {FireEngineService} from "../fahrzeuge.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FireBrigade} from "../../../entities/fireBrigade";
import {FireEngineAbbreviation} from "../../../entities/fireEngineAbbreviation";
import {isUndefined} from "util";

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
              if(this.id != null) {

                  this.fireEngineService.findById(this.id).subscribe(
                      fireEngine => {
                          this.fireEngine = fireEngine;
                          this.errors = '';
                      },
                      err => {
                          this.errors = 'Fehler beim Laden';
                      }
                  );
              }
              else {
                  this.fireEngine = {
                      id: NaN,
                      model:"",
                      licensePlate:"",
                      performance:"",
                      buildYear:"",
                      active:true,
                      abbreviation:{
                          id: NaN,
                          abbreviation:"",
                          description:"",
                          operatingLife:""
                      },
                      fireBrigade:{
                          id: NaN,
                          name:"",
                          postTown:"",
                          postalCode:"",
                          streetName:""
                      }
                  };
              }
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
        this.fireEngineService.fullUpdate(this.fireEngine)
  }

    create() {
        //console.log(this.fireEngine.abbreviation.id)
        this.fireEngineService.fullCreate(this.fireEngine)
    }

}
