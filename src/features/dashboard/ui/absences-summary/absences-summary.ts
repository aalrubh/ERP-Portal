import { JsonPipe } from '@angular/common';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { AbsenceService } from '@core/services/shared/absence.service';
import { AbsenceDto } from '@core/services/shared/absence.types';
import { Subscription } from 'rxjs';

@Component({
	selector: 'portal-absences-summary',
	imports: [JsonPipe],
	templateUrl: './absences-summary.html',
	styleUrl: './absences-summary.scss'
})
export class AbsencesSummary implements OnInit, OnDestroy {
	private readonly absenceService = inject(AbsenceService);

	private absencesSubscription?: Subscription;

	absences: { items: AbsenceDto[]; count: number } = { items: [], count: 0 };

	ngOnInit(): void {
		this.absencesSubscription = this.absenceService.list().subscribe(({ items, total }) => {
			this.absences = {
				items,
				count: total,
			};
		});
	}

	ngOnDestroy(): void {
		this.absencesSubscription?.unsubscribe();
	}
}
