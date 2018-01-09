import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FahrzeugeRoutingModule } from './fahrzeuge-routing.module';
import { FahrzeugeComponent } from './fahrzeuge.component';

@NgModule({
    imports: [CommonModule, FahrzeugeRoutingModule],
    declarations: [FahrzeugeComponent]
})
export class FahrzeugeModule {}
