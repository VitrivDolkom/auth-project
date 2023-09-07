export interface ISignUpFormInitialValues extends Record<string, string> {
  phoneNumber: string;
  email: string;
  password: string;
  confirmPassword: string;
}
