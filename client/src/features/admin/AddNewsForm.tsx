import React, { useState } from 'react';
import './style/style.css';
import { useAppDispatch } from '../../redux/store';
import { addNews } from '../news/newsSlice';

function AddNewsForm(): JSX.Element {
  const [img, setImg] = useState<File | null>(null);
  const [text, setText] = useState('');
  const [title, setTitle] = useState('');
  const dispatch = useAppDispatch();
  const onHandleSubmit: React.FormEventHandler<HTMLFormElement> = async(e) => {
    e.preventDefault();
    if(!img) {
      alert('Добавьте фото');
      return;
    }
    const formData = new FormData();
    formData.append('title',title);
    formData.append('text',text);
  
    formData.append('img',img);
    dispatch(addNews(formData));
    setImg(null);
    setTitle('');
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
      <form className="form-sale" onSubmit={onHandleSubmit}>
      <label className='itemrow'>
        <p className='itemName'>  Заголовок статьи</p>
        <p className='iteminfo'>
        <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" />
        </p>
         
         
        </label>
        <label className='itemrow'>

       <input
            className="form__label"
        
            name="img"
            type="file"
            onChange={onFileChange}
          />
         
         
        </label>
        <label className='itemrow'>
        <p className='itemName'>Текст статьи </p>
        <p className='iteminfo'>
        <textarea 
            className="biginput"
            value={text}
            onChange={(e) => setText(e.target.value)}
             />
        </p>
           
        {/* это старый рабочий вариант с кривым инпутом */}
           {/* <input
            className="biginput"
            value={text}
            onChange={(e) => setText(e.target.value)}
            type="text"
          />  */}
 
        
             </label>
 

        <button className="btn" type="submit">
          Добавить статью
        </button>
      </form>
    </div>
  );
}

export default AddNewsForm;
