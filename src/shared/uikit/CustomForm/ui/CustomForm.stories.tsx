import type { Meta, StoryObj } from '@storybook/react';

import { emailRegexp, passwordRegexp, phoneRegexp } from '@/shared/const/regexp';
import { useValidateForm } from '@/shared/lib/dom';

import { OFormMessageStatus } from '../../FormMessage/status';
import { IFormProps, IInputInfo } from '../lib/types';
import { CustomForm } from './CustomForm';

const inputs: IInputInfo[] = [
  { label: 'Phone number', name: 'phoneNumber', maxLength: 16, type: 'tel', isRequired: true },
  { label: 'Email', name: 'email', maxLength: 100, type: 'text', isRequired: true },
  { label: 'Password', name: 'password', maxLength: 64, type: 'password', isRequired: true },
  { label: 'Confirm password', name: 'confirmPassword', maxLength: 64, type: 'password', isRequired: true }
];

interface IInitialValues extends Record<string, string> {
  phoneNumber: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const initialValues = {
  phoneNumber: '',
  email: '',
  password: '',
  confirmPassword: ''
};

const getFormErrors = (values: IInitialValues): Partial<IInitialValues> => {
  const errors: Partial<IInitialValues> = {};

  let key: keyof IInitialValues;

  for (key in values) {
    if (values[key] === '' && key !== 'email') {
      errors[key] = 'Required';
    }
  }

  if (!phoneRegexp.test(values.phoneNumber) && values.phoneNumber !== '') {
    errors.phoneNumber = '+7 xxx xxx xx xx';
  }

  if ((values.password.length < 8 || values.password.length > 64) && values.password !== '') {
    errors.password = 'length must be from 8 to 64';
  } else if (!passwordRegexp.test(values.password) && values.password !== '') {
    errors.password = 'Invalid password';
  }

  if (!emailRegexp.test(values.email) && values.email !== '') {
    errors.email = 'Invalid email';
  }

  if (values.password !== values.confirmPassword && values.confirmPassword !== '') {
    errors.confirmPassword = 'passwords should be the same';
  }

  return errors;
};

const CustomFormWrapper = <T,>(props: IFormProps<T>) => {
  const validForm = useValidateForm({
    validateOnChange: true,
    initialValues: initialValues,
    validateInputs: getFormErrors,
    submitForm: () => ({}),
    onInvalidFormSubmit: () => ({})
  });

  const wrapperStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  return (
    <section style={wrapperStyles}>
      <CustomForm {...props} validForm={validForm} />
    </section>
  );
};

const meta: Meta<typeof CustomForm> = {
  title: 'uikit/Custom Form',
  tags: ['autodocs'],
  component: CustomFormWrapper,
  argTypes: {
    requestStatus: {
      options: Object.values(OFormMessageStatus),
      control: { type: 'select' }
    }
  }
};

export default meta;

type Story = StoryObj<typeof CustomForm>;

export const Default: Story = {
  args: {
    title: 'Title',
    subtitle: 'Subtitle',
    inputs: inputs,
    message: 'Message',
    requestStatus: 'default',
    buttonText: 'Submit'
  }
};
