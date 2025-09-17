import { Routes } from '@angular/router';
import { GeneralLedgerComponent } from '../pages/general-ledger/general-ledger';
import { ExpenseManagementComponent } from '../pages/expense-management/expense-management';
import { BudgetingAndForecastingComponent } from '../pages/budgeting-and-forecasting/budgeting-and-forecasting';
import { FinancialReportsComponent } from '../pages/financial-reports/financial-reports';
import { AuditTrailComponent } from '../pages/audit-trail/audit-trail';

export const routes: Routes = [
    {
        path: 'generalLedger',
        component: GeneralLedgerComponent,
    },
    {
        path: 'expenseManagement',
        component: ExpenseManagementComponent,
    },
    {
        path: 'budgetting',
        component: BudgetingAndForecastingComponent,
    },
    {
        path: 'financialReports',
        component: FinancialReportsComponent
    },
    {
        path: 'auditTrail',
        component: AuditTrailComponent
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'generalLedger',
    },
    {
        path: '**',
        loadComponent: () => import('./../../../core/layout/not-found-shell/not-found-page').then(m => m.NotFoundPage),
    },
]