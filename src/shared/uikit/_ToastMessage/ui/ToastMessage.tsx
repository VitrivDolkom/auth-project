import { useEffect } from 'react';
import { APPEARANCE_DURATION, TOAST_DURATION } from '../const/const';
import { useToast } from '../lib/hooks/useToast';
import { IToastMessageProps } from '../lib/types/types';
import s from './style.module.scss';

const ToastMessage = ({ isError, isSuccess, message, onHidden }: IToastMessageProps) => {
  const { showMessage, hideMessage } = useToast(TOAST_DURATION, APPEARANCE_DURATION);
  const classNames = [s.toastWrapper, !showMessage && s.hidden, isError && s.error, isSuccess && s.success].join(' ');

  useEffect(() => {
    if (hideMessage) {
      onHidden();
    }
  }, [hideMessage]);

  return message !== '' ? <div className={classNames}>{message}</div> : <></>;
};

export default ToastMessage;
