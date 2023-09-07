import { useContext } from 'react';

import { userApi, userSlice } from '@/entities/user';
import { AuthContext } from '@/shared/model/contexts';
import { useAppDispatch, useAppSelector } from '@/shared/model/store/hooks';

import s from './style.module.scss';

export const MainPage = () => {
  const { disauthme } = useContext(AuthContext);

  const onLogoutClick = async () => {
    await disauthme();
  };

  const { count } = useAppSelector((state) => state.user);
  const { increment, resetCount } = userSlice.actions;
  const dispatch = useAppDispatch();

  const { data, isError, isLoading, isSuccess } = userApi.useFetchUserByIdQuery(count);

  return (
    <main>
      <h1>{count}</h1>
      <button className={s.btn} onClick={() => dispatch(increment(1))}>
        Increment
      </button>
      <button className={s.btn} onClick={onLogoutClick}>
        Logout
      </button>
      <button className={s.btn} onClick={() => dispatch(resetCount())}>
        Reset count
      </button>
      <div className="">
        <h1>Fetched Data: {isSuccess && data.email}</h1>
        {isLoading && <h1>Загрузка ...</h1>}
        {isError && <h1>Ошибка ...</h1>}
      </div>
    </main>
  );
};
