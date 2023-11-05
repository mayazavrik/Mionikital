import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import type { Service } from '../LogReg/type';
import { useAppDispatch, type RootState } from '../../redux/store';
import { updatePhoto } from './PersonalSlice';

function PersonalArea(): JSX.Element {
  const [photo, setPhoto] = useState('true');
  const [img, setImg] = useState('');
  const dispatch = useAppDispatch();
  const service: Service = useSelector((store: RootState) => store.auth.service);

  const handleServicePut = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    dispatch(updatePhoto({ img, id: service.id }));
  };
  //   console.log(img);

  return (
    <div>
      {service?.img ? (
        <img style={{ width: '300px' }} src={service.img} />
      ) : (
        <img
          style={{ width: '300px' }}
          src="https://oir.mobi/uploads/posts/2022-08/1661338462_1-oir-mobi-p-pustoi-fon-vkontakte-1.png"
          alt="r"
        />
      )}

      <button type="submit" onClick={() => setPhoto(!photo)}>
        Изменить фото аккаунта
      </button>
      {photo === false && (
        <>
          <input placeholder="url image" value={img} onChange={(e) => setImg(e.target.value)} />
          <div>или</div>
          <input
            style={{ width: '300px' }}
            type="file"
            accept="image/*"
            onChange={(e) => handleFileChange(e)}
          />
          <button onClick={(e) => handleServicePut(e)}>save</button>
        </>
      )}

      <div>Название салона: {service?.title}</div>
      <div>Адрес салона: {service?.adress}</div>
      <div>Email: {service?.email}</div>
      <div>Номер телефона: {service?.phone}</div>
      <div>Ваш тариф: {service?.tarif}</div>
    </div>
  );
}

export default PersonalArea;
