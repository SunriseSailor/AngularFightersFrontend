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
    filterAbbreviation: boolean = false;
    filterDescription: boolean = false;
    filtered: boolean = false;

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
    filterByRankAbbreviation(rankAbbreviation: string):void {
        this.rankService.findByRankAbbreviation(rankAbbreviation)
            .then(ranks => this.ranks = ranks)
            .catch(err => console.log(err));
        this.filtered = true;
    }
    filterByRankDescription(rankDescription: string):void {
        this.rankService.findByRankDescription(rankDescription)
            .then(ranks => this.ranks = ranks)
            .catch(err => console.log(err));
        this.filtered = true;
    }


    showForm(form: string):void {
    switch(form) {
    case 'abbreviation': {
            this.filterAbbreviation = true;
            this.filterDescription  = false;
            break;
        }
    case 'description': {
            this.filterDescription = true;
            this.filterAbbreviation = false;
            break;
        }
    default: {
            //statements;
            break;
        }
    }
}
}
