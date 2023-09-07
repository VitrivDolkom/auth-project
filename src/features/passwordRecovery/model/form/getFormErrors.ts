import { emailRegexp } from '@/shared/const/regexp';

import { IPasswordRecoveryFormValues } from '../types/validate';

export const getFormErrors = (values: IPasswordRecoveryFormValues): Partial<IPasswordRecoveryFormValues> => {
  const errors: Partial<IPasswordRecoveryFormValues> = {};
  let key: keyof IPasswordRecoveryFormValues;

  for (key in values) {
    if (values[key] === '' && key !== 'email') {
      errors[key] = 'Required';
    }
  }

  if (!emailRegexp.test(values.email) && values.email !== '') {
    errors.email = 'Invalid email';
  }

  return errors;
};
