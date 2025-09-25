// src/app/features/absences/data/absence.service.ts
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs';
import { Http } from '../http/http.service';
import {
  AbsenceDto,
  AbsenceListParams,
  CreateAbsencePayload,
  UpdateAbsencePayload,
} from './absence.types';

@Injectable({ providedIn: 'root' })
export class AbsenceService {
  private http = inject(Http);

  list(params?: AbsenceListParams) {
    return this.http
      .get<AbsenceDto[]>('/absences', { params })
      .pipe(map((items) => ({ items, total: items.length })));
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
