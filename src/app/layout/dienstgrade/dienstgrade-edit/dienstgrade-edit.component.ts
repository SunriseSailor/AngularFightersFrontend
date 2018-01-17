import { Component, OnInit } from '@angular/core';
import { Rank } from '../../../entities/rank';
import { RankService } from '../dienstgrade.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'dienstgrade-edit',
    templateUrl: './dienstgrade-edit.component.html',
    styleUrls: ['./dienstgrade-edit.component.scss']
})

export class DienstgradeEditComponent implements OnInit {
    id: string;
    rank: Rank;
    errors: string;

    constructor(private rankService: RankService, private route: ActivatedRoute, private router: Router) { }

    create() {
        this.rankService.createRank(this.rank).subscribe(
            rankNew => {
                let rankId = this.rank.id;
                this.rank = rankNew;
                console.log('Successfully created Rank');
                this.router.navigate(['/dienstgrade'])

            },
            err => {
                console.log('Error creating Rank');
            }
        );
    };
    update() {
        this.rankService.updateRank(this.rank).subscribe(
            rankNew => {
                let rankId = this.rank.id;
                this.rank = rankNew;
                console.log('Successfully updated Rank');
                this.router.navigate(['/dienstgrade'])

            },
            err => {
                console.log('Error updating Rank');
            }
        );
    };
    ngOnInit() {
        this.route.params.subscribe(
            params => {
                this.id = params['id'];
                if (this.id != null) {
                    this.rankService.findById(this.id).subscribe(
                        rank => {
                            this.rank = rank;
                            this.errors = '';
                        },
                        err => {
                            this.errors = 'Fehler beim Laden';
                        }
                    );
                } else {
                    this.rank = {
                        id: NaN,
                        description: '',
                        abbreviation: ''
                    };
                }
            }
        );
    }
}
