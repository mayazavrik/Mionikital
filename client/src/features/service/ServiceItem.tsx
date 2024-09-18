import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import './style/style.css';
import ChangeServiceForm from './ChangeServiceForm';
import type { AppDispatch, RootState } from '../../redux/store';
import { deleteOneService } from './servicesSlice';
import { Service } from '../LogReg/type';

export default function ServiceItem({ service }: { service: Service }): JSX.Element {
  const [modalActive, setModalActive] = useState(false);
  const user = useSelector((store: RootState) => store.auth.user);
  const dispatch = useDispatch<AppDispatch>();

  const onHandleRemove = (): void => {
    if (service.id !== undefined) {
      dispatch(deleteOneService(service.id));
    } else {
      console.error('Service ID is undefined');
    }
  };

  return (
    <div className="service-card">
      <div className="content">
        <h3 className="servicename">{service.title}</h3>
        <br />
        {/* <img className="serviceimg" src={service.img} alt="servicePhoto" /> */}
        {/* <img className="serviceimg" src={`http://localhost:3000${service.img}`} alt="servicePhoto" /> */}
        <img
          className="serviceimg"
          src={`http://localhost:4000${service.img}`}
          alt="servicePhoto"
        />

        {user && user.isAdmin && (
          <>
            {' '}
            <button onClick={() => onHandleRemove()} type="button">
              Удалить услугу
            </button>
            {modalActive && <ChangeServiceForm service={service} setModalActive={setModalActive} />}
            <button onClick={() => setModalActive(!modalActive)} type="button">
              Изменить услугу
            </button>
          </>
        )}
        <button className="btn" type="button">
          <Link to={`/services/${service.id}`}>Подробнее</Link>
        </button>

        {/* <button  className='btn' type="button">
        <Link to={`/services/${service.id}`}>Подробнее</Link>
      </button> */}
      </div>
    </div>
  );
}
