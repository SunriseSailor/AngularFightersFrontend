import { Component, OnInit } from '@angular/core';
import { Rank } from '../../entities/rank';
import { RankService } from './dienstgrade.service';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-dienstgrade',
    templateUrl: './dienstgrade.component.html',
    styleUrls: ['./dienstgrade.component.scss'],
    animations: [routerTransition()]
})
export class DienstgradeComponent implements OnInit {
    ranks: Array<Rank> = [];
    selectedRank: Rank;

    constructor(private rankService: RankService) {}

    ngOnInit() {
        this.showAllRanks();
    }

    select(d:Rank):void {
        this.selectedRank = d;
        console.log(this.ranks)
    }
    deselect(): void {
        this.selectedRank = null;
    }
    showAllRanks(): void {
        this.rankService.findAll()
            .then(rank => this.ranks = rank)
            .catch(err=>console.log(err))
    }
}
