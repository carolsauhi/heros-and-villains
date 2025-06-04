import React from 'react';
import './Modal.css';

const Modal = ({ hero, onClose }) => {
  const { name, image, biography, appearance, work } = hero;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>{name}</h2>
          <button className="modal-close" onClick={onClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="close-icon"
              >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <line x1="9" y1="9" x2="15" y2="15" />
              <line x1="15" y1="9" x2="9" y2="15" />
              </svg>
          </button>
        </div>
        <img src={image.url} alt={name} className="modal-image" />
        <p><strong>Real Name:</strong> {biography['full-name']}</p>
        <p><strong>Place of birth:</strong> {biography['place-of-birth']}</p>
        <p><strong>First appearance:</strong> {biography['first-appearance']}</p>
        <p><strong>Occupation:</strong> {work.occupation}</p>
        <p><strong>Height:</strong> {appearance.height?.join(' / ')}</p>
        <p><strong>Weight:</strong> {appearance.weight?.join(' / ')}</p>
        <p><strong>Publisher:</strong> {biography.publisher}</p>
      </div>
    </div>
  );
};

export default Modal;
