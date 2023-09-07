import { type IFormButtonProps } from '../types';

import s from '../style.module.scss';

export const DefaultFormButton = ({ name, action, type }: IFormButtonProps) => (
  <button
    onClick={action !== undefined ? action : () => ({})}
    className={s.button}
    type={type !== undefined ? type : 'button'}
  >
    <span className={s.button__text}>{name}</span>
  </button>
);
