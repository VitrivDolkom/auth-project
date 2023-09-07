import { emailRegexp, passwordRegexp, phoneRegexp } from '@/shared/const/regexp';

import { ISignUpFormInitialValues } from '../types/validation';

export const getFormErrors = (values: ISignUpFormInitialValues): Partial<ISignUpFormInitialValues> => {
  const errors: Partial<ISignUpFormInitialValues> = {};

  let key: keyof ISignUpFormInitialValues;

  for (key in values) {
    if (values[key] === '' && key !== 'email') {
      errors[key] = 'Required';
    }
  }

  if (!phoneRegexp.test(values.phoneNumber) && values.phoneNumber !== '') {
    errors.phoneNumber = '+7 xxx xxx xx xx';
  }

  if ((values.password.length < 8 || values.password.length > 64) && values.password !== '') {
    errors.password = 'length must be from 8 to 64';
  } else if (!passwordRegexp.test(values.password) && values.password !== '') {
    errors.password = 'Invalid password';
  }

  if (!emailRegexp.test(values.email) && values.email !== '') {
    errors.email = 'Invalid email';
  }

  if (values.password !== values.confirmPassword && values.confirmPassword !== '') {
    errors.confirmPassword = 'passwords should be the same';
  }

  return errors;
};
