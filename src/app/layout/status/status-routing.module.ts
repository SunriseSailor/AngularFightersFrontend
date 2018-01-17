import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {StatusComponent} from './status.component';
import {StatusEditComponent} from './status-edit/status-edit.component';
import {StatusDetailComponent} from './status-detail/status-detail.component';

const routes: Routes = [
    {
        path: '',
        component: StatusComponent
    },
    {
        path: 'status-edit',
            component: StatusEditComponent,
    },
    {
        path: 'status-detail/:id',
            component: StatusDetailComponent
    },
    {
        path: 'status-edit/:id',
            component: StatusEditComponent
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StatusRoutingModule {}
