import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DienstgradeComponent } from './dienstgrade.component';

const routes: Routes = [
    {
        path: '',
        component: DienstgradeComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DienstgradeRoutingModule {}
