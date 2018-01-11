import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FahrzeugeRoutingModule } from './fahrzeuge-routing.module';
import { FahrzeugeComponent } from './fahrzeuge.component';
import { FahrzeugDetailComponent } from './fahrzeug-detail/fahrzeug-detail.component';
import { FahrzeugEditComponent } from './fahrzeug-edit/fahrzeug-edit.component';
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [CommonModule, FahrzeugeRoutingModule, FormsModule],
    declarations: [FahrzeugeComponent, FahrzeugDetailComponent, FahrzeugEditComponent]
})
export class FahrzeugeModule {}
