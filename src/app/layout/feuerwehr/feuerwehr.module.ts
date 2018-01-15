import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeuerwehrRoutingModule } from './feuerwehr-routing.module';
import { FeuerwehrComponent } from './feuerwehr.component';
import { FormsModule } from '@angular/forms';
import { FeuerwehrDetailComponent } from './feuerwehr-detail/feuerwehr-detail.component';
import { FeuerwehrEditComponent } from './feuerwehr-edit/feuerwehr-edit.component';

@NgModule({
    imports: [CommonModule, FeuerwehrRoutingModule, FormsModule],
    declarations: [FeuerwehrComponent, FeuerwehrDetailComponent, FeuerwehrEditComponent]
})
export class FeuerwehrModule {}
