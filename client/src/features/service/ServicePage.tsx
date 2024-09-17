/* eslint-disable no-nested-ternary */
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate,useParams } from 'react-router-dom';
import type { RootState } from '../../redux/store';

import './style/style.css';


export default function ServicePage(): JSX.Element {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const services = useSelector((store: RootState) => store.servicesSlice.services)
  const service = services.find((service) => serviceId && service.id === +serviceId);
  const error = <h1>Такой услуги нет</h1>;
  const content= (
    <div className="services-page">
      
      <div className="post-page">
        <h2 className='servicenamepage'>{service?.title}</h2>
        {/* <img className="post-page__img" src={service?.img} alt="post" /> */}
        <img className="post-page__img" src={`http://localhost:4000${service?.img}`} alt="servicePhoto" />
      <h3 className="post-page__text">{service?.text}</h3>
      </div>
      <button onClick={() => navigate(-1)} type="button">
        Назад к списку услуг
      </button>
    </div>
  );
  return <div className="services-page__container">{!service ? error : content}</div>;
}
