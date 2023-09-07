import type { Meta, StoryObj } from '@storybook/react';

import { OInputType } from '@/shared/lib/dom';

import { ValidatedInput } from './ValidatedInput';

const meta: Meta<typeof ValidatedInput> = {
  title: 'uikit/Validated input',
  tags: ['autodocs'],
  component: ValidatedInput,
  args: {
    value: 'Value',
    label: 'Label',
    maxLength: 100
  },
  argTypes: {
    type: {
      options: Object.values(OInputType),
      control: { type: 'select' }
    }
  }
};

export default meta;

type Story = StoryObj<typeof ValidatedInput>;

export const DefaultEmpty: Story = {
  args: {
    value: ''
  }
};

export const DefaultWithValue: Story = {
  args: {}
};

export const EmptyFocused: Story = {
  args: {
    focused: true,
    value: ''
  }
};

export const ErrorFocused: Story = {
  args: {
    showError: true,
    error: 'Validate error',
    focused: true,
    value: 'Value'
  }
};

export const ErrorUnfocused: Story = {
  args: {
    showError: true,
    error: 'Validate error',
    focused: false
  }
};

export const Password: Story = {
  args: {
    type: 'password',
    maxLength: 60
  }
};

export const phoneNumber: Story = {
  args: {
    value: '+7 960 977 01 00',
    type: 'tel'
  }
};
