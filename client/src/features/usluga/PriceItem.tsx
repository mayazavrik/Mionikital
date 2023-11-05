import React from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../redux/store';
import type { UslugaPrice } from './types/types';
import './style/style.css';
import { deletePrice } from './uslugaPriceSlice';

export default function PriceItem({ price }: { price: UslugaPrice }): JSX.Element {
  const dispatch = useAppDispatch();
  const usluga = useSelector((store: RootState) => store.uslugas.uslugas).find(
    (el) => el.id === price.usluga_id,
  );
  const marka = useSelector((store: RootState) => store.uslugas.marks).find(
    (el) => el.id === price.mark_id,
  );
  const model = marka?.CarModels.find((el) => el.id === price.carModel_id);
  const onHandleDelete = (): void => {
    dispatch(deletePrice(price.id));
  };
  return (
    <div className="price-item">
      <h4>Вид услуги: {usluga?.title}|</h4>
      <h4> Марка: {marka?.title}|</h4>
      <h4> Модель: {model?.title}|</h4>
      <h4>Цена: {price.cost} рублей</h4>
      <button type="button" style={{ background: 'red' }} onClick={onHandleDelete}>
        Удалить услугу
      </button>
      <button type="button">Изменить услугу</button>
    </div>
  );
}
