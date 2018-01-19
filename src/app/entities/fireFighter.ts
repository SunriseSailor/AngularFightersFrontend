import {FireBrigade} from "./fireBrigade";
import {FireFighterStatus} from "./fireFighterStatus";
import {Rank} from "./rank";

export interface FireFighter{
    id: number;
    gender: string;
    title: string;
    surname: string;
    name: string;
    dayOfBirth: string;
    rank: Rank;
    fireBrigade: FireBrigade;
    fireFighterStatus: FireFighterStatus;
}
