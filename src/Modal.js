import React from 'react';
import ReactDom from 'react-dom';

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 1000,
  width: '70%',
  maxWidth: '800px',
  padding: '2rem',
  backgroundColor: '#fff',
  borderRadius: '8px',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
  fontFamily: 'Arial, sans-serif'
};

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  zIndex: 1000
};

const CLOSE_BUTTON_STYLES = {
  position: 'absolute',
  top: '1rem',
  right: '1rem',
  padding: '0.5rem',
  background: 'none',
  border: 'none',
  color: '#777',
  cursor: 'pointer',
  fontSize: '1.5rem'
};

export default function Modal({ children, onClose }) {
  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <button style={CLOSE_BUTTON_STYLES} onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </>,
    document.getElementById('cart-root')
  );
}
