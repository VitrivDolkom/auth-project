import { FormMessageStatus } from '@/shared/uikit';

import { IProfileInfoFormInitialValues } from './validation';

export interface IFillProfileInfoProps {
  onSubmit: (formValue: IProfileInfoFormInitialValues) => void;
  onErrorSubmit: () => void;
  onComeBackClick: () => void;
  message: string;
  requestStatus: FormMessageStatus;
}
