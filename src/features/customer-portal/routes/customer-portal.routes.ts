import { Routes } from '@angular/router';
import { SelfServicePortalComponent } from '../pages/self-service-portal/self-service-portal';
import { OrderTrackingComponent } from '../pages/order-tracking/order-tracking';
import { InvoiceDownloadsComponent } from '../pages/invoice-downloads/invoice-downloads';

export const routes: Routes = [
    {
        path: 'portal',
        title: 'Self Service Portal',
        component: SelfServicePortalComponent,
    },
    {
        path: 'orders',
        title: 'Order Tracking',
        component: OrderTrackingComponent,
    },
    {
        path: 'invoices',
        title: 'Invoice Downloads',
        component: InvoiceDownloadsComponent,
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'portal',
    },
    {
        path: '**',
        title: 'Page Not Found',
        loadComponent: () => import('./../../../core/layout/not-found-shell/not-found-page').then(m => m.NotFoundPage),
    },
]
