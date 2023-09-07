import { AxiosResponse } from 'axios';

import { authInstance } from '@/shared/api';

export const AuthService = {
  async token() {
    return await authInstance.post<null, AxiosResponse<null>>('/token');
  },

  async refresh() {
    return await authInstance.post<null, AxiosResponse<null>>('/refresh');
  },

  async logout() {
    return await authInstance.post<null, AxiosResponse<null>>('/logout');
  },

  async main() {
    return await authInstance.post<null, AxiosResponse<null>>('/main');
  }
};
