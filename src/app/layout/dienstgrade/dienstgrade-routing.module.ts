import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DienstgradeComponent} from './dienstgrade.component';
import {DienstgradeEditComponent} from './dienstgrade-edit/dienstgrade-edit.component';
import {DienstgradeDetailComponent} from './dienstgrade-detail/dienstgrade-detail.component';

const routes: Routes = [
    {
        path: '',
        component: DienstgradeComponent
    },
    {
        path: 'dienstgrade-edit',
            component: DienstgradeEditComponent,
    },
    {
        path: 'dienstgrade-detail/:id',
            component: DienstgradeDetailComponent
    },
    {
        path: 'dienstgrade-edit/:id',
            component: DienstgradeEditComponent
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DienstgradeRoutingModule {}
