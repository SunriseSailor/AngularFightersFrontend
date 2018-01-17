import {NgModule } from '@angular/core';
import {CommonModule } from '@angular/common';
import {StatusRoutingModule } from './status-routing.module';
import {StatusComponent } from './status.component';
import {StatusDetailComponent} from './status-detail/status-detail.component';
import {StatusEditComponent } from './status-edit/status-edit.component';
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [CommonModule, StatusRoutingModule, FormsModule],
    declarations: [StatusComponent,  StatusDetailComponent, StatusEditComponent]
})
export class StatusModule {}
