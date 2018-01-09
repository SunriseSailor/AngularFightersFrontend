import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MitarbeiterRoutingModule } from './mitarbeiter-routing.module';
import { MitarbeiterComponent } from './mitarbeiter.component';

@NgModule({
    imports: [CommonModule, MitarbeiterRoutingModule],
    declarations: [MitarbeiterComponent]
})
export class MitarbeiterModule {}
