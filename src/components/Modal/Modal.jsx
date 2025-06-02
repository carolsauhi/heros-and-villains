import React from 'react';
import './Modal.css';
import icon from "../../assets/close-boxe.svg"

const Modal = ({ hero, onClose }) => {
  const { name, image, biography, appearance, work } = hero;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          <img src={icon} alt="close button" />
        </button>
        <img src={image.url} alt={name} className="modal-image" />
        <h2>{name}</h2>
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
