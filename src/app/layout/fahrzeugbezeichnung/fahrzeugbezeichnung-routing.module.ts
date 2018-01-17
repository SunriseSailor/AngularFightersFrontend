import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FahrzeugbezeichnungComponent} from './fahrzeugbezeichnung.component';
import {FahrzeugbezeichnungEditComponent} from './fahrzeugbezeichnung-edit/fahrzeugbezeichnung-edit.component';
import {FahrzeugbezeichnungDetailComponent} from './fahrzeugbezeichnung-detail/fahrzeugbezeichnung-detail.component';

const routes: Routes = [
    {
        path: '',
        component: FahrzeugbezeichnungComponent
    },
    {
        path: 'fahrzeugbezeichnung-edit',
            component: FahrzeugbezeichnungEditComponent,
    },
    {
        path: 'fahrzeugbezeichnung-detail/:id',
            component: FahrzeugbezeichnungDetailComponent
    },
    {
        path: 'fahrzeugbezeichnung-edit/:id',
            component: FahrzeugbezeichnungEditComponent
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FahrzeugbezeichnungRoutingModule {}
