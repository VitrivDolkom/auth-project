export interface IToastMessageProps {
  message: string;
  isError?: boolean;
  isSuccess?: boolean;
  onHidden: () => void;
}
