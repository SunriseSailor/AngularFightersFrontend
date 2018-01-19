import {NgModule } from '@angular/core';
import {CommonModule } from '@angular/common';
import {StatistikRoutingModule } from './statistik-routing.module';
import {StatistikComponent } from './statistik.component';

import {FormsModule} from "@angular/forms";
import {PageHeaderModule} from "../../shared/modules/page-header/page-header.module";

@NgModule({
    imports: [CommonModule, StatistikRoutingModule, FormsModule, PageHeaderModule],
    declarations: [StatistikComponent]
})
export class StatistikModule {}
