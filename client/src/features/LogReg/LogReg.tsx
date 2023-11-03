/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable no-lonely-if */
/* eslint-disable import/order */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import React, { useState } from 'react';
import { useAppDispatch } from '../../redux/store';
import type { RootState } from '../../redux/store';
import { useNavigate } from 'react-router-dom';
import type { Data } from './types';
import { regUser, logUser } from './api/api';

import './some.css';

// import { useSelector } from 'react-redux';

export default function LogReg(): JSX.Element {
  // const user = useSelector((store: RootState) => store.user.user);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [flag, setFlag] = useState('log');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const onHandleLog = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    e.preventDefault();
    const data: Data = await logUser(password, email);
    console.log(data);

    if (data.message === 'success') {
      dispatch({ type: 'user/load', payload: data.user });
      navigate('/game');
    } else {
      const mess = document.querySelector('.error');
      if (mess) {
        mess.textContent = data.message;
      }
    }
  };
  const onHandleReg = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    e.preventDefault();
    const data: Data = await regUser(password, email, name);
    console.log(data);

    if (data.message === 'success') {
      dispatch({ type: 'user/load', payload: data.user });
      navigate('/game');
    } else {
      const mess = document.querySelector('.error');
      if (mess) {
        mess.textContent = data.message;
      }
    }
  };

  return (
    <div className="Reg-log">
      {flag === 'log' && (
        <div className="log">
          <form onSubmit={onHandleLog}>
            <input
              value={email}
              name="email"
              type="text"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              value={password}
              name="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Submit</button>
          </form>
          <button
            type="button"
            onClick={() => {
              setFlag('reg');
            }}
          >
            У меня нет аккаунта
          </button>
        </div>
      )}
      {flag === 'reg' && (
        <div className="reg">
          <form onSubmit={onHandleReg}>
            <input
              value={email}
              name="email"
              type="text"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input value={name} name="name" type="text" onChange={(e) => setName(e.target.value)} />
            <input
              value={password}
              name="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="form-btn" type="submit">
              Войти
            </button>
          </form>
          <button
            className="form-btn"
            type="button"
            onClick={() => {
              setFlag('log');
            }}
          >
            У меня ecть аккаунт
          </button>
        </div>
      )}

      <h3 className="error" />
    </div>
  );
}
