import { getFromSessionStorage } from '@/shared/lib/browserStorage';
import { useValidateForm } from '@/shared/lib/dom';
import { CustomForm } from '@/shared/uikit';

import { PROFILE_FORM_KEY } from '../const/const';
import { getFormErrors } from '../model/form/getFormErrors';
import { bottom, initialValues, inputs } from '../model/form/initialValues';
import { IFillProfileInfoProps } from '../model/types/types';

export const FillProfileInfo = (props: IFillProfileInfoProps) => {
  const { onSubmit, onErrorSubmit, message, requestStatus, onComeBackClick } = props;

  const validForm = useValidateForm({
    validateOnChange: true,
    initialValues: getFromSessionStorage(PROFILE_FORM_KEY, initialValues),
    validateInputs: getFormErrors,
    submitForm: (values) => {
      onSubmit(values);
      sessionStorage.removeItem(PROFILE_FORM_KEY);
    },
    onInvalidFormSubmit: onErrorSubmit
  });

  return (
    <section>
      <CustomForm
        initial={initialValues}
        validForm={validForm}
        title="Profile Info"
        subtitle="Complete your information"
        buttonText="Sign up"
        inputs={inputs}
        preBottom="Come back"
        onPreBottomClick={onComeBackClick}
        bottom={bottom}
        message={message}
        requestStatus={requestStatus}
      />
    </section>
  );
};
