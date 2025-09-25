// src/app/features/messages/data/messages.service.ts
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs';
import { Http } from '../http/http.service';
import {
  CreateMessagePayload,
  MessageDto,
  MessageListParams,
  UpdateMessagePayload,
} from './message.types';

@Injectable({ providedIn: 'root' })
export class MessagesService {
  private http = inject(Http);

  list(params?: MessageListParams) {
    return this.http
      .get<MessageDto[]>('/messages', { params })
      .pipe(map((items) => ({ items, total: items.length })));
  }

  getById(id: string) {
    return this.http.get<MessageDto>(`/messages/${id}`);
  }

  create(payload: CreateMessagePayload) {
    return this.http.post<MessageDto>('/messages', payload);
  }

  update(id: string, payload: UpdateMessagePayload) {
    return this.http.put<MessageDto>(`/messages/${id}`, payload);
  }

  delete(id: string) {
    return this.http.delete<void>(`/messages/${id}`);
  }
}
