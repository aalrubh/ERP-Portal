import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "erp",
        loadComponent: () => import('./../layout/erp-shell/erp-shell').then(m => m.ErpShell),
        loadChildren: () => import('./erp.routes').then(m => m.routes),
    },
    {
        path: "auth",
        loadComponent: () => import('./../layout/auth-shell/auth-shell').then(m => m.AuthShell),
        loadChildren: () => import('./auth.routes').then(m => m.routes),
    },
    {
        path: "",
        redirectTo: 'erp',
        pathMatch: 'full',
    },
    {
        path: "**",
        title: 'Page not Found',
        loadComponent: () => import('./../layout/not-found-shell/not-found-page').then(m => m.NotFoundPage),
    },
]