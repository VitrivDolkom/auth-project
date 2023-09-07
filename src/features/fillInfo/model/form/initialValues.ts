import { IFormBottomText, IInputInfo } from '@/shared/uikit';

import { IProfileInfoFormInitialValues } from '../types/validation';

export const inputs: IInputInfo[] = [
  { label: 'Name', name: 'name', maxLength: 20, type: 'text', isRequired: true },
  { label: 'Surname', name: 'surname', maxLength: 20, type: 'text', isRequired: true },
  { label: 'Username', name: 'username', maxLength: 20, type: 'text', isRequired: true },
  { label: 'About', name: 'status', maxLength: 120, type: 'text', isRequired: true }
];

export const bottom: IFormBottomText[] = [
  {
    text: 'By tapping “Sign up” you agree to the',
    linkText: 'terms & conditions',
    linkTo: '/'
  }
];

export const initialValues: IProfileInfoFormInitialValues = {
  name: '',
  surname: '',
  username: '',
  status: ''
};
