import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FahrzeugbezeichnungRoutingModule } from './fahrzeugbezeichnung-routing.module';
import { FahrzeugbezeichnungComponent } from './fahrzeugbezeichnung.component';

@NgModule({
    imports: [CommonModule, FahrzeugbezeichnungRoutingModule],
    declarations: [FahrzeugbezeichnungComponent]
})
export class FahrzeugbezeichnungModule {}
