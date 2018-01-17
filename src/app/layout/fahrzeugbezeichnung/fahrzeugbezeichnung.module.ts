import {NgModule } from '@angular/core';
import {CommonModule } from '@angular/common';
import {FahrzeugbezeichnungRoutingModule } from './fahrzeugbezeichnung-routing.module';
import {FahrzeugbezeichnungComponent } from './fahrzeugbezeichnung.component';
import {FahrzeugbezeichnungDetailComponent} from './fahrzeugbezeichnung-detail/fahrzeugbezeichnung-detail.component';
import {FahrzeugbezeichnungEditComponent } from './fahrzeugbezeichnung-edit/fahrzeugbezeichnung-edit.component';
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [CommonModule, FahrzeugbezeichnungRoutingModule, FormsModule],
    declarations: [FahrzeugbezeichnungComponent,  FahrzeugbezeichnungDetailComponent, FahrzeugbezeichnungEditComponent]
})
export class FahrzeugbezeichnungModule {}
