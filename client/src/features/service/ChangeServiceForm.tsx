import React, { Dispatch, SetStateAction, useState } from 'react';
import './style/modal.css';
import {  useAppDispatch } from '../../redux/store';
import {  changeService } from './servicesSlice';
import { Service } from '../logreg/type';



function ChangeServiceForm({
  service,
  setModalActive,
}: {
    service: Service;
  setModalActive: Dispatch<SetStateAction<boolean>>;
}): JSX.Element {
  const [img, setImg] = useState<File | string | null>(service.img || null);
  const [title, setTitle] = useState(service?.title);
  const [text, setText] = useState(service?.text);
  const [price, setPrice] = useState<number>(service?.price || 0);
  const [price2, setPrice2] = useState<number>(service?.price2 || 0);

  
  const dispatch = useAppDispatch();

  // const onHandleChange = (e: React.FormEvent<HTMLFormElement>): void => {
  //   e.preventDefault();
  //   dispatch(changeService({ id: service.id, img, title, text , price, price2 }));
  //   setModalActive(false);
  // };
  const onHandleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    
    if (!img) {
      alert('Добавьте фото');
      return;
    }
    if (!service.id) {
      alert('Невозможно обновить, так как идентификатор услуги отсутствует');
      return;
    }
    const formData = new FormData();
    formData.append('id', service.id.toString());
    formData.append('title', title || ''); // Убедитесь, что title - строка
    formData.append('text', text || '');   // Убедитесь, что text - строка
    formData.append('price', price.toString()); // Преобразование числа в строку
    formData.append('price2', price2.toString()); // Преобразование числа в строку
    formData.append('img', img as Blob);
  
    try {
      // Отправка данных на сервер и ожидание результата
      await dispatch(changeService(formData)).unwrap();
      
      // Обновление состояния или перезапрос данных
      // Можно добавить dispatch(fetchServices()) если нужно перезапросить список услуг
      
      // Очистка состояния формы
      setImg(null);
      setTitle('');
      setText('');
      setPrice(0);
      setPrice2(0);
  
      // Закрытие модального окна
      setModalActive(false);
      
      // Опционально: Обновление состояния непосредственно (если применимо)
      // dispatch(updateServiceInState(updatedService));
    } catch (error) {
      console.error("Failed to update service:", error);
    }
  };
  
  const onFileChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    console.log(e.target.files);
    if (e.target.files) {
      setImg(e.target.files[0]);
    }
  }

  return (
    <div className='darkened'>
      <div className="modal active">
      <form className="modal-content active" onSubmit={onHandleSubmit}>
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
