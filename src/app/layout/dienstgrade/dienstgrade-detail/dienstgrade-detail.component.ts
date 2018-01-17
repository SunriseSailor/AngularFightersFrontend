import { Component, OnInit } from '@angular/core';
import { Rank } from '../../../entities/rank';
import { RankService } from '../dienstgrade.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'dienstgrade-detail',
    templateUrl: './dienstgrade-detail.component.html',
    styleUrls: ['./dienstgrade-detail.component.scss']
})

export class DienstgradeDetailComponent implements OnInit {
    id: string;
    rank: Rank;
    errors: string;

    constructor(private rankService: RankService, private route: ActivatedRoute, private router: Router) { }

    deleteDetail(): void {
        this.rankService.deleteRank(this.rank.id.toString()).subscribe(
            (ok) => {
                console.log('Successfully deleted Ranks' + this.rank.id);
                this.router.navigate(['/dienstgrade']);
            },
            (errResp) => {
                console.error('Error deleting Ranks', errResp);
            }
        );
    }

    ngOnInit() {
        this.route.params.subscribe(
            params => {
                this.id = params['id'];
                this.rankService.findById(this.id).subscribe(
                    rank => {
                        this.rank = rank;
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
