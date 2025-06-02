import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import './CardInfo.css';

const CardInfo = ({ hero }) => {
  const { name, image, biography } = hero;
  const [showModal, setShowModal] = useState(false);

  const fullName = biography['full-name'] || 'Name not provided';
  const publisher = biography.publisher || 'Unknown';
  const alignment = biography.alignment === 'good' ? 'Hero' : biography.alignment === 'bad' ? 'Villain' : 'Neutral';

  return (
    <>
    <div className="card-info">
      <img src={image.url} alt={name} className="card-image" />
      <div className="card-content">
        <h2>{name}</h2>
        <p><strong>Real Name:</strong> {fullName}</p>
        <p><strong>Publisher:</strong> {publisher}</p>
        <p><strong>Alignment:</strong> {alignment}</p>
        <button className="details-button" onClick={() => setShowModal(true)}>
            Read More
        </button>
      </div>
    </div>

    {showModal && <Modal hero={hero} onClose={() => setShowModal(false)} />}
    </>
  );
};

export default CardInfo;
