import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';
import ServiceItem from './ServiceItem';
import './style/style.css';
import AddServiceForm from './AddServiceForm';


export default function ServicesPage(): JSX.Element {
  const user = useSelector((store: RootState) => store.auth.user);
  const services = useSelector((store: RootState) => store.servicesSlice.services)

  // const error = useSelector((store: RootState) => store.servicesSlice.error);
  // const loading = useSelector((store: RootState) => store.servicesSlice.loading);

  return (
    <div className="containerPostForm">
{user && user.isAdmin && (
      <AddServiceForm />)}

      <div className="swiper">
        <div className="posts__container">
          {services?.map((service) => <ServiceItem key={service.id} service={service} />)}
        </div>

        {/* <div className="swiper-pagination"></div>

        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>

        <div className="swiper-scrollbar"></div> */}
      </div>
    </div>
  );
}
