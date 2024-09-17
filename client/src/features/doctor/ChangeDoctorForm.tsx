import React, { Dispatch, SetStateAction, useState } from 'react';
import './style/modal.css';
import { useAppDispatch } from '../../redux/store';
import {  changeDoctor} from './doctorSlice';

import { DoctorCard} from './types/types';

function ChangeDoctorForm({
  doctor,
  setModalActive,
}: {
  doctor: DoctorCard;
  setModalActive: Dispatch<SetStateAction<boolean>>;
}): JSX.Element {

  const [title, setTitle] = useState(doctor?.title);
 
  const [about, setAbout] = useState(doctor?.about);
  const [img, setImg] = useState<File | string | null>(doctor?.img);
  



  
  const dispatch = useAppDispatch();
  // const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
  //   e.preventDefault();
  //   dispatch(addDoctor({ id: doctor.id,  title, img,  about}));
  //   setTitle("");

	// 	setAbout("");
  //   setImg("");

  
  // };
  const onHandleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    
    if (!img) {
      alert('Добавьте фото');
      return;
    }
    
    const formData = new FormData();
    formData.append('id', doctor.id.toString());
    formData.append('title', title);
    formData.append('about', about);
 
    formData.append('img', img);
  
    try {
      // Отправка данных на сервер и ожидание результата
      await dispatch(changeDoctor(formData)).unwrap();
      
      // Обновление состояния или перезапрос данных
      // Можно добавить dispatch(fetchServices()) если нужно перезапросить список услуг
      
      // Очистка состояния формы
      setImg(null);
      setTitle('');
      setAbout('');
    
  
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
          Имя врача
          <input
            className="biginput"
            value={title}
            name="text"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label className="form__label">
					Фото врача
          <input
            className="form__label"
        
            name="img"
            type="file"
            onChange={onFileChange}
          />
				</label>
        <label className="form__label ">
          О враче
          <textarea
        
            className="biginput"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
          
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

export default ChangeDoctorForm;
