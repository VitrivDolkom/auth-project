import { RoutePath } from '@/shared/const/routes';
import { InputType, useValidateForm } from '@/shared/lib/dom';

import { FormMessageStatus } from '../../FormMessage/status';

export interface IFormBottomText {
  text: string;
  linkText: string;
  linkTo: RoutePath;
}

export interface IInputInfo {
  label: string;
  name: string;
  maxLength: number;
  type: InputType;
  isRequired: boolean;
}

export interface IFormProps<T> {
  initial: T;
  title: string;
  subtitle: string;
  inputs: IInputInfo[];
  validForm: ReturnType<typeof useValidateForm>;
  message: string;
  requestStatus: FormMessageStatus;
  preBottom?: string;
  onPreBottomClick?: () => void;
  buttonText: string;
  bottom?: IFormBottomText[];
}
