import { FormMessage } from '../../FormMessage/FormMessage';
import { IValidatedInputProps } from '../lib/types';
import { useInputPassword } from '../lib/useInputPassword';

import s from './style.module.scss';

export const ValidatedInput = (props: IValidatedInputProps) => {
  const { label, type, name, value, onChange, onFocus, onBlur, error, showError, focused, maxLength } = props;

  const { showPassword, PasswordButton, passwordLength, handleChange } = useInputPassword({
    onChange,
    value
  });

  return (
    <div className={s.inputBlock}>
      <div className={s.inputBlock__content}>
        <input
          placeholder={label}
          value={value}
          name={name}
          onChange={handleChange}
          onFocus={onFocus}
          onBlur={onBlur}
          className={[s.input, showError ? s.error : '', focused ? s.focused : ''].join(' ')}
          type={showPassword ? 'text' : type}
          maxLength={maxLength}
        />

        {type === 'password' && PasswordButton}
      </div>

      <div className={s.inputBlock__bottom}>
        <FormMessage text={showError ? error || '' : ''} status={'error'} />
        {type === 'password' && (
          <div className={s.passwordLength}>
            {passwordLength}/{maxLength}
          </div>
        )}
      </div>
    </div>
  );
};
