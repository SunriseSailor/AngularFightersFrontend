import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeuerwehrRoutingModule } from './feuerwehr-routing.module';
import { FeuerwehrComponent } from './feuerwehr.component';

@NgModule({
    imports: [CommonModule, FeuerwehrRoutingModule],
    declarations: [FeuerwehrComponent]
})
export class FeuerwehrModule {}
