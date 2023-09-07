import { ReactNode, useCallback, useEffect, useState } from 'react';

import { Theme, ThemeContext } from '@/shared/model/contexts';

import { THEME_KEY } from '../const/const';
import { getSavedTheme } from '../lib/getSavedTheme';

export const ThemeProvider = ({
  children,
  defaultTheme = 'light'
}: {
  children: ReactNode;
  defaultTheme?: Theme;
}) => {
  const [theme, setTheme] = useState(getSavedTheme(THEME_KEY) || defaultTheme);
  const toggleTheme = useCallback(() => setTheme((value) => (value === 'light' ? 'dark' : 'light')), []);

  useEffect(() => {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};
