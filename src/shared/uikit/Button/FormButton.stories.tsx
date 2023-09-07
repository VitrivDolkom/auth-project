import type { Meta, StoryObj } from '@storybook/react';

import { OButtonType } from '@/shared/lib/dom';

import { FormButton } from './FormButton';

const meta: Meta<typeof FormButton> = {
  title: 'uikit/Button',
  tags: ['autodocs'],
  component: FormButton,
  args: {
    name: 'Click me'
  },
  argTypes: {
    type: {
      options: Object.values(OButtonType),
      control: { type: 'select' }
    }
  }
};

export default meta;

type Story = StoryObj<typeof FormButton>;

export const Default: Story = {
  args: {
    isLoading: false
  }
};

export const Loading: Story = {
  args: {
    isLoading: true
  }
};
