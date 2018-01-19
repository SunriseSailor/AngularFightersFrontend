import {Component, OnInit} from '@angular/core';
import {FireFighter} from "../../../entities/fireFighter";
import {FireFighterService} from "../mitarbeiter.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'mitarbeiter-detail',
  templateUrl: './mitarbeiter-detail.component.html',
  styleUrls: ['./mitarbeiter-detail.component.scss']
})
export class MitarbeiterDetailComponent implements OnInit {
    id: string;
    fireFighter: FireFighter;
    errors: string;
  constructor(private fireFighterService: FireFighterService,
              private route: ActivatedRoute,
              private router: Router  ) { }


  deleteDetail(): void {
      this.fireFighterService.deleteFireFighter(this.fireFighter.id.toString()).subscribe(
          (ok) => {
             console.log('Successfully deleted Fire Fighter ' + this.fireFighter.id);
             this.router.navigate(['/mitarbeiter']);
          },
          (errResp) => {
              console.error('Error deleting Fire Fighter', errResp);
          }

      );

}

  ngOnInit() {
      this.route.params.subscribe(
          params => {
              this.id = params['id'];
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
      );

  }

}
