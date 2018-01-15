import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FahrzeugeComponent } from './fahrzeuge.component';
import { FahrzeugDetailComponent } from './fahrzeug-detail/fahrzeug-detail.component';
import { FahrzeugEditComponent } from './fahrzeug-edit/fahrzeug-edit.component';

const routes: Routes = [
    {
        path: '',
        component: FahrzeugeComponent
    },
    {
        path: 'fahrzeug-edit',
        component: FahrzeugEditComponent,
    },
    {
        path: 'fahrzeug-detail/:id',
        component: FahrzeugDetailComponent
    },
    {
        path: 'fahrzeug-edit/:id',
        component: FahrzeugEditComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FahrzeugeRoutingModule {}
