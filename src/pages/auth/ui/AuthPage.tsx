import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthService } from '@/entities/auth';
import { routesPaths } from '@/shared/const/routes';
import { useAsync } from '@/shared/lib/requests';
import { AuthContext } from '@/shared/model/contexts';
import { Preloader } from '@/shared/uikit';

import { ASYNC_DURATION } from '../model/const/const';

import s from './style.module.scss';

export const AuthPage = () => {
  const { loading, error, isSuccess } = useAsync({
    asyncFunction: AuthService.main,
    duration: ASYNC_DURATION
  });

  const { isAuth, authme } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      navigate(routesPaths.login);
    }

    if (isSuccess) {
      authme();
    }
  }, [isSuccess, error]);

  useEffect(() => {
    if (isAuth) {
      navigate(routesPaths.main);
    }
  }, [isAuth]);

  return <div className={s.auth}>{loading && <Preloader />}</div>;
};
