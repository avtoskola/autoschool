import React, { ReactNode, useEffect, useMemo } from 'react';
import ReactDOM from 'react-dom';

interface DialogProps {
  children?: ReactNode;
  onClose: () => void;
  isOpen: boolean;
}

const Portal = ({ children }: { children: ReactNode }) => {
  const el = useMemo(() => document.createElement('div'), []);

  useEffect(() => {
    el.setAttribute('id', 'portal');
    document.querySelector('.app')?.appendChild(el);
    return () => {
      document.querySelector('.app')?.removeChild(el);
    };
  }, [el]);

  return ReactDOM.createPortal(children, el);
};

const CustomDialog = ({ onClose, isOpen, children }: DialogProps) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent) =>
      e.key === 'Escape' ? onClose() : null;
    document.body.addEventListener('keydown', closeOnEscapeKey);
    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKey);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <Portal>
      <div
        role="dialog"
        aria-modal="true"
        className="fixed bg-black overflow-hidden opacity-50 w-screen h-screen z-10 top-0"
        onClick={onClose}
      />
      {children}
    </Portal>
  );
};

export default CustomDialog;
