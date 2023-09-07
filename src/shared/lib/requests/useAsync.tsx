import { AxiosResponse } from 'axios';
import { useCallback, useEffect, useState } from 'react';

import { to } from './awaitToFunction';

export interface IAuthHook {
  asyncFunction: () => Promise<AxiosResponse<null>>;
  duration: number;
}

export const useAsync = ({ asyncFunction, duration }: IAuthHook) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [result, setResult] = useState('');

  const execute = useCallback(async () => {
    const [error, response] = await to(asyncFunction());

    if (response && !error) {
      setIsSuccess(true);
      setResult('ees');
    } else {
      setIsSuccess(false);
      setError(true);
    }

    setTimeout(() => {
      setLoading(false);
    }, duration);
  }, []);

  useEffect(() => {
    execute();
  }, []);

  return { result, loading, error, isSuccess };
};
