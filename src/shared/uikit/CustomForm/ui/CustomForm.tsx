import { FormButton } from '../../Button/FormButton';
import { FormLinkToPage } from '../../FormLinkToPage/FormLinkToPage';
import { FormMessage } from '../../FormMessage/FormMessage';
import { ValidatedInput } from '../../ValidatedInput/ui/ValidatedInput';
import { type IFormProps } from '../lib/types';

import s from './style.module.scss';

export const CustomForm = <T,>(props: IFormProps<T>) => {
  const {
    title,
    subtitle,
    inputs,
    validForm,
    message,
    requestStatus,
    preBottom,
    onPreBottomClick,
    buttonText,
    bottom
  } = props;

  return (
    <form className={s.form} onSubmit={validForm.handleSubmit}>
      <h1 className={s.form__title}>{title}</h1>
      <h3 className={s.form__subtitle}>{subtitle}</h3>

      {inputs.map((inp, index) => {
        const showError =
          validForm.errors[inp.name] !== '' &&
          validForm.errors[inp.name] !== undefined &&
          (validForm.values[inp.name] !== '' || (inp.isRequired && validForm.firstSubmit));

        return (
          <ValidatedInput
            key={index}
            label={inp.label}
            name={inp.name}
            type={inp.type}
            onChange={validForm.handleChange}
            onFocus={validForm.handleFocus}
            onBlur={validForm.handleBlur}
            value={validForm.values[inp.name]}
            error={validForm.errors[inp.name]}
            showError={showError}
            focused={validForm.focus[inp.name] !== ''}
            maxLength={inp.maxLength}
          />
        );
      })}

      <div className={s.form__topLoginBtn}>
        <FormMessage text={message} status={requestStatus} />
        <div onClick={onPreBottomClick} className={s.form__forgotPassword}>
          {preBottom}
        </div>
      </div>

      <FormButton name={buttonText} type={'submit'} isLoading={requestStatus === 'pending'} />

      {bottom !== undefined
        ? bottom.map((line, index) => (
          <p key={index} className={[s.form__registration, s.form__link].join(' ')}>
            {line.text} <FormLinkToPage to={line.linkTo} text={line.linkText} />
          </p>
        ))
        : ''}
    </form>
  );
};
