import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { AbsenceService } from '@core/services/shared/absence.service';
import { AbsenceDto } from '@core/services/shared/absence.service';
import { Subscription } from 'rxjs';
import { DxDataGridComponent } from "devextreme-angular/ui/data-grid";
import { LeaveDto } from '@core/services/shared/leave.types';
import { LeaveService } from '@core/services/shared/leave.service';

@Component({
	selector: 'portal-absences-summary',
	imports: [DxDataGridComponent],
	templateUrl: './absences-summary.html',
	styleUrl: './absences-summary.scss'
})
export class AbsencesSummary implements OnInit, OnDestroy {
	private readonly absenceService = inject(AbsenceService);
	private readonly leaveService = inject(LeaveService);

	private absencesSubscription?: Subscription;
	private leavesSubscription?: Subscription;

	absences: { items: AbsenceDto[]; count: number } = { items: [], count: 0 };
	leaves: { items: LeaveDto[]; count: number } = { items: [], count: 0 };

	ngOnInit(): void {
		this.absencesSubscription = this.absenceService.list().subscribe(({ items, total }) =>
			this.absences = this.formatAbsences(items, total)
		);
		this.leavesSubscription = this.leaveService.list().subscribe(({ items, total }) =>
			this.leaves = this.formatLeaves(items, total)
		);
	}

	ngOnDestroy(): void {
		this.absencesSubscription?.unsubscribe();
		this.leavesSubscription?.unsubscribe();
	}
	private formatAbsences(items: any[], total: number) {
		return {
			items: items.map(item => ({
				id: item.id,
				employeeId: item.employeeId,
				date: item.date,
				hours: item.hours,
				reason: item.reason,
				recordedBy: item.recordedBy,
				createdAt: item.createdAt,
			})),
			count: total,
		};
	}
	private formatLeaves(items: any[], total: number) {
		return {
			items: items.map(item => ({
				id: item.id,
				employeeId: item.employeeId,
				reason: item.reason,
				createdAt: item.createdAt,
				type: item.type,
				startDate: item.startDate,
				endDate: item.endDate,
				status: item.LeaveStatus,
				updatedAt: item.updatedAt
			})),
			count: total,
		};
	}


}
