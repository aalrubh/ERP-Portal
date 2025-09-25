export type TaskStatus = 'todo' | 'in_progress' | 'blocked' | 'done';

export interface ProjectDto {
  id: string;
  name: string;
  code?: string;
  description?: string;
  ownerId?: string;
  startDate?: string;
  endDate?: string;
  createdAt: string;
  updatedAt?: string;
}

export interface TaskDto {
  id: string;
  projectId: string;
  title: string;
  description?: string;
  assigneeId?: string;
  status: TaskStatus;
  priority?: number;
  dueDate?: string;
  createdAt: string;
  updatedAt?: string;
}

export interface ProjectListParams {
  page?: number;
  size?: number;
  q?: string;
  ownerId?: string;
  activeOnly?: boolean;
}

export interface TaskListParams {
  page?: number;
  size?: number;
  q?: string;
  projectId?: string;
  assigneeId?: string;
  status?: TaskStatus;
  dueBefore?: string;
  dueAfter?: string;
}

export type CreateProjectPayload = Omit<ProjectDto, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProjectPayload = Partial<Omit<ProjectDto, 'id' | 'createdAt'>>;
export type CreateTaskPayload = Omit<TaskDto, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateTaskPayload = Partial<Omit<TaskDto, 'id' | 'createdAt'>>;
