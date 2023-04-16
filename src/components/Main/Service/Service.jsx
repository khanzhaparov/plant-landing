import React from 'react';
import ServiceCard from './ServiceCard';
import services from '../../../assets/service.json';
import './Service.scss';

const Service = () => (
  <div className="service row">
    {services.map((obj) => (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <ServiceCard {...obj} />
    ))}
  </div>
);

export default Service;
