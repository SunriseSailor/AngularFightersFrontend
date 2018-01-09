import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FahrzeugeComponent } from './fahrzeuge.component';

const routes: Routes = [
    {
        path: '',
        component: FahrzeugeComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FahrzeugeRoutingModule {}
