import { useEffect, useState } from 'react';

export const useToast = (showDuration: number, appearanceDuration: number) => {
  const [showMessage, setShowMessage] = useState(true);
  const [hideMessage, setHideMessage] = useState(false);

  useEffect(() => {
    if (!showMessage) {
      setTimeout(() => {
        setHideMessage(true);
      }, appearanceDuration);
    } else {
      setTimeout(() => {
        setShowMessage(false);
      }, showDuration);
    }
  }, [showMessage]);

  return { showMessage, hideMessage };
};
