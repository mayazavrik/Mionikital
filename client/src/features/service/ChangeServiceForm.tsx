import React, { Dispatch, SetStateAction, useState } from 'react';
import './style/modal.css';
import {  useAppDispatch } from '../../redux/store';
import {  changeService } from './servicesSlice';

import type { Service } from '../logreg/type';

function ChangeServiceForm({
  service,
  setModalActive,
}: {
    service: Service;
  setModalActive: Dispatch<SetStateAction<boolean>>;
}): JSX.Element {
  const [img, setImg] = useState(service?.img);
  const [title, setTitle] = useState(service?.title);
  const [text, setText] = useState(service?.text);
  const [price, setPrice] = useState(service?.price);
  const [price2, setPrice2] = useState(service?.price2);

  
  const dispatch = useAppDispatch();

  const onHandleChange = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(changeService({ id: service.id, img, title, text , price, price2 }));
    setModalActive(false);
  };

  return (
    <div className='darkened'>
      <div className="modal active">
      <form className="modal-content active" onSubmit={onHandleChange}>
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
          <input value={img} onChange={(e) => setImg(e.target.value)} type="text" />
        </label>
        <label className="form__label ">
          Текст услуги
          <textarea
           
            className="biginput"
            value={text}
            onChange={(e) => setText(e.target.value)}
            
          />
        </label>
        <label className="form__label">
          Цена за час
          <input
            className="biginput"
            value={price}
            name="text"
            type="number"
            onChange={(e) => setPrice(e.target.value ? Number(e.target.value) : 0)}
          />
        </label>
        <label className="form__label">
          Цена за полтора часа
          <input
            className="biginput"
            value={price2}
            name="text"
            type="number"
            onChange={(e) => setPrice2(e.target.value ? Number(e.target.value) : 0)}
          />
        </label>
        <button className="btn" type="submit">
          Сохранить изменения
        </button>
        <button onClick={() => setModalActive(false)} className="btn" type="button">
          Отмена
        </button>
      </form>
    </div>
    </div>
    
  );
}

export default ChangeServiceForm;
