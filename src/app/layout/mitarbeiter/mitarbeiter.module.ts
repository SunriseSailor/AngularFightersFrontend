import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MitarbeiterRoutingModule } from './mitarbeiter-routing.module';
import { MitarbeiterComponent } from './mitarbeiter.component';
import { MitarbeiterDetailComponent } from './mitarbeiter-detail/mitarbeiter-detail.component';
import { MitarbeiterEditComponent } from './mitarbeiter-edit/mitarbeiter-edit.component';
import { FormsModule } from '@angular/forms';
import {MitarbeiterAnredePipe} from './mitarbeiterAnrede.pipe';

@NgModule({
    imports: [CommonModule, MitarbeiterRoutingModule, FormsModule],
    declarations: [MitarbeiterComponent, MitarbeiterDetailComponent, MitarbeiterEditComponent, MitarbeiterAnredePipe]
})
export class MitarbeiterModule {}
