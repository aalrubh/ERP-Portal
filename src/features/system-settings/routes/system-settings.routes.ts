import { Routes } from '@angular/router';
import { LocalizationComponent } from '../pages/localization/localization';
import { EmailAndNotificationSettingsComponent } from '../pages/email-and-notification-settings/email-and-notification-settings';
import { ThemeAppearanceSettingsComponent } from '../pages/theme-appearance-settings/theme-appearance-settings';

export const routes: Routes = [
    {
        path: 'localization',
        component: LocalizationComponent,
    },
    {
        path: 'notificationSettings',
        component: EmailAndNotificationSettingsComponent,
    },
    {
        path: 'theme',
        component: ThemeAppearanceSettingsComponent,
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/localization',
    },
    {
        path: '**',
        loadComponent: () => import('./../../../core/layout/not-found-shell/not-found-page').then(m => m.NotFoundPage),
    },
]