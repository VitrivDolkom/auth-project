import { ReactNode, useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { routesPaths } from '@/shared/const/routes';
import { getFromSessionStorage, setToSessionStorage } from '@/shared/lib/browserStorage';
import { to } from '@/shared/lib/requests';
import { AuthContext } from '@/shared/model/contexts';

import { AuthService } from '../api/auth.service';
import { ACCESS_TOKEN_UPDATE_TIME, IS_AUTH_KEY } from '../const/const';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuth, setIsAuth] = useState(getFromSessionStorage(IS_AUTH_KEY, false));
  const navigate = useNavigate();

  const authme = useCallback(() => {
    setIsAuth(true);
    setToSessionStorage(IS_AUTH_KEY, true);
    navigate(routesPaths.main);
  }, []);

  const disauthme = useCallback(async () => {
    await AuthService.logout();
    setIsAuth(false);
    setToSessionStorage(IS_AUTH_KEY, false);
    navigate(routesPaths.root);
  }, []);

  const updateRefreshToken = async () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [error, response] = await to(AuthService.refresh());
  };

  const getAccessToken = async () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [error, response] = await to(AuthService.token());
  };

  useEffect(() => {
    if (isAuth) {
      updateRefreshToken();

      const accessTokenInterval = setInterval(() => {
        getAccessToken();
      }, ACCESS_TOKEN_UPDATE_TIME);

      return () => {
        clearInterval(accessTokenInterval);
      };
    }

    return undefined;
  }, [isAuth]);

  return <AuthContext.Provider value={{ isAuth, authme, disauthme }}>{children}</AuthContext.Provider>;
};
