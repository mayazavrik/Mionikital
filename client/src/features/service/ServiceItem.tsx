import React from 'react';
import { Link } from 'react-router-dom';
import type { ServiceCard } from './types/type';

export default function ServiceItem({ service }: { service: ServiceCard }): JSX.Element {
  return (
    <div className="service-card">
      <h3>{service.title}</h3>
      <br />
      <img src={service.img} alt="servicePhoto" />
      <h4>Адрес: {service.adress}</h4>
      <Link to={`/services/${service.id}`}>Подробнее</Link>
    </div>
  );
}
