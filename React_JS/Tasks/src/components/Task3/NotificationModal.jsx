import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './NotificationModal.css';

const modalRoot = document.getElementById('modal-root');

export default function NotificationModal({ onClose }) {
  useEffect(() => {
    console.log("Modal Opened");
    const timer = setTimeout(() => onClose(), 3000);
    return () => clearTimeout(timer);
  }, [onClose]);



  return ReactDOM.createPortal(
    <div className="modal">
      {/* <input type="checkbox" id="modal-checkbox" /> Select me */}
      <p>This is a notification modal!</p>
      <button onClick={onClose}>Close</button>
    </div>,
    modalRoot
  );
}
