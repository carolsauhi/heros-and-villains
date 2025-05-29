import React from 'react';
import './CardInfo.css';

const CardInfo = ({ hero }) => {
  return (
    <div className="card">
      <img src={hero.image.url} alt={hero.name} className="card-img" />
      <h3>{hero.name}</h3>
      <p><strong>Publisher:</strong> {hero.biography.publisher}</p>
    </div>
  );
};

export default CardInfo;