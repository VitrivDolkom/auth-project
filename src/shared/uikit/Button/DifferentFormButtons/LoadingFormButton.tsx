import s from '../style.module.scss';

export const LoadingFormButton = () => (
  <button className={s.button}>
    <span className={s.loader}></span>
  </button>
);
