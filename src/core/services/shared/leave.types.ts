export type LeaveStatus = 'pending' | 'approved' | 'rejected' | 'cancelled';

export interface LeaveDto {
  id: string;
  employeeId: string;
  type: 'annual' | 'sick' | 'unpaid' | string;
  startDate: string;
  endDate: string;
  reason?: string;
  status: LeaveStatus;
  createdAt: string;
  updatedAt?: string;
}

export interface LeaveListParams {
  page?: number;
  size?: number;
  q?: string;
  employeeId?: string;
  status?: LeaveStatus;
  from?: string;
  to?: string;
}

export type CreateLeavePayload = Omit<LeaveDto, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateLeavePayload = Partial<Omit<LeaveDto, 'id' | 'createdAt'>>;
