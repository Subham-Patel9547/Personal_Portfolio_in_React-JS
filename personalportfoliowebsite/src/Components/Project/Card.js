
import React from 'react';
import '../../CSS/card.css'; // Import your CSS file for styling

const Card = ({ title, description, imageUrl }) => {
  return (
    <>
    
    <div className="card">
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
      </div>
    </div>
    </>
  );
}

export default Card;
