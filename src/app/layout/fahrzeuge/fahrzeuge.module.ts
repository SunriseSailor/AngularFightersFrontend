import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FahrzeugeRoutingModule } from './fahrzeuge-routing.module';
import { FahrzeugeComponent } from './fahrzeuge.component';
import { FahrzeugDetailComponent } from './fahrzeugDetail/fahrzeug-detail/fahrzeug-detail.component';

@NgModule({
    imports: [CommonModule, FahrzeugeRoutingModule],
    declarations: [FahrzeugeComponent, FahrzeugDetailComponent]
})
export class FahrzeugeModule {}
