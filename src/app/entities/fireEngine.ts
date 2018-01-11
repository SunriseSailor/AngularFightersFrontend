import {FireEngineAbbreviation} from "./fireEngineAbbreviation";
import {FireBrigade} from "./fireBrigade";

export interface FireEngine {
    id: number;
    model: string;
    licensePlate: string;
    performance: string;
    buildYear: string;
    active: boolean;
    fireBrigade: FireBrigade;
    abbreviation: FireEngineAbbreviation
}
