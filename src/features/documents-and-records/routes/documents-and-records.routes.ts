import { Routes } from '@angular/router';
import { DocumentManagementSystemComponent } from '../pages/document-management-system/document-management-system';
import { ContractsAndAgreementsComponent } from '../pages/contracts-and-agreements/contracts-and-agreements';
import { VersionControlComponent } from '../pages/version-control/version-control';

export const routes: Routes = [
    {
        path: 'documentManagement',
        component: DocumentManagementSystemComponent,
    },
    {
        path: 'contracts',
        component: ContractsAndAgreementsComponent,
    },
    {
        path: 'versionControl',
        component: VersionControlComponent,
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/documentManagement',
    },
    {
        path: '**',
        loadComponent: () => import('./../../../core/layout/not-found-shell/not-found-page').then(m => m.NotFoundPage),
    },
]