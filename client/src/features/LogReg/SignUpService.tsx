import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SignInService from './SignInService';
import { registrService } from './AuthSlice';
import type { RootState } from '../../redux/store';
import { useAppDispatch } from '../../redux/store';

function SignUpService(): JSX.Element {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [title, setTitle] = useState('');
  const [adress, setAdress] = useState('');
  const [signService, setSignService] = useState(true);
  const [tarif, setTearif] = useState('');
  const service = useSelector((store: RootState) => store.auth.service);

  const dispatch = useAppDispatch();

  const fontService = function (): void {
    const select = document.getElementById('selectClickService');
    select?.addEventListener('change', () => {
      const { value } = select;
      if (value) {
        // console.log(value);
        setTearif(value);
      }
    });
  };
  const navigate = useNavigate();
  useEffect(() => {
    if (service) {
      navigate('/');
    }
    fontService();
  }, [tarif, service]);
  // console.log(tarif);

  const onHandleServiceAdd = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    void dispatch(registrService({ title, email, password, adress, phone, tarif }));
  };
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {signService === false ? (
        <SignInService />
      ) : (
        <div>
          <h1>Регистрация (Сервиса)</h1>
          <form
            style={{ display: 'flex', flexDirection: 'column' }}
            onSubmit={(e) => {
              void onHandleServiceAdd(e);
            }}
          >
            <label htmlFor="a">
              Title
              <input
                placeholder="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </label>
            <label htmlFor="a">
              Email
              <input
                placeholder="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <label htmlFor="a">
              Password
              <input
                placeholder="password"
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
            <label htmlFor="a">
              Adress
              <input
                placeholder="adress"
                type="text"
                value={adress}
                onChange={(e) => setAdress(e.target.value)}
                required
              />
            </label>
            <label htmlFor="a">
              Phone +7
              <input
                placeholder="phone"
                type="tel"
                name="tel"
                maxLength={11}
                value={phone}
                onChange={(e) => {
                  const phoneWithoutDashes = e.target.value.replace(/-/g, ''); // Удаляем все существующие дефисы из значения ввода
                  const phoneWithDashes = phoneWithoutDashes.replace(
                    /(\d{3})(\d{3})(\d{2})(\d{2})/g,
                    '$1-$2-$3-$4',
                  ); // Добавляем дефисы после каждой третьей цифры
                  setPhone(phoneWithDashes);
                }}
                required
              />
            </label>
            <label htmlFor="a">
              Tarif
              <select style={{ width: '300px' }} id="selectClickService">
                <option value="Service" disabled selected>
                  Выберите
                </option>
                <option value="5000$">На месяц 5000$</option>
                <option value="10000$">На год 10000$</option>
              </select>
            </label>
            <button type="submit">save</button>
            <button type="submit">Забыли пароль?</button>
          </form>
          <button type="submit" onClick={() => setSignService(false)}>
            У меня есть
          </button>
        </div>
      )}
    </>
  );
}

export default SignUpService;
