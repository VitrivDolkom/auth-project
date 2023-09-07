import { useContext } from 'react';

import { ThemeContext, OTheme } from '@/shared/model/contexts';

import Dark from './img/dark.png';
import Light from './img/light.png';
import s from './style.module.scss';

export const ToggleTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={s.btn}>
      <button onClick={toggleTheme}>{theme === OTheme.light ? <img src={Dark} /> : <img src={Light} />}</button>
    </div>
  );
};
