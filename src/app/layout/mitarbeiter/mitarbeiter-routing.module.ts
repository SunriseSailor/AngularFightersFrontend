import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MitarbeiterComponent} from './mitarbeiter.component';
import {MitarbeiterDetailComponent} from './mitarbeiter-detail/mitarbeiter-detail.component';
import {MitarbeiterEditComponent} from './mitarbeiter-edit/mitarbeiter-edit.component';

const routes: Routes = [
    {
        path: '',
        component: MitarbeiterComponent
    },
    {
        path: 'mitarbeiter-edit',
        component: MitarbeiterEditComponent,
    },
    {
        path: 'mitarbeiter-detail/:id',
        component: MitarbeiterDetailComponent
    },
    {
        path: 'mitarbeiter-edit/:id',
        component: MitarbeiterEditComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MitarbeiterRoutingModule {}
