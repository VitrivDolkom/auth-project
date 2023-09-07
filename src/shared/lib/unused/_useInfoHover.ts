import { useEffect, useState } from 'react';

export const useInfoHover = () => {
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [isMouseOnModal, setIsMouseOnModal] = useState(false);
  const [isMouseOnInfoImage, setIsMouseOnInfoImage] = useState(false);

  const onMouseInfoClick = () => {
    setShowErrorModal((prev) => !prev);
  };

  const onMouseModalEnter = () => {
    setIsMouseOnModal(true);
  };

  const onMouseInfoImageEnter = () => {
    setIsMouseOnInfoImage(true);
  };

  const onMouseModalLeave = () => {
    setIsMouseOnModal(false);
  };

  const onMouseInfoImageLeave = () => {
    setIsMouseOnInfoImage(false);
  };

  useEffect(() => {
    if (isMouseOnModal || isMouseOnInfoImage) {
      setShowErrorModal(true);
    } else {
      setShowErrorModal(false);
    }
  }, [isMouseOnModal, isMouseOnInfoImage]);

  return {
    showErrorModal,
    onMouseModalEnter,
    onMouseInfoImageEnter,
    onMouseModalLeave,
    onMouseInfoImageLeave,
    onMouseInfoClick
  };
};
