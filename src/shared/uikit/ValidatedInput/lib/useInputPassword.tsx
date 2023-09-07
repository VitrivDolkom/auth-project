import { useCallback, useContext, useState } from 'react';

import { OTheme, ThemeContext } from '@/shared/model/contexts';

import hide from '../ui/img/hide.svg';
import hide_dark from '../ui/img/hide_dark.png';
import show from '../ui/img/show.svg';
import show_dark from '../ui/img/show_dark.png';
import s from '../ui/style.module.scss';

interface Props {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | undefined;
}

export const useInputPassword = ({ onChange, value }: Props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordLength, setPasswordLength] = useState(value?.length || 0);
  const { theme } = useContext(ThemeContext);

  const toggleShowPassword = useCallback(() => {
    setShowPassword((prev) => !prev);
  }, []);

  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordLength(event.target.value.length);
    onChange(event);
  }, []);

  const PasswordButton = (
    <button
      onClick={(e) => {
        e.preventDefault();
        toggleShowPassword();
      }}
      className={s.show_hide}
    >
      {showPassword ? (
        <img src={theme === OTheme.light ? hide : hide_dark} />
      ) : (
        <img src={theme === OTheme.light ? show : show_dark} />
      )}
    </button>
  );

  return {
    toggleShowPassword,
    showPassword,
    PasswordButton,
    passwordLength,
    setPasswordLength,
    handleChange
  };
};
