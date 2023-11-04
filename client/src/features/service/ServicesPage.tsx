import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';
import ServiceItem from './ServiceItem';

export default function ServicesPage(): JSX.Element {
  const services = useSelector((store: RootState) => store.servicesSlice.services);
  const error = useSelector((store: RootState) => store.servicesSlice.error);
  const loading = useSelector((store: RootState) => store.servicesSlice.loading);

  return (
    <div>
      ServicesPage
      {services.map((service) => (
        <ServiceItem key={service.id} service={service} />
      ))}
    </div>
  );
}
