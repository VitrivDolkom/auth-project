import { useValidateForm } from '@/shared/lib/dom';
import { to } from '@/shared/lib/requests';
import { CustomForm, useFormMessage } from '@/shared/uikit';

import { RecoveryService } from '../api/recovery.service';
import { getFormErrors } from '../model/form/getFormErrors';
import { initialValues, inputs } from '../model/form/initialValues';
import { IPasswordRecoveryFormValues } from '../model/types/validate';

interface Props {
  onBackToLogin: () => void;
}

export const PasswordRecovery = ({ onBackToLogin }: Props) => {
  const { message, setMessage, requestStatus, setRequestStatus } = useFormMessage();

  const onSubmit = async (email: IPasswordRecoveryFormValues) => {
    setMessage('Waiting ...');
    setRequestStatus('pending');

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [error, response] = await to(RecoveryService.passwordRecovery(email));

    if (error) {
      setRequestStatus('error');
      setMessage(error.response?.data.message || 'Something went wrong');
      return;
    }
  };

  const onErrorSubmit = () => {
    setRequestStatus('error');
    setMessage('Invalid form values');
  };

  const validForm = useValidateForm({
    validateOnChange: true,
    initialValues: initialValues,
    submitForm(values) {
      onSubmit(values);
    },
    validateInputs: getFormErrors,
    onInvalidFormSubmit: onErrorSubmit
  });

  return (
    <CustomForm
      initial={initialValues}
      validForm={validForm}
      title="Forgot password"
      subtitle="Please enter your email address. You will receive a link to create a new password via email"
      buttonText="Send"
      inputs={inputs}
      message={message}
      requestStatus={requestStatus}
      preBottom=" Back to Login"
      onPreBottomClick={onBackToLogin}
    />
  );
};
