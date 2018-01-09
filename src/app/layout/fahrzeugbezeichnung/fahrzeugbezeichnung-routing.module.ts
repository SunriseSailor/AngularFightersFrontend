import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FahrzeugbezeichnungComponent } from './fahrzeugbezeichnung.component';

const routes: Routes = [
    {
        path: '',
        component: FahrzeugbezeichnungComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FahrzeugbezeichnungRoutingModule {}
