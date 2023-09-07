import { FormLinkToPage } from '@/shared/uikit';

import testQR from './img/testQR.png';
import s from './style.module.scss';

export const LoginQR = () => (
  <section className={s.loginQR}>
    <div className={s.loginQR__content}>
      <div className={s.loginQR__image}>
        <img src={testQR} alt="QR" />
      </div>
      <h2 className={s.loginQR__title}>Login with QR</h2>
      <p className={s.loginQR__subtitle}>Scan QR code with the mobile app to login</p>
      <p className={s.loginQR__link}>
        <FormLinkToPage to="/login" text="Login with phone and password" />
      </p>
    </div>
  </section>
);
