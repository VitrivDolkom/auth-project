import { InputType } from '@/shared/lib/dom';

export interface IValidatedInputProps {
  label: string;
  type: InputType;
  value?: string;
  name: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  onFocus: (e: React.FormEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FormEvent<HTMLInputElement>) => void;
  error?: string;
  showError: boolean;
  focused?: boolean;
  maxLength: number;
}
