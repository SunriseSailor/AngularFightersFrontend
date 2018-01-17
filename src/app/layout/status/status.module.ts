import {NgModule } from '@angular/core';
import {CommonModule } from '@angular/common';
import {StatusRoutingModule } from './status-routing.module';
import {StatusComponent } from './status.component';
import {StatusDetailComponent} from './status-detail/status-detail.component';
import {StatusEditComponent } from './status-edit/status-edit.component';
import {FormsModule} from "@angular/forms";
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [CommonModule, StatusRoutingModule, FormsModule, TranslateModule],
    declarations: [StatusComponent,  StatusDetailComponent, StatusEditComponent]
})
export class StatusModule {}
