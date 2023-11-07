import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';
import { useAppDispatch } from '../../redux/store';
import { signIn, signUp } from './AuthSlice';
import SignUpService from './SignUpService';

function SignIn(): JSX.Element {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [tarif, setTearif] = useState('');
  const [sign, setSign] = useState(false);
  const [status, setStatus] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const dispatch = useAppDispatch();
  const user = useSelector((store: RootState) => store.auth.user);
  const errorUser = useSelector((store: RootState) => store.auth.error);
  const service = useSelector((store: RootState) => store.auth.service);
  const navigate = useNavigate();

  const onHandlePlayerAdd = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    dispatch(signIn({ password, email }));
  };

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
      const { value } = select;
      if (value) {
        // console.log(value);
        setTearif(value);
      }
    });
  };
  useEffect(() => {
    if (user || service) {
      navigate('/');
    }
    fontSelectClick();
    fontService();
  }, [user, status, tarif, sign]);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {sign === false ? (
        <>
          <select style={{ width: '300px' }} id="selectClick">
            <option value="Service" disabled selected>
              Выберите{' '}
            </option>
            <option value="Service">Service</option>
            <option value="User">User</option>
          </select>
          {status === false ? (
            <SignUpService />
          ) : (
            <div>
              <h1>Регистрация</h1>
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
                <button type="submit" onClick={() => setSubmitted(true)}>
                  Submit
                </button>
                <button type="submit">Забыли пароль?</button>
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
          )}
        </>
      ) : (
        <>
          <h1>Вход (user)</h1>
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
              <button type="submit" onClick={() => setSubmitted(true)}>
                save
              </button>
              <button type="submit">Забыли пароль?</button>
              {submitted === true && errorUser && <h3>{errorUser}</h3>}
            </form>
            <button
              type="button"
              onClick={() => {
                setSign(false);
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
