import React from 'react';

const ServiceCard = ({ imageUrl, title, subtitle }) => (
  <div className="service__card">
    <div className="card row">
      <div className="card__img col">
        <img src={imageUrl} alt="shipping box" />
      </div>
      <div className="card__content col">
        <div className="card__title">{title}</div>
        <div className="card__subtitle">{subtitle}</div>
      </div>
    </div>
  </div>
);

export default ServiceCard;
