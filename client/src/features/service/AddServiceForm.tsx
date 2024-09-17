import React, { useState } from 'react';
import { useAppDispatch } from '../../redux/store';
import {addService } from './servicesSlice';

import './style/style.css';

export default function AddServiceForm(): JSX.Element {
    
    const [title, setTitle] = useState('');
    const [img, setImg] = useState<File | null>(null);
  const [text, setText] = useState('');
  const [price, setPrice] = useState<number | ''>(0); 
  const [price2, setPrice2] = useState<number | ''>(0); 
  const dispatch = useAppDispatch();

  // const onHandleAdd = (e: React.FormEvent<HTMLFormElement>): void => {
  //   e.preventDefault();
  //   dispatch(addService({ id: 1,title, img, text , price, price2}));
  //   setTitle('');
  //   setText('');
  //   setImg('');
  //   setPrice(0);
  //   setPrice2(0);
  // };
  const onHandleSubmit: React.FormEventHandler<HTMLFormElement> = async(e) => {
    e.preventDefault();
    if(!img) {
      alert('Добавьте фото');
      return;
    }
    const formData = new FormData();
    formData.append('title',title);
    formData.append('text',text);
    formData.append('price', price.toString()); 
    formData.append('price2', price2.toString()); 
  
    formData.append('img',img);
    dispatch(addService(formData));
    setImg(null);
    setTitle('');
    setText('');
    setPrice(0);
    setPrice2(0);
  };
  const onFileChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    console.log(e.target.files);
    if (e.target.files) {
      setImg(e.target.files[0]);
    }
  }
  return (
    <div className="form__container">
      <form className="formsale" onSubmit={onHandleSubmit}>
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
        
            name="img"
            type="file"
            onChange={onFileChange}
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
            type="number"
            onChange={(e) => setPrice(e.target.value ? Number(e.target.value) : '')}
          />
        </label>
        <label className="form__label">
          Цена за полтора часа
          <input
            className="biginput"
            value={price2}
            name="text"
            type="number"
            onChange={(e) => setPrice2(e.target.value ? Number(e.target.value) : '')}
          />
        </label>
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
}
