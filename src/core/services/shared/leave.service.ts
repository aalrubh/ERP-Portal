// src/app/features/leaves/data/leave.service.ts
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs';
import { Http } from '../http/http.service';
import {
  CreateLeavePayload,
  LeaveDto,
  LeaveListParams,
  UpdateLeavePayload,
} from './leave.types';

@Injectable({ providedIn: 'root' })
export class LeaveService {
  private http = inject(Http);

  list(params?: LeaveListParams) {
    return this.http
      .get<LeaveDto[]>('/leaves', { params })
      .pipe(map((items) => ({ items, total: items.length })));
  }

  getById(id: string) {
    return this.http.get<LeaveDto>(`/leaves/${id}`);
  }

  create(payload: CreateLeavePayload) {
    return this.http.post<LeaveDto>('/leaves', payload);
  }

  update(id: string, payload: UpdateLeavePayload) {
    return this.http.put<LeaveDto>(`/leaves/${id}`, payload);
  }

  delete(id: string) {
    return this.http.delete<void>(`/leaves/${id}`);
  }
}
