export const OInputType = {
  password: 'password',
  text: 'text',
  telephone: 'tel'
} as const;

export type InputType = (typeof OInputType)[keyof typeof OInputType];

export const OButtonType = {
  default: 'button',
  reset: 'reset',
  submit: 'submit'
} as const;

export type ButtonType = (typeof OButtonType)[keyof typeof OButtonType];
