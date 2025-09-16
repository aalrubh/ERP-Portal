import { Routes } from '@angular/router';
import { HelpdeskComponent } from '../pages/helpdesk/helpdesk';
import { SoftwareLicensingComponent } from '../pages/software-licensing/software-licensing';
import { IncidentReportsComponent } from '../pages/incident-reports/incident-reports';

export const routes: Routes = [
    {
        path: 'helpdesk',
        component: HelpdeskComponent,
    },
    {
        path: 'licenses',
        component: SoftwareLicensingComponent,
    },
    {
        path: 'incidents',
        component: IncidentReportsComponent,
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/helpdesk',
    },
    {
        path: '**',
        loadComponent: () => import('./../../../core/layout/not-found-shell/not-found-page').then(m => m.NotFoundPage),
    },
]