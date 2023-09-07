import { AxiosResponse } from 'axios';

import { authInstance } from '@/shared/api';

import { IPasswordRecoveryFormValues } from '../model/types/validate';

export const RecoveryService = {
  async passwordRecovery(email: IPasswordRecoveryFormValues) {
    return await authInstance.post<IPasswordRecoveryFormValues, AxiosResponse<null>>('/recovery', email);
  }
};
