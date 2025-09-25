import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbsencesSummary } from './ui/absences-summary/absences-summary';

@Component({
	imports: [CommonModule, AbsencesSummary],
	selector: 'app-dashboard-dashboard',
	templateUrl: './dashboard.html',
	styleUrls: ['./dashboard.scss'],
	standalone: true
})

export class DashboardComponent {

}
