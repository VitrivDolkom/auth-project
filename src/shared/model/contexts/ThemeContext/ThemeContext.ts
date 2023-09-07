import { createContext } from 'react';

import { IThemeContext, OTheme } from './types';

export const ThemeContext = createContext<IThemeContext>({
  theme: OTheme.light,
  toggleTheme: () => {
    // setTheme((value) => (value == light ? dark : light));
  }
});
