import { useContext } from 'react';

import { getPhoneNumber, useValidateForm } from '@/shared/lib/dom';
import { to } from '@/shared/lib/requests';
import { AuthContext } from '@/shared/model/contexts';
import { CustomForm } from '@/shared/uikit';
import { useFormMessage } from '@/shared/uikit/CustomForm/lib/useFormMessage';

import { LoginService } from '../api/login.service';
import { getFormErrors } from '../model/form/getFormErrors';
import { bottom, initialValues, inputs } from '../model/form/initialValues';
import { ILoginFormProps } from '../model/types/types';
import { ILoginFormValues } from '../model/types/validate';

export const LoginForm = ({ onRecoveryClick }: ILoginFormProps) => {
  const { message, setMessage, requestStatus, setRequestStatus } = useFormMessage();
  const { authme } = useContext(AuthContext);

  const onSubmit = async (formValues: ILoginFormValues) => {
    setMessage('Waiting ...');
    setRequestStatus('pending');

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [error, response] = await to(
      LoginService.login({ ...formValues, phoneNumber: getPhoneNumber(formValues.phoneNumber) })
    );

    if (error) {
      setMessage(error.response?.data.message || 'Something went wrong');
      setRequestStatus('error');
      return;
    }

    setRequestStatus('default');
    setMessage('Have done');
    authme();
  };

  const validForm = useValidateForm({
    validateOnChange: true,
    initialValues: initialValues,
    submitForm(values) {
      onSubmit(values);
    },
    validateInputs: getFormErrors,
    onInvalidFormSubmit: () => {
      setRequestStatus('error');
      setMessage('Invalid form values');
    }
  });

  return (
    <CustomForm
      validForm={validForm}
      initial={initialValues}
      title="Welcome back"
      subtitle="Login to your account"
      inputs={inputs}
      message={message}
      requestStatus={requestStatus}
      preBottom="Forgot Password?"
      onPreBottomClick={onRecoveryClick}
      buttonText="Login"
      bottom={bottom}
    />
  );
};
