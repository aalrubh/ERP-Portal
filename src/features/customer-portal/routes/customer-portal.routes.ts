import { Routes } from '@angular/router';
import { SelfServicePortalComponent } from '../pages/self-service-portal/self-service-portal';
import { OrderTrackingComponent } from '../pages/order-tracking/order-tracking';
import { InvoiceDownloadsComponent } from '../pages/invoice-downloads/invoice-downloads';

export const routes: Routes = [
    {
        path: 'portal',
        component: SelfServicePortalComponent,
    },
    {
        path: 'orders',
        component: OrderTrackingComponent,
    },
    {
        path: 'invoices',
        component: InvoiceDownloadsComponent,
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'portal',
    },
    {
        path: '**',
        loadComponent: () => import('./../../../core/layout/not-found-shell/not-found-page').then(m => m.NotFoundPage),
    },
]
