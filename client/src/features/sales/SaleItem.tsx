import React from 'react';
import { useAppDispatch } from '../../redux/store';
import { deleteSale } from '../service/servicesSlice';
import type { Sale } from '../service/types/type';
import './style/style.css';
export default function SaleItem({ sale }: { sale: Sale }): JSX.Element {
  const dispatch = useAppDispatch();
  const onHandleDelete = (): void => {
    dispatch(deleteSale(sale.id));
  };
  return (
    <div className="sale-card">
      <img src={sale.img} alt="saleImg" />
      <h3>{sale.text}</h3>
      <button onClick={onHandleDelete} type="button" style={{ background: 'red' }}>
        удалить акцию
      </button>
      <button type="button">Редактировать</button>
    </div>
  );
}
