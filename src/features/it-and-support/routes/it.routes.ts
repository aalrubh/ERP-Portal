import { Routes } from '@angular/router';
import { HelpdeskComponent } from '../pages/helpdesk/helpdesk';
import { SoftwareLicensingComponent } from '../pages/software-licensing/software-licensing';
import { IncidentReportsComponent } from '../pages/incident-reports/incident-reports';

export const routes: Routes = [
    {
        path: 'helpdesk',
        title: 'Helpdesk',
        component: HelpdeskComponent,
    },
    {
        path: 'licenses',
        title: 'Software Licensing',
        component: SoftwareLicensingComponent,
    },
    {
        path: 'incidents',
        title: 'Incident Reports',
        component: IncidentReportsComponent,
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'helpdesk',
    },
    {
        path: '**',
        title: 'Page Not Found',
        loadComponent: () => import('./../../../core/layout/not-found-shell/not-found-page').then(m => m.NotFoundPage),
    },
]