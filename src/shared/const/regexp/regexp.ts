const capitalize = '[A-Z]';
const latins = '[a-zA-Z]';
const availableChar = '[\\w\\s_\\-\\.,:@#!?*<>&~`|/+=]';

export const nameRegexp = new RegExp(`^${capitalize}([-\\s]?${latins})*$`);

export const surnameRegexp = new RegExp(`^${capitalize}([-\\s]?${latins})*$`);
export const usernameRegexp = new RegExp(`^${availableChar}*$`);
export const statusRegexp = new RegExp(`^${availableChar}*$`);
export const emailRegexp = new RegExp(
  '^[\\w]+@.*[a-zA-Z0-9]([a-zA-Z0-9-]?[a-zA-Z0-9])*(.[a-zA-Z0-9]([a-zA-Z0-9-]?[a-zA-Z0-9])*)*(\\.[a-z]{2,4})$'
);
export const phoneRegexp = new RegExp('^(\\+7) [0-9]{3} [0-9]{3} [0-9]{2} [0-9]{2}$');
export const passwordRegexp = new RegExp(`^${availableChar}{8,64}$`);
