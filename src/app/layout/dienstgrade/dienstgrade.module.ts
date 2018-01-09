import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DienstgradeRoutingModule } from './dienstgrade-routing.module';
import { DienstgradeComponent } from './dienstgrade.component';

@NgModule({
    imports: [CommonModule, DienstgradeRoutingModule],
    declarations: [DienstgradeComponent]
})
export class DienstgradeModule {}
