import { Routes } from '@angular/router';
import { GeneralLedgerComponent } from '../pages/general-ledger/general-ledger';
import { ExpenseManagementComponent } from '../pages/expense-management/expense-management';
import { BudgetingAndForecastingComponent } from '../pages/budgeting-and-forecasting/budgeting-and-forecasting';
import { FinancialReportsComponent } from '../pages/financial-reports/financial-reports';
import { AuditTrailComponent } from '../pages/audit-trail/audit-trail';

export const routes: Routes = [
    {
        path: 'generalLedger',
        title: 'General Ledger',
        component: GeneralLedgerComponent,
    },
    {
        path: 'expenseManagement',
        title: 'Expense Management',
        component: ExpenseManagementComponent,
    },
    {
        path: 'budgetting',
        title: 'Budgetting and Forecasting',
        component: BudgetingAndForecastingComponent,
    },
    {
        path: 'financialReports',
        title: 'Financial Reports',
        component: FinancialReportsComponent
    },
    {
        path: 'auditTrail',
        title: 'Audit Trail',
        component: AuditTrailComponent
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'generalLedger',
    },
    {
        path: '**',
        title: 'Page Not Found',
        loadComponent: () => import('./../../../core/layout/not-found-shell/not-found-page').then(m => m.NotFoundPage),
    },
]