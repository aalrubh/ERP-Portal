import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'dashboard',
        loadComponent: () => import('./../../features/dashboard/dashboard').then(m => m.DashboardComponent),
    },
    {
        path: 'hr',
        loadChildren: () => import('./../../features/human-resources/routes/human-resources.routes').then(m => m.routes),
    },
    {
        path: 'finacct',
        loadChildren: () => import('./../../features/finance-and-accounting/routes/finance-and-accounting.routes').then(m => m.routes),
    },
    {
        path: 'proj',
        loadChildren: () => import('./../../features/projects/routes/projects.routes').then(m => m.routes),
    },
    {
        path: 'doc',
        loadChildren: () => import('./../../features/documents-and-records/routes/documents-and-records.routes').then(m => m.routes),
    },
    {
        path: 'it',
        loadChildren: () => import('./../../features/it-and-support/routes/it.routes').then(m => m.routes),
    },
    {
        path: 'customerPortal',
        loadChildren: () => import('./../../features/customer-portal/routes/customer-portal.routes').then(m => m.routes),
    },
    {
        path: 'settings',
        loadChildren: () => import('./../../features/system-settings/routes/system-settings.routes').then(m => m.routes),
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: './dashboard'
    },
    {
        path: '**',
        loadComponent: () => import('./../layout/not-found-shell/not-found-page').then(m => m.NotFoundPage),
    },
]