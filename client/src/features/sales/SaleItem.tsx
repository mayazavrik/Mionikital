import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';

import { deleteSale } from './salesSlice';
import type { Sale } from '../service/types/type';
import './style/style.css';
import ChangeSaleForm from '../service/ChangeSaleForm';



export default function SaleItem({ sale }: { sale: Sale }): JSX.Element {
  const [modalActive, setModalActive] = useState(false);
  const user = useSelector((store: RootState) => store.auth.user);
  const dispatch = useDispatch<AppDispatch>();


  const onHandleDelete = (): void => {
    dispatch(deleteSale(sale.id));
  };

  return (
    <div className="sale-card">
        <div className="content">
       
    
        <h4 className="itemrow">

      <img className="saleimg" src={`/images/${sale.img}`} alt="servicePhoto" />
      </h4>
        <h4 className="itemrow">
          <p className="iteminfo">{sale.text}</p>
        </h4>
        {user && user.isAdmin && (
          <>
            {' '}
            <button onClick={() => onHandleDelete()} type="button">
              Удалить акцию
            </button>
            {modalActive && <ChangeSaleForm sale={sale} setModalActive={setModalActive} />}
            <button onClick={() => setModalActive(!modalActive)} type="button">
              Изменить акцию
            </button>
          </>
        )}
     

        {/* <button  className='btn' type="button">
        <Link to={`/services/${service.id}`}>Подробнее</Link>
      </button> */}
      </div>
    </div>
  );
}