import { AfterViewInit, Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { StatistikService } from './statistik.service';

@Component({
    selector: 'app-statistik',
    templateUrl: './statistik.component.html',
    styleUrls: ['./statistik.component.scss'],
    animations: [routerTransition()]
})

export class StatistikComponent implements OnInit {

    genderNumberM: number;
    genderNumberW: number;

    statusNumberActive: number;
    statusNumberYouth: number;
    statusNumberReserve: number;

    errors: string;

    // pie-chart
    public pieChartLabels: string[] = [
        'Aktiv',
        'Jugend',
        'Reserve'
    ];

    public pieChartData: number[] = [
        this.statusNumberActive,
        this.statusNumberYouth,
        this.statusNumberReserve
    ];

    public pieChartType: string = 'pie';

    // bar chart
    public barChartOptions: any = {
        scaleShowVerticalLines: false,
        responsive: true
    };

    public barChartLabels: string[] = [
        'Weiblich',
        'Männlich'
    ];

    public barChartType: string = 'bar';
    public barChartLegend: boolean = true;

    public barChartData: any[] = [
        {data: [this.genderNumberW], label: 'weiblich'},
        {data: [this.genderNumberM], label: 'männlich'}
    ];

/*
    // lineChart
    public lineChartData: Array<any> = [
        {data: [0, 0, 1, 14, 25, 7, 18, 6, 44, 35, 2, 8, 14, 0, 0, 0], label: 'Feldbach'},
        // { data: [40, 35, 30, 25, 20, 15, 5], label: 'Graz' },
        // { data: [30, 35, 40, 45, 50, 55, 8], label: 'Wolfsberg' },
        // { data: [60, 55, 50, 45, 40, 35, 5], label: 'Gniebing' },
        // { data: [70, 80, 70, 80, 70, 80, 10], label: 'Paldau' }
    ];
    public lineChartLabels: Array<any> = [
        '1940-1945',
        '1945-1950',
        '1950-1955',
        '1955-1960',
        '1960-1965',
        '1965-1970',
        '1970-1975',
        '1975-1980',
        '1980-1985',
        '1985-1990',
        '1990-1995',
        '1995-2000',
        '2000-2005',
        '2005-2010',
        '2010-2015',
        '2015-Heute',
    ];
    public lineChartOptions: any = {
        responsive: true
    };
    public lineChartColors: Array<any> = [
        {
            // grey
            backgroundColor: 'rgba(148,159,177,0.2)',
            borderColor: 'rgba(148,159,177,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        },
        {
            // dark grey
            backgroundColor: 'rgba(77,83,96,0.2)',
            borderColor: 'rgba(77,83,96,1)',
            pointBackgroundColor: 'rgba(77,83,96,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(77,83,96,1)'
        },
        {
            // grey
            backgroundColor: 'rgba(148,159,177,0.2)',
            borderColor: 'rgba(148,159,177,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        },
        {
            // dark grey
            backgroundColor: 'rgba(77,83,96,0.2)',
            borderColor: 'rgba(77,83,96,1)',
            pointBackgroundColor: 'rgba(77,83,96,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(77,83,96,1)'
        },
        {
            // grey
            backgroundColor: 'rgba(148,159,177,0.2)',
            borderColor: 'rgba(148,159,177,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        },
    ];

    public lineChartLegend: boolean = true;
    public lineChartType: string = 'line';
*/

    constructor(private statistikService: StatistikService) {
    }

    ngOnInit() {
        this.statistikService.countByGenderM().subscribe(
            numberM => {
                this.genderNumberM = numberM;
                this.statistikService.countByGenderW().subscribe(
                    numberW => {
                        this.genderNumberW = numberW;
                        this.errors = '';
                    },
                    err => {
                        this.errors = 'Fehler beim Laden';
                    });
            },
            err => {
                this.errors = 'Fehler beim Laden';
            });

        this.statistikService.countByStatusActive().subscribe(
            statusActive => {
                this.statusNumberActive = statusActive;
                this.statistikService.countByStatusYouth().subscribe(
                    statusYouth => {
                        this.statusNumberYouth = statusYouth;
                        this.statistikService.countByStatusReserve().subscribe(
                            statusReserve => {
                                this.statusNumberReserve = statusReserve;
                                this.errors = '';
                            },
                            err => {
                                this.errors = 'Fehler beim Laden';
                            });
                    },
                    err => {
                        this.errors = 'Fehler beim Laden';
                    }),
                    err => {
                        this.errors = 'Fehler beim Laden';
                    }
            });
    }
}
