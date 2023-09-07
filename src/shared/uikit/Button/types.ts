import { ButtonType } from '@/shared/lib/dom';

export interface IFormButtonProps {
  name: string;
  action?: () => void;
  type?: ButtonType;
  isLoading: boolean;
}
