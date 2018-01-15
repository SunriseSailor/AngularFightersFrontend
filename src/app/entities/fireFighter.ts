import {FireBrigade} from './fireBrigade';

export interface FireFighter {
    id: number;
    title: string;
    surname: string;
    name: string;
    //rank: string;
    fireBrigade: FireBrigade;
    //gender: string;
}
