import { FormMessageStatus } from './status';

import s from './style.module.scss';

interface Props {
  text: string;
  status: FormMessageStatus;
}

export const FormMessage = ({ text, status }: Props) => {
  if (status === 'error') {
    return <p className={[s.message, s.error].join(' ')}>{text}</p>;
  }

  if (status === 'pending') {
    return <p className={[s.message, s.pending].join(' ')}>{text}</p>;
  }

  return <p className={[s.message, s.success].join(' ')}>{text}</p>;
};
