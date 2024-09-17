import React, { Dispatch, SetStateAction, useState } from 'react';
import './style/modal.css';
import { useAppDispatch } from '../../redux/store';
import {  changeNews } from './newsSlice';

import type { Post } from './types/Post';

function ChangeNewsForm({
  post,
  setModalActive,
}: {
  post: Post;
  setModalActive: Dispatch<SetStateAction<boolean>>;
}): JSX.Element {
  const [img, setImg] = useState<File | string | null>(post?.img);
  const [text, setText] = useState(post?.text);
  const [title, setTitle] = useState(post?.title);
  const dispatch = useAppDispatch();
  // const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
  //   e.preventDefault();
  //   dispatch(addNews({ img, text }));
  //   setImg('');
  //   setText('');
  // };
  const onHandleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    
    if (!img) {
      alert('Добавьте фото');
      return;
    }
    
    const formData = new FormData();
    formData.append('id', post.id.toString());
    formData.append('title', title);
    formData.append('text', text);
 
    formData.append('img', img);
  
    try {
      // Отправка данных на сервер и ожидание результата
       await dispatch(changeNews(formData)).unwrap();
      
      // Обновление состояния или перезапрос данных
      // Можно добавить dispatch(fetchServices()) если нужно перезапросить список услуг
      
      // Очистка состояния формы
      setImg(null);
      setTitle('');
      setText('');
    
  
      // Закрытие модального окна
      setModalActive(false);
      
      // Опционально: Обновление состояния непосредственно (если применимо)
      // dispatch(updateServiceInState(updatedService));
    } catch (error) {
      console.error("Failed to update post:", error);
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
      <label className="form__label ">
          Заголовок статьи
          <textarea
           
            className="biginput"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            
            
          />
        </label>
        <label className="form__label">
          Фото статьи
          <input
            className="form__label"
        
            name="img"
            type="file"
            onChange={onFileChange}
          />
				</label>

        <label className="form__label ">
          Текст статьи
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

export default ChangeNewsForm;
