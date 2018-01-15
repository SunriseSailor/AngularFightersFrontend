import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeuerwehrComponent } from './feuerwehr.component';
import { FeuerwehrEditComponent } from './feuerwehr-edit/feuerwehr-edit.component';
import { FeuerwehrDetailComponent } from './feuerwehr-detail/feuerwehr-detail.component';

const routes: Routes = [
    {
        path: '',
        component: FeuerwehrComponent
    },
    {
        path: 'feuerwehr-edit',
        component: FeuerwehrEditComponent,
    },
    {
        path: 'feuerwehr-detail/:id',
        component: FeuerwehrDetailComponent
    },
    {
        path: 'feuerwehr-edit/:id',
        component: FeuerwehrEditComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FeuerwehrRoutingModule {}
