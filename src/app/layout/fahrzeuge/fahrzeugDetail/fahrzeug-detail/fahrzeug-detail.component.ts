import {Component, Input, OnInit} from '@angular/core';
import {FireEngine} from "../../../../entities/fireEngine";
import {FireEngineService} from "../../fahrzeuge.service";
import {FireBrigade} from "../../../../entities/fireBrigade";

@Component({
  selector: 'fahrzeug-detail',
  templateUrl: './fahrzeug-detail.component.html',
  styleUrls: ['./fahrzeug-detail.component.scss']
})
export class FahrzeugDetailComponent implements OnInit {
    @Input() fireEngine: FireEngine;
  constructor(private fireEngineService: FireEngineService) { }


  deleteDetail(): void {
      this.fireEngineService.deleteFireEngine(this.fireEngine.id.toString());
      return console.log('deleted' + this.fireEngine.id)

}

  ngOnInit() {

  }

}
