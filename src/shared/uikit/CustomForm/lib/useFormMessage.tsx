import { useState } from 'react';

import { FormMessageStatus } from '../../FormMessage/status';

export const useFormMessage = () => {
  const [requestStatus, setRequestStatus] = useState<FormMessageStatus>('error');
  const [message, setMessage] = useState('');

  return { message, setMessage, requestStatus, setRequestStatus };
};
