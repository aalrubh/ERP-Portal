// src/app/features/projects/data/projects-tasks.service.ts
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs';
import { Http } from '../http/http.service';
import {
  CreateProjectPayload,
  CreateTaskPayload,
  ProjectDto,
  ProjectListParams,
  TaskDto,
  TaskListParams,
  UpdateProjectPayload,
  UpdateTaskPayload,
} from './projects.types';

@Injectable({ providedIn: 'root' })
export class ProjectsTasksService {
  private http = inject(Http);

  listProjects(params?: ProjectListParams) {
    return this.http
      .get<ProjectDto[]>('/projects', { params })
      .pipe(map((items) => ({ items, total: items.length })));
  }

  projectById(id: string) {
    return this.http.get<ProjectDto>(`/projects/${id}`);
  }

  createProject(payload: CreateProjectPayload) {
    return this.http.post<ProjectDto>('/projects', payload);
  }

  updateProject(id: string, payload: UpdateProjectPayload) {
    return this.http.put<ProjectDto>(`/projects/${id}`, payload);
  }

  deleteProject(id: string) {
    return this.http.delete<void>(`/projects/${id}`);
  }

  listTasks(params?: TaskListParams) {
    return this.http
      .get<TaskDto[]>('/tasks', { params })
      .pipe(map((items) => ({ items, total: items.length })));
  }

  taskById(id: string) {
    return this.http.get<TaskDto>(`/tasks/${id}`);
  }

  createTask(payload: CreateTaskPayload) {
    return this.http.post<TaskDto>('/tasks', payload);
  }

  updateTask(id: string, payload: UpdateTaskPayload) {
    return this.http.put<TaskDto>(`/tasks/${id}`, payload);
  }

  deleteTask(id: string) {
    return this.http.delete<void>(`/tasks/${id}`);
  }
}
