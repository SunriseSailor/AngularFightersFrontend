import {Component, OnInit } from '@angular/core';
import {FireFighter} from "../../../entities/fireFighter";
import {FireFighterService} from "../mitarbeiter.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Rank} from "../../../entities/rank";
import {FireBrigade} from "../../../entities/fireBrigade";
import {FireFighterStatus} from "../../../entities/fireFighterStatus";
import DateTimeFormat = Intl.DateTimeFormat;
import {DatePipe} from "@angular/common";

@Component({
  selector: 'mitarbeiter-edit',
  templateUrl: './mitarbeiter-edit.component.html',
  styleUrls: ['./mitarbeiter-edit.component.scss']
})
export class MitarbeiterEditComponent implements OnInit {

    id: string;
    fireFighter: FireFighter;
    rank: Rank[];
    fireBrigade: FireBrigade[];
    fireFighterStatus: FireFighterStatus[];
    errors: string;
  constructor(private fireFighterService: FireFighterService,
              private route: ActivatedRoute,
              private router: Router  ) { }

  ngOnInit() {
      this.route.params.subscribe(
          params => {
              this.id = params['id'];
              if(this.id != null) {
                  this.fireFighterService.findById(this.id).subscribe(
                      fireFighter => {
                          this.fireFighter = fireFighter;
                          this.errors = '';
                      },
                      err => {
                          this.errors = 'Fehler beim Laden';
                      }
                  );
              }
              else {
                  this.fireFighter = {
                      id: NaN,
                      gender: "",
                      title:"",
                      surname:"",
                      name:"",
                      dayOfBirth:"",
                      rank:{
                          id: NaN,
                          description:"",
                          abbreviation:""
                      },
                      fireBrigade:{
                          id: NaN,
                          name:"",
                          streetName:"",
                          postalCode:"",
                          postTown:""
                      },
                      fireFighterStatus:{
                          id: NaN,
                          description:""
                      }
                  };
              }

              this.fireFighterService.findAllRanks()
                  .then(rank => this.rank = rank)
                  .catch(err=>console.log(err))
              this.fireFighterService.findAllFireBrigades()
                  .then(fireBrigade => this.fireBrigade = fireBrigade)
                  .catch(err=>console.log(err))
              this.fireFighterService.findAllFireFighterStatuses()
                  .then(fireFighterStatus => this.fireFighterStatus = fireFighterStatus)
                  .catch(err=>console.log(err))

          }
      );
  }

    update() {
        this.fireFighterService.fullUpdate(this.fireFighter)
  }
    create() {
        //console.log(this.fireFighter.abbreviation.id)
        this.fireFighterService.fullCreate(this.fireFighter)
    }

}
