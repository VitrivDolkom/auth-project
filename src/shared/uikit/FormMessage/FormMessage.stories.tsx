import type { Meta, StoryObj } from '@storybook/react';

import { FormMessage } from './FormMessage';
import { OFormMessageStatus } from './status';

const meta: Meta<typeof FormMessage> = {
  title: 'uikit/Form or input message',
  tags: ['autodocs'],
  component: FormMessage,
  argTypes: {
    status: {
      options: Object.values(OFormMessageStatus),
      control: {type: 'select'}
    }
  }
};

export default meta;

type Story = StoryObj<typeof FormMessage>;

export const Default: Story = {
  args: {
    text: 'Text',
    status: 'default'
  }
};

export const Pending: Story = {
  args: {
    text: 'Pending ...',
    status: 'pending'
  }
};

export const Error: Story = {
  args: {
    text: 'Error',
    status: 'error'
  }
};
