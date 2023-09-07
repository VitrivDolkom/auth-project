import { ISignUpFormInitialValues } from './validation';

export interface ISignUpFormProps {
  onSubmit: (formValues: ISignUpFormInitialValues) => void;
}
