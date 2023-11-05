import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import type { Service } from '../LogReg/type';
import type { RootState } from '../../redux/store';

function PersonalArea(): JSX.Element {
  const [photo, setPhoto] = useState(true);

  const service: Service = useSelector((store: RootState) => store.auth.service);

  const handleServicePut = () => {};

  // const [img, setImg] = useState('');
  // const onHandleAdd = (e: React.FormEvent<HTMLFormElement>): void => {
  //   e.preventDefault();
  //   dispatch(addSales({ service_id: service.id, img, text }));
  // };

  return (
    <div>
      <img
        style={{ width: '300px' }}
        src="https://oir.mobi/uploads/posts/2022-08/1661338462_1-oir-mobi-p-pustoi-fon-vkontakte-1.png"
        alt="r"
      />
      <button type="submit" onClick={() => setPhoto(!photo)}>
        Изменить фото аккаунта
      </button>
      {photo === false && (
        <>
          {!service.img ? <input placeholder="url image" /> : <img src={service.img} alt="r" />}

          <div>или</div>
          <input type="file" accept="image/*" onChange={(e) => handleFileChange(e)} />
          <button onClick={()=>handleServicePut()}>save</button>
        </>
      )}

      <div>Название салона: {service.title}</div>
      <div>Адрес салона: {service.adress}</div>
      <div>Email: {service.email}</div>
      <div>Номер телефона: {service.phone}</div>
      <div>Ваш тариф: {service.tarif}</div>
    </div>
  );
}

export default PersonalArea;
