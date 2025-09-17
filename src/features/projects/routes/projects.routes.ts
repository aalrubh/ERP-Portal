import { Routes } from '@angular/router';
import { ProjectDashboardComponent } from '../pages/project-dashboard/project-dashboard';
import { GanttChartsComponent } from '../pages/gantt-charts/gantt-charts';
import { MilestonesAndDeadlinesComponent } from '../pages/milestones-and-deadlines/milestones-and-deadlines';

export const routes: Routes = [
    {
        path: 'dashboard',
        title: 'Projects Dashboard',
        component: ProjectDashboardComponent,
    },
    {
        path: 'gantt',
        title: 'Gantt Charts',
        component: GanttChartsComponent,
    },
    {
        path: 'milestones',
        title: 'Milestones and Deadlines',
        component: MilestonesAndDeadlinesComponent,
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard',
    },
    {
        path: '**',
        title: 'Page Not Found',
        loadComponent: () => import('./../../../core/layout/not-found-shell/not-found-page').then(m => m.NotFoundPage),
    },
]