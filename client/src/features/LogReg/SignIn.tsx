import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';
import { useAppDispatch } from '../../redux/store';
import { signIn, signUp } from './AuthSlice';

function SignIn(): JSX.Element {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [title, setTitle] = useState('');
  const [adress, setAdress] = useState('');
  const [tarif, setTearif] = useState('');
  const [sign, setSign] = useState(false);
  const [status, setStatus] = useState(true);
  const dispatch = useAppDispatch();

  const onHandlePlayerAdd = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    void dispatch(signIn({ password, email }));
  };
  const onHandleServiceAdd = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    void dispatch(registrService({ title, email, password, adress, phone, tarif }));
  };
  const user = useSelector((store: RootState) => store.auth.user);
  const navigate = useNavigate();

  const onHandleSignIn = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setPhone(phone.replace(/-/g, ''));
    dispatch(signUp({ name, password, phone, email }));
  };
  const fontSelectClick = function (): void {
    const select = document.getElementById('selectClick');
    select?.addEventListener('change', () => {
      const { value }: any = select;
      if (value === 'Service') {
        setStatus(false);
      } else {
        setStatus(true);
      }
    });
  };
  const fontService = function (): void {
    const select = document.getElementById('selectClickService');
    select?.addEventListener('change', () => {
      const value = select.value;
      if (value) {
        console.log(value);
        setTearif(value);
      }
    });
  };
  useEffect(() => {
    if (user) {
      navigate('/');
    }
    fontSelectClick();
    fontService();
  }, [user, status, tarif]);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {sign === false ? (
        <>
          <h1>Регистрация</h1>
          <select style={{ width: '300px' }} id="selectClick">
            <option value="Service" disabled selected>
              Выберите{' '}
            </option>
            <option value="Service">Service</option>
            <option value="User">User</option>
          </select>
          {status === true ? (
            <div>
              <form
                style={{ display: 'flex', flexDirection: 'column' }}
                onSubmit={(e) => {
                  void onHandleSignIn(e);
                }}
              >
                <label htmlFor="a">
                  Name
                  <input
                    placeholder="name"
                    value={name}
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </label>
                <label htmlFor="a">
                  Email
                  <input
                    value={email}
                    placeholder="email"
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    required
                  />
                </label>

                <label htmlFor="a">
                  Phone +7
                  <input
                    placeholder="phone"
                    type="tel"
                    name="tel"
                    maxLength="11"
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
                <label htmlFor="d">
                  Password
                  <input
                    value={password}
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}
                    name="password"
                    type="password"
                    required
                  />
                </label>
                <button type="submit">Submit</button>
              </form>
              <button
                type="button"
                onClick={() => {
                  setSign(!sign);
                }}
              >
                У меня есть аккаунт
              </button>
            </div>
          ) : (
            <form
              style={{ display: 'flex', flexDirection: 'column' }}
              onSubmit={(e) => {
                void onHandleServiceAdd(e);
              }}
            >
              <label htmlFor="a">
                Title
                <input placeholder="title" type="text" value={title} required />
              </label>
              <label htmlFor="a">
                Email
                <input placeholder="email" type="text" value={email} required />
              </label>
              <label htmlFor="a">
                Password
                <input placeholder="password" type="text" value={password} required />
              </label>
              <label htmlFor="a">
                Adress
                <input placeholder="adress" type="text" value={adress} required />
              </label>
              <label htmlFor="a">
                Phone +7
                <input
                  placeholder="phone"
                  type="tel"
                  name="tel"
                  maxLength="11"
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
            </form>
          )}
        </>
      ) : (
        <>
          <h1>Вход </h1>
          <div>
            <form
              style={{ display: 'flex', flexDirection: 'column' }}
              onSubmit={(e) => void onHandlePlayerAdd(e)}
            >
              <label htmlFor="a">
                Email
                <input
                  value={email}
                  placeholder="email"
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  type="text"
                  required
                />
              </label>

              <label htmlFor="d">
                Password
                <input
                  value={password}
                  placeholder="password"
                  onChange={(e) => setPassword(e.target.value)}
                  name="password"
                  type="password"
                  required
                />
              </label>
              <button type="submit">Submit</button>
            </form>
            <button
              type="button"
              onClick={() => {
                setSign(!sign);
              }}
            >
              Регистрация
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default SignIn;
