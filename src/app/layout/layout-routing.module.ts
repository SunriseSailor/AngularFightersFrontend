import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' },
            { path: 'mitarbeiter', loadChildren: './mitarbeiter/mitarbeiter.module#MitarbeiterModule' },
            { path: 'dienstgrade', loadChildren: './dienstgrade/dienstgrade.module#DienstgradeModule' },
            { path: 'feuerwehr', loadChildren: './feuerwehr/feuerwehr.module#FeuerwehrModule' },
            { path: 'status', loadChildren: './status/status.module#StatusModule' },
            { path: 'fahrzeuge', loadChildren: './fahrzeuge/fahrzeuge.module#FahrzeugeModule' },
            { path: 'fahrzeugbezeichnung', loadChildren: './fahrzeugbezeichnung/fahrzeugbezeichnung.module#FahrzeugbezeichnungModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
