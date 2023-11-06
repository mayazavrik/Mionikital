import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../redux/store';
import type { UslugaPrice } from './types/types';
import './style/style.css';
import { deletePrice } from './uslugaPriceSlice';
import UpdateUslugaForm from './UpdateUslugaForm';

export default function PriceItem({ price }: { price: UslugaPrice }): JSX.Element {
  const dispatch = useAppDispatch();
  const [flag, setFlag] = useState(false);

  const onHandleDelete = (): void => {
    dispatch(deletePrice(price.id));
  };
  const onHandleFlag = (): void => {
    setFlag((prev) => !prev);
  };
  return (
    <div className="price-item">
      <h4>Вид услуги: {price.Usluga.title}|</h4>
      <h4> Марка: {price.Mark.title}|</h4>
      <h4> Модель: {price.CarModel.title}|</h4>
      <h4>Цена: {price.cost} рублей</h4>
      <button type="button" style={{ background: 'red' }} onClick={onHandleDelete}>
        Удалить услугу
      </button>
      <button type="button" onClick={() => setFlag(!flag)}>
        Изменить услугу
      </button>
      {flag && <UpdateUslugaForm price={price} onHandleFlag={onHandleFlag} />}
    </div>
  );
}
