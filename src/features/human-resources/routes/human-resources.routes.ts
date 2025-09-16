import { Routes } from '@angular/router';
import { EmployeeDirectoryComponent } from '../pages/employee-directory/employee-directory';
import { AbsenceManagementComponent } from '../pages/absence-management/absence-management';
import { PayrollComponent } from '../pages/payroll/payroll';

export const routes: Routes = [
    {
        path: 'employeeDirectory',
        component: EmployeeDirectoryComponent
    },
    {
        path: 'absenceManagement',
        component: AbsenceManagementComponent
    },
    {
        path: 'payRoll',
        component: PayrollComponent
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/employeeDirectory'
    },
    {
        path: '**',
        loadComponent: () => import('./../../../core/layout/not-found-shell/not-found-page').then(m => m.NotFoundPage),
    },
]