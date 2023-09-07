import { useContext, useState } from 'react';

import { FillProfileInfo, type IProfileInfoFormInitialValues } from '@/features/fillInfo';
import { type ISignUpFormInitialValues, SignUpForm } from '@/features/signup';
import { ToggleTheme } from '@/features/theme';
import { getFromSessionStorage, setToSessionStorage } from '@/shared/lib/browserStorage';
import { getPhoneNumber } from '@/shared/lib/dom';
import { to } from '@/shared/lib/requests';
import { AuthContext } from '@/shared/model/contexts';
import { useFormMessage } from '@/shared/uikit';

import { SignupService } from '../api/signup.service';
import { LOCAL_STORAGE_CONTINUE_SIGN_UP_KEY } from '../const/const';
import { type IRegisterFormValues } from '../model/type/types';

import s from './style.module.scss';

export const SignUpPage = () => {
  const [isContinued, setIsContinued] = useState(getFromSessionStorage(LOCAL_STORAGE_CONTINUE_SIGN_UP_KEY, false));
  const [signUpFormValues, setSignUpFormValues] = useState<IRegisterFormValues>();
  const { message, setMessage, requestStatus, setRequestStatus } = useFormMessage();
  const { authme } = useContext(AuthContext);

  const onCreateAccountSubmit = (formValue: ISignUpFormInitialValues) => {
    setSignUpFormValues({
      phoneNumber: getPhoneNumber(formValue.phoneNumber),
      password: formValue.password,
      email: formValue?.email,
      username: '',
      name: '',
      surname: ''
    });

    setToSessionStorage(LOCAL_STORAGE_CONTINUE_SIGN_UP_KEY, true);
    setIsContinued(true);
  };

  const onFillProfileInfoSubmit = async (formValue: IProfileInfoFormInitialValues) => {
    setRequestStatus('pending');
    setMessage('Waiting ...');

    const allRegisterValues = {
      ...signUpFormValues,
      name: formValue.name,
      surname: formValue.surname,
      username: formValue.username
    } as IRegisterFormValues;
    sessionStorage.removeItem(LOCAL_STORAGE_CONTINUE_SIGN_UP_KEY);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [error, response] = await to(SignupService.register(allRegisterValues));

    if (error) {
      setRequestStatus('error');
      setMessage(error.response?.data.message || 'Something went wrong');
      return;
    }

    authme();
  };

  const onProfileErrorSubmit = () => {
    setRequestStatus('error');
    setMessage('Invalid form values');
  };

  const onComeBackClick = () => {
    setMessage('');
    setRequestStatus('default');
    setToSessionStorage(LOCAL_STORAGE_CONTINUE_SIGN_UP_KEY, false);
    setIsContinued(false);
  };

  return (
    <section className={s.wrapper}>
      {isContinued ? (
        <FillProfileInfo
          onComeBackClick={onComeBackClick}
          onSubmit={onFillProfileInfoSubmit}
          onErrorSubmit={onProfileErrorSubmit}
          message={message}
          requestStatus={requestStatus}
        />
      ) : (
        <SignUpForm onSubmit={onCreateAccountSubmit} />
      )}
      <ToggleTheme />
    </section>
  );
};
