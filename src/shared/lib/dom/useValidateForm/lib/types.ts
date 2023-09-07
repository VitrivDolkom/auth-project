export interface IUseValidateFormArgs<T> {
  validateOnChange?: boolean;
  initialValues: T;
  validateInputs: (values: T) => Partial<T>;
  submitForm: (values: T) => void;
  onInvalidFormSubmit?: () => void;
}
