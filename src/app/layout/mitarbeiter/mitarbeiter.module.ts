import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MitarbeiterRoutingModule } from './mitarbeiter-routing.module';
import { MitarbeiterComponent } from './mitarbeiter.component';
import { FormsModule } from '@angular/forms';
import {MitarbeiterDetailComponent} from "./mitarbeiter-detail/mitarbeiter-detail.component";
import {MitarbeiterEditComponent} from "./mitarbeiter-edit/mitarbeiter-edit.component";



@NgModule({
    imports: [CommonModule, MitarbeiterRoutingModule, FormsModule],
    declarations: [MitarbeiterComponent, MitarbeiterDetailComponent, MitarbeiterEditComponent]
})
export class MitarbeiterModule {}
