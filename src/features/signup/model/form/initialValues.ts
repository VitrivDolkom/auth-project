import { routesPaths } from '@/shared/const/routes';
import { IFormBottomText, IInputInfo } from '@/shared/uikit';

import { ISignUpFormInitialValues } from '../types/validation';

export const inputs: IInputInfo[] = [
  { label: 'Phone number', name: 'phoneNumber', maxLength: 16, type: 'tel', isRequired: true },
  { label: 'Email', name: 'email', maxLength: 100, type: 'text', isRequired: true },
  { label: 'Password', name: 'password', maxLength: 64, type: 'password', isRequired: true },
  { label: 'Confirm password', name: 'confirmPassword', maxLength: 64, type: 'password', isRequired: true }
];

export const bottom: IFormBottomText[] = [
  { text: 'Already have an account? ', linkText: 'Login', linkTo: routesPaths.login }
];

export const initialValues: ISignUpFormInitialValues = {
  phoneNumber: '',
  email: '',
  password: '',
  confirmPassword: ''
};
