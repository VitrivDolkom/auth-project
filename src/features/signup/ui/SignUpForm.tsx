import { useValidateForm } from '@/shared/lib/dom';
import { CustomForm } from '@/shared/uikit';
import { useFormMessage } from '@/shared/uikit/CustomForm/lib/useFormMessage';

import { getFormErrors } from '../model/form/getFormErrors';
import { bottom, initialValues, inputs } from '../model/form/initialValues';
import { ISignUpFormProps } from '../model/types/types';

export const SignUpForm = ({ onSubmit }: ISignUpFormProps) => {
  const { message, setMessage, requestStatus, setRequestStatus } = useFormMessage();

  const validForm = useValidateForm({
    validateOnChange: true,
    initialValues: initialValues,
    validateInputs: getFormErrors,
    submitForm: (values) => {
      onSubmit(values);
    },
    onInvalidFormSubmit: () => {
      setRequestStatus('error');
      setMessage('Invalid form values');
    }
  });

  return (
    <CustomForm
      initial={initialValues}
      validForm={validForm}
      title="Create an account"
      subtitle="Wanna join us? Create your account!"
      inputs={inputs}
      message={message}
      requestStatus={requestStatus}
      buttonText="Continue"
      bottom={bottom}
    />
  );
};
