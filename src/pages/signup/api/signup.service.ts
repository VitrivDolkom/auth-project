import { AxiosResponse } from 'axios';

import { authInstance } from '@/shared/api';

import { IRegisterFormValues } from '../model/type/types';

export const SignupService = {
  async register(signupForm: IRegisterFormValues) {
    return await authInstance.post<IRegisterFormValues, AxiosResponse<null>>('/register', signupForm, {
      headers: { Cookie: '' }
    });
  }
};
