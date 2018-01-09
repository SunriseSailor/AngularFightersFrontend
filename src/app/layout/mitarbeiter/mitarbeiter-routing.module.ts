import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MitarbeiterComponent } from './mitarbeiter.component';

const routes: Routes = [
    {
        path: '',
        component: MitarbeiterComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MitarbeiterRoutingModule {}
