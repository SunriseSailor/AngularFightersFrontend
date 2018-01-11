import {Component, OnInit} from '@angular/core';
import {FireEngine} from "../../../entities/fireEngine";
import {FireEngineService} from "../fahrzeuge.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'fahrzeug-detail',
  templateUrl: './fahrzeug-detail.component.html',
  styleUrls: ['./fahrzeug-detail.component.scss']
})
export class FahrzeugDetailComponent implements OnInit {
    id: string;
    fireEngine: FireEngine;
    errors: string;
  constructor(private fireEngineService: FireEngineService,
              private route: ActivatedRoute,
              private router: Router  ) { }


  deleteDetail(): void {
      this.fireEngineService.deleteFireEngine(this.fireEngine.id.toString()).subscribe(
          (ok) => {
             console.log('Successfully deleted Fire Engine ' + this.fireEngine.id);
             this.router.navigate(['/fahrzeuge']);
          },
          (errResp) => {
              console.error('Error deleting Engine', errResp);
          }

      );

}

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
          }
      );

  }

}
