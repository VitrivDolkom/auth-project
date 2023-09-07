import { Theme } from '@/shared/model/contexts';

export const getSavedTheme = (key: string): Theme => localStorage.getItem(key) as Theme;
