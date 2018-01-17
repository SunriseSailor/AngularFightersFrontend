import {NgModule } from '@angular/core';
import {CommonModule } from '@angular/common';
import {DienstgradeRoutingModule } from './dienstgrade-routing.module';
import {DienstgradeComponent } from './dienstgrade.component';
import {DienstgradeDetailComponent} from './dienstgrade-detail/dienstgrade-detail.component';
import {DienstgradeEditComponent } from './dienstgrade-edit/dienstgrade-edit.component';
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [CommonModule, DienstgradeRoutingModule, FormsModule],
    declarations: [DienstgradeComponent,  DienstgradeDetailComponent, DienstgradeEditComponent]
})
export class DienstgradeModule {}
