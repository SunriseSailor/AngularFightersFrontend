import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MitarbeiterRoutingModule } from './mitarbeiter-routing.module';
import { MitarbeiterComponent } from './mitarbeiter.component';
import { FormsModule } from '@angular/forms';



@NgModule({
    imports: [CommonModule, MitarbeiterRoutingModule, FormsModule],
    declarations: [MitarbeiterComponent]
})
export class MitarbeiterModule {}
