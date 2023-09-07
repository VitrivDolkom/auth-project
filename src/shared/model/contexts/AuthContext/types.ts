export interface IAuthContext {
  isAuth: boolean;
  authme: () => void;
  disauthme: () => void;
}
