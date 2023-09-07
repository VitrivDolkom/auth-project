import { createContext } from 'react';

import { IAuthContext } from './types';

export const AuthContext = createContext<IAuthContext>({
  isAuth: false,
  authme: () => {
    //
  },
  disauthme: () => {
    //
  }
});
