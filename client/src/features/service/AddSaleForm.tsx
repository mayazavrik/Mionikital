import React, { useState } from 'react';
import { useAppDispatch } from '../../redux/store';
import { addSales } from './servicesSlice';
import type { ServiceCard } from './types/type';

export default function AddSaleForm({ service }: { service: ServiceCard }): JSX.Element {
  const [text, setText] = useState('');
  const [img, setImg] = useState('');
  const dispatch = useAppDispatch();

  const onHandleAdd = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(addSales({ service_id: service.id, img, text }));
  };
  return (
    <div>
      <form onSubmit={onHandleAdd}>
        {' '}
        <label htmlFor="">
          {' '}
          Фото акции
          <input value={img} name="img" type="text" onChange={(e) => setImg(e.target.value)} />
        </label>
        <label htmlFor="">
          {' '}
          Текст акции
          <input value={text} name="text" type="text" onChange={(e) => setText(e.target.value)} />
        </label>
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
}
