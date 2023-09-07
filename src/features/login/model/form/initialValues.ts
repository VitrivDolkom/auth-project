import { routesPaths } from '@/shared/const/routes';
import { IFormBottomText, IInputInfo } from '@/shared/uikit';

import { ILoginFormValues } from '../types/validate';

export const inputs: IInputInfo[] = [
  { label: 'Phone number', name: 'phoneNumber', maxLength: 16, type: 'tel', isRequired: true },
  { label: 'Password', name: 'password', maxLength: 60, type: 'password', isRequired: true }
];

export const bottom: IFormBottomText[] = [
  { text: 'Not registered yet? ', linkText: 'Create an account', linkTo: routesPaths.signup },
  { text: 'You can ', linkText: 'log in with a QR-code', linkTo: routesPaths.qr }
];

export const initialValues: ILoginFormValues = {
  phoneNumber: '',
  password: ''
};
