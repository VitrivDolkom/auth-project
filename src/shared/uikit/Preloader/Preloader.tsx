import ghost from './img/ghost.gif';
import s from './style.module.scss';

export const Preloader = () => (
  <div className={s.preloader}>
    <img src={ghost} alt="загрузка" />
  </div>
);
