import React from 'react';
import './medicinecard.css';

function MedicineCard({ name, image, description }) {
  return (
    <div className="medicine-card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
}

export default MedicineCard;
