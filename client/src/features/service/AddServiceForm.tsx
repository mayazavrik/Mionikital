import React, { useState } from 'react';
import { useAppDispatch } from '../../redux/store';
import { addSales, addService } from './servicesSlice';
import type { ServiceCard } from './types/type';
import './style/style.css';

export default function AddServiceForm({ service }: { service: ServiceCard }): JSX.Element {
    
    const [title, setTitle] = useState('');
    const [img, setImg] = useState('');
  const [text, setText] = useState('');
  const [price, setPrice] = useState('');
  const [price2, setPrice2] = useState('');
  const dispatch = useAppDispatch();

  const onHandleAdd = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(addService({ id: 1,title, img, text , price, price2}));
    setTitle('');
    setText('');
    setImg('');
    setPrice('');
    setPrice2('');
  };
  return (
    <div className="form__container">
      <form className="formsale" onSubmit={onHandleAdd}>
      <label className="form__label">
          Название услуги
          <input
            className="biginput"
            value={title}
            name="text"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label className="form__label">
          Фото услуги
          <input
            className="form__label"
            value={img}
            name="img"
            type="text"
            onChange={(e) => setImg(e.target.value)}
          />
        </label>
        <label className="form__label">
          Текст услуги
          <input
            className="biginput"
            value={text}
            name="text"
            type="text"
            onChange={(e) => setText(e.target.value)}
          />
        </label>
        <label className="form__label">
          Цена за час
          <input
            className="biginput"
            value={price}
            name="text"
            type="text"
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        <label className="form__label">
          Цена за полтора часа
          <input
            className="biginput"
            value={price2}
            name="text"
            type="text"
            onChange={(e) => setPrice2(e.target.value)}
          />
        </label>
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
}
