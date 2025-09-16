import { Routes } from '@angular/router';
import { ProjectDashboardComponent } from '../pages/project-dashboard/project-dashboard';
import { GanttChartsComponent } from '../pages/gantt-charts/gantt-charts';
import { MilestonesAndDeadlinesComponent } from '../pages/milestones-and-deadlines/milestones-and-deadlines';

export const routes: Routes = [
    {
        path: 'dashboard',
        component: ProjectDashboardComponent,
    },
    {
        path: 'gantt',
        component: GanttChartsComponent,
    },
    {
        path: 'milestones',
        component: MilestonesAndDeadlinesComponent,
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/dashboard',
    },
    {
        path: '**',
        loadComponent: () => import('./../../../core/layout/not-found-shell/not-found-page').then(m => m.NotFoundPage),
    },
]