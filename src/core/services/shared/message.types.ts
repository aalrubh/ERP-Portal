export interface MessageAttachmentDto {
  name: string;
  url?: string;
  size?: number;
  type?: string;
}

export interface MessageDto {
  id: string;
  threadId?: string;
  to: string[];
  cc?: string[];
  bcc?: string[];
  from: string;
  subject?: string;
  body: string;
  attachments?: MessageAttachmentDto[];
  createdAt: string;
  read?: boolean;
}

export interface MessageListParams {
  page?: number;
  size?: number;
  q?: string;
  threadId?: string;
  to?: string;
  from?: string;
  unreadOnly?: boolean;
}

export type CreateMessagePayload = Omit<MessageDto, 'id' | 'createdAt'>;
export type UpdateMessagePayload = Partial<Omit<MessageDto, 'id' | 'createdAt'>>;
