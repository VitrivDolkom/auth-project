import { passwordRegexp, phoneRegexp } from '@/shared/const/regexp';

import { ILoginFormValues } from '../types/validate';

export const getFormErrors = (values: ILoginFormValues): Partial<ILoginFormValues> => {
  const errors: Partial<ILoginFormValues> = {};
  let key: keyof ILoginFormValues;

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

  return errors;
};
