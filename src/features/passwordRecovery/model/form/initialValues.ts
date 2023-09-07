import { IInputInfo } from '@/shared/uikit';

import { IPasswordRecoveryFormValues } from '../types/validate';

export const inputs: IInputInfo[] = [
  { label: 'Your email', name: 'email', maxLength: 100, type: 'text', isRequired: true }
];

export const initialValues: IPasswordRecoveryFormValues = {
  email: ''
};
