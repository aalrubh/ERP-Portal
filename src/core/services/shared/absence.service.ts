import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs';
import { Http } from '../http/http.service';

@Injectable ({ 
	providedIn: 'root' 
})

export class AbsenceService {
	private http = inject(Http);

	list() {
		return this.http.get<AbsenceDto[]>('/absences').pipe(map((items) => ({ items, total: items.length })));
	}

	getById(id: string) {
		return this.http.get<AbsenceDto>(`/absences/${id}`);
	}

	create(payload: CreateAbsencePayload) {
		return this.http.post<AbsenceDto>('/absences', payload);
	}

	update(id: string, payload: UpdateAbsencePayload) {
		return this.http.put<AbsenceDto>(`/absences/${id}`, payload);
	}

	delete(id: string) {
		return this.http.delete<void>(`/absences/${id}`);
	}
}

export interface AbsenceDto {
  id: string;
  employeeId: string;
  date: string; // ISO date
  hours?: number;
  reason?: string;
  recordedBy?: string;
  createdAt: string; // ISO
}

export interface AbsenceListParams {
  page?: number;
  size?: number;
  q?: string;
  employeeId?: string;
  from?: string; // ISO
  to?: string; // ISO
}

export type CreateAbsencePayload = Omit<AbsenceDto, 'id' | 'createdAt'>;
export type UpdateAbsencePayload = Partial<Omit<AbsenceDto, 'id' | 'createdAt'>>;
