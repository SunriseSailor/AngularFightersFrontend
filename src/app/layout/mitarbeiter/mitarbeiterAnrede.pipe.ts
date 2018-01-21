import {PipeTransform} from "@angular/core";
import {Pipe} from "@angular/core";

@Pipe({
    name: 'mitarbeiterAnrede'
})
export class MitarbeiterAnredePipe  implements  PipeTransform {
    transform(gender: string): string {
        if (gender.toLowerCase() === 'm') {
            return 'Herr';
        }
        else {
            return 'Frau';
        }
    }
}
