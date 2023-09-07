import { AxiosResponse } from 'axios';

import { authInstance } from '@/shared/api';

import { ILoginFormValues } from '../model/types/validate';

export const LoginService = {
  async login(loginForm: ILoginFormValues) {
    return await authInstance.post<ILoginFormValues, AxiosResponse<null>>('/login', loginForm);
  }
};
