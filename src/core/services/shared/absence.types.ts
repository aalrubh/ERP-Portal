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
