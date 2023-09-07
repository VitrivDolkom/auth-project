import { useCallback, useMemo, useState } from 'react';

import { getDefaultObject } from './lib/focusObject';
import { isValidatedForm } from './lib/isValidatedForm';
import { getValidatedPhoneNumber } from './lib/phoneNumber/getValidatedPhoneNumber';
import { IUseValidateFormArgs } from './lib/types';

export function useValidateForm<T extends Record<string, string>, K extends string>({
  validateOnChange,
  initialValues,
  validateInputs,
  submitForm,
  onInvalidFormSubmit
}: IUseValidateFormArgs<T>) {
  const [firstSubmit, setFirstSubmit] = useState(false);
  const [firstChange, setFirstChange] = useState(false);
  const [values, setValues] = useState<T>(initialValues);
  const [focus, setFocus] = useState<T>(getDefaultObject<T>(initialValues));

  const errors = useMemo<Partial<T>>(() => (validateOnChange ? validateInputs(values) : {}), [values, firstSubmit]);

  const handleChange = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setFirstChange(true);

    const inputString = e.currentTarget.value.toString();
    const inputSelectionStart = e.currentTarget.selectionStart;
    const inputName = e.currentTarget.name as K;

    const newValue =
      e.currentTarget.type === 'tel' ? getValidatedPhoneNumber(inputString, inputSelectionStart) : inputString;

    if (Object.keys(values).indexOf(inputName) === -1) {
      throw new Error('Invalid input name');
    }

    setValues((prev: T) => {
      const newValues = prev;
      newValues[inputName] = newValue as T[K];

      return { ...newValues };
    });
  }, []);

  const handleFocus = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    const inputName = e.currentTarget.name as K;

    if (Object.keys(focus).indexOf(inputName) === -1) {
      throw new Error('Invalid input name');
    }

    setFocus((prev) => {
      const newValues = prev;
      newValues[inputName] = '.' as T[K];

      return { ...newValues };
    });
  }, []);

  const handleBlur = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    const inputName = e.currentTarget.name as K;

    if (Object.keys(focus).indexOf(inputName) === -1) {
      throw new Error('Invalid input name');
    }

    setFocus((prev) => {
      const newValues = prev;
      newValues[inputName] = '' as T[K];

      return { ...newValues };
    });
  }, []);

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setFirstSubmit(true);

      if (!isValidatedForm(errors) && !onInvalidFormSubmit) return;

      if ((!isValidatedForm(errors) && !!onInvalidFormSubmit) || (!firstChange && !!onInvalidFormSubmit)) {
        onInvalidFormSubmit();
        return;
      }

      submitForm(values);
    },
    [firstChange, submitForm, onInvalidFormSubmit]
  );

  return { values, errors, focus, handleChange, handleFocus, handleBlur, handleSubmit, firstSubmit };
}
