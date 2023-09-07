import { nameRegexp, statusRegexp, surnameRegexp, usernameRegexp } from '@/shared/const/regexp';
import { setToSessionStorage } from '@/shared/lib/browserStorage';

import { PROFILE_FORM_KEY } from '../../const/const';
import { IProfileInfoFormInitialValues } from '../types/validation';

export const getFormErrors = (values: IProfileInfoFormInitialValues) => {
  setToSessionStorage(PROFILE_FORM_KEY, values);

  const errors: Partial<IProfileInfoFormInitialValues> = {};
  let key: keyof IProfileInfoFormInitialValues;

  for (key in values) {
    if (values[key] === '' && key !== 'status') {
      errors[key] = 'Required';
    }
  }

  if (values.name && values.name[0].toUpperCase() !== values.name[0]) {
    errors.name = `use first '${values.name[0].toUpperCase()}' instead of '${values.name[0]}'`;
  } else if (!nameRegexp.test(values.name) && values.name !== '') {
    errors.name = 'Invalid name';
  } else if (values.name.length > 20) {
    errors.name = 'max length: 20';
  }

  if (values.surname && values.surname[0].toUpperCase() !== values.surname[0]) {
    errors.surname = `use first '${values.surname[0].toUpperCase()}' instead of '${values.surname[0]}'`;
  } else if (!surnameRegexp.test(values.surname) && values.surname !== '') {
    errors.surname = 'Invalid surname';
  } else if (values.surname.length > 20) {
    errors.surname = 'max length: 20';
  }

  if (!usernameRegexp.test(values.username) && values.username !== '') {
    errors.username = 'Invalid user name';
  } else if ((values.username.length > 20 || values.username.length < 5) && values.username !== '') {
    errors.username = 'length must be from 5 to 20';
  }

  if (!statusRegexp.test(values.status)) {
    errors.status = 'Invalid status';
  } else if (values.status.length > 120) {
    errors.status = 'max length 120';
  }

  return errors;
};
