import { DefaultFormButton } from './DifferentFormButtons/DefaultFormButton';
import { LoadingFormButton } from './DifferentFormButtons/LoadingFormButton';
import { IFormButtonProps } from './types';

export const FormButton = (props: IFormButtonProps) => {
  if (props.isLoading) return <LoadingFormButton />;

  return <DefaultFormButton {...props} />;
};
