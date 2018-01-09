import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeuerwehrComponent } from './feuerwehr.component';

const routes: Routes = [
    {
        path: '',
        component: FeuerwehrComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FeuerwehrRoutingModule {}
