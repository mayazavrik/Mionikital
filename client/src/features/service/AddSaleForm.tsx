import React, { useState } from 'react';
import { useAppDispatch } from '../../redux/store';
import { addSales } from '../sales/salesSlice';

import './style/style.css';

export default function AddSaleForm(): JSX.Element {
  const [text, setText] = useState('');
  const [img, setImg] =   useState<File | null>(null);
  const dispatch = useAppDispatch();

  const onHandleSubmit: React.FormEventHandler<HTMLFormElement> = async(e) => {
    e.preventDefault();
    if(!img) {
      alert('Добавьте фото');
      return;
    }
    const formData = new FormData();

    formData.append('text',text);
 
    formData.append('img',img);
    dispatch(addSales(formData));
    setImg(null);
 
    setText('');
  
  };
  const onFileChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    console.log(e.target.files);
    if (e.target.files) {
      setImg(e.target.files[0]);
    }
  }
  return (
    <div className="form__container">
      <form className="formsale"  onSubmit={onHandleSubmit}>
        <label className="form__label">
          Фото акции
          <input
            className="form__label"
        
            name="img"
            type="file"
            onChange={onFileChange}
          />
        </label>
        <label className="form__label">
          Текст акции
          <input
            className="biginput"
            value={text}
            name="text"
            type="text"
            onChange={(e) => setText(e.target.value)}
          />
        </label>
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
}
