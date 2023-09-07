export const OFormMessageStatus = {
  default: 'default',
  pending: 'pending',
  error: 'error'
} as const;

export type FormMessageStatus = (typeof OFormMessageStatus)[keyof typeof OFormMessageStatus];
