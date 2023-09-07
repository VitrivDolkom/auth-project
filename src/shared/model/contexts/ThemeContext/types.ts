export const OTheme = {
  light: 'light',
  dark: 'dark'
} as const;

export type Theme = (typeof OTheme)[keyof typeof OTheme];

export interface IThemeContext {
  theme: Theme;
  toggleTheme: () => void;
}
