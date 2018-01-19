import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-statistik',
    templateUrl: './statistik.component.html',
    styleUrls: ['./statistik.component.scss'],
    animations: [routerTransition()]
})
export class StatistikComponent implements OnInit {


/*
    public pieChartLabels: string[] = [
        'Aktiv',
        'Reserve',
        'Jugend'
    ];
    public pieChartData: number[] = [300, 500, 100];
    public pieChartType: string = 'pie';
*/

    constructor() {}

    ngOnInit() {}
}
