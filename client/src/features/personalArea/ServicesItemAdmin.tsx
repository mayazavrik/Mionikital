import React from 'react';

import { useAppDispatch } from '../../redux/store';
import { deleteOneService } from '../service/servicesSlice';
import { Service } from '../LogReg/type';

function ServicesItemAdmin({ servic }: { servic: Service }): JSX.Element {
  const dispatch = useAppDispatch();

  const onHandeldeleteService = (): void => {
    if (servic.id !== undefined) {
      dispatch(deleteOneService(servic.id));
    } else {
      console.error('Service ID is undefined.');
    }
  };

  return (
    <div className="adminItem">
      <div className="itemrow">
        <p className="iteminfo">{servic?.title}</p>
      </div>
      <div className="itemrow">
        <p className="iteminfo">
        <img
          className="serviceimg"
          src={`https://mionikital.onrender.com${servic.img}`}
          alt="servicePhoto"
        />
        </p>{' '}
      </div>
      <div className="itemrow">
        <p className="iteminfo">{servic?.text}</p>{' '}
      </div>

      <button className="btn" onClick={() => onHandeldeleteService()} type="submit">
        Удалить услугу
      </button>
    </div>
  );
}

export default ServicesItemAdmin;
