import {NgModule } from '@angular/core';
import {CommonModule } from '@angular/common';
import {StatistikRoutingModule } from './statistik-routing.module';
import {StatistikComponent } from './statistik.component';
import {ChartsModule as Ng2Charts } from 'ng2-charts';


import {FormsModule} from "@angular/forms";
import {PageHeaderModule} from "../../shared/modules/page-header/page-header.module";

@NgModule({
    imports: [CommonModule, Ng2Charts, StatistikRoutingModule, FormsModule, PageHeaderModule],
    declarations: [StatistikComponent]
})
export class StatistikModule {}
