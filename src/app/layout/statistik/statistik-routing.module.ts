import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {StatistikComponent} from './statistik.component';

const routes: Routes = [
    {
        path: '',
        component: StatistikComponent
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StatistikRoutingModule {}
