import React, { Dispatch, SetStateAction, useState } from 'react';
import './style/modal.css';
import { useAppDispatch } from '../../redux/store';
import { Sale } from './types/type';
import { updateSale } from '../sales/salesSlice';


function ChangeSaleForm({
  sale,
  setModalActive,
}: {
  sale: Sale;
  setModalActive: Dispatch<SetStateAction<boolean>>;
}): JSX.Element {

  const [text, setText] = useState(sale?.text);

  const [img, setImg]= useState<File | string | null>(sale?.img);



  
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
    formData.append('id', sale.id.toString());
    formData.append('text', text);
    
 
    formData.append('img', img);
  
    try {
      // Отправка данных на сервер и ожидание результата
      await dispatch(updateSale(formData)).unwrap();
      
      // Обновление состояния или перезапрос данных
      // Можно добавить dispatch(fetchServices()) если нужно перезапросить список услуг
      
      // Очистка состояния формы
      setImg(null);
      setText('');
   
    
  
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
					Фото акции
          <input
            className="form__label"
        
            name="img"
            type="file"
            onChange={onFileChange}
          />
				</label>
        <label className="form__label ">
          Текст акции
          <textarea
        
            className="biginput"
            value={text}
            onChange={(e) => setText(e.target.value)}
          
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

export default ChangeSaleForm;
