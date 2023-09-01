import React, { useRef, useEffect } from 'react';
import Close from './icons/close';
import './modal.scss';

export default function Modal({ 
  children, 
  close, 
  title 
}) {
  const ref = useRef();
  
  useEffect(() => {
    const onOutsideClick = e => {
      if (!ref.current || ref.current.contains(e.target)) return;
      close();
    }
    document.addEventListener('mousedown', onOutsideClick);
    document.addEventListener('touchstart', onOutsideClick);

    return () => {
      document.removeEventListener('mousedown', onOutsideClick);
      document.removeEventListener('touchstart', onOutsideClick);
    }
  }, [ref, close]);

  return (  
    <div className="modal">
      <div className="modal__container" ref={ref }>
        <div className="modal__header">
          <h4>{title}</h4>
          <button 
            className="modal__close theme-button" 
            onClick={close}
            aria-label="Close"
          >
            <Close aria-hidden="true" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
