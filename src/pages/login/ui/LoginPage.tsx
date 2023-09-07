import { useState } from 'react';

import { LoginForm } from '@/features/login';
import { PasswordRecovery } from '@/features/passwordRecovery';
import { ToggleTheme } from '@/features/theme';

import s from './style.module.scss';

export const LoginPage = () => {
  const [isForgot, setIsForgot] = useState(false);

  const onBackToLogin = () => {
    setIsForgot(false);
  };

  const onRecoveryClick = () => {
    setIsForgot(true);
  };

  return (
    <section className={s.login}>
      {isForgot ? <PasswordRecovery onBackToLogin={onBackToLogin} /> : <LoginForm onRecoveryClick={onRecoveryClick} />}
      <ToggleTheme />
    </section>
  );
};
