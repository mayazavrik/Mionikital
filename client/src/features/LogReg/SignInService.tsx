import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import SignUpService from './SignUpService';
import type { RootState } from '../../redux/store';
import { useAppDispatch } from '../../redux/store';
import { signInService } from './AuthSlice';

function SignInService(): JSX.Element {
  const [email, setEmail] = useState('');
  const [signService, setSignService] = useState(false);
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const dispatch = useAppDispatch();
  //   const onHandleSignIn = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
  //     e.preventDefault();
  //     setPhone(phone.replace(/-/g, ''));
  //     dispatch(signUp({ name, password, phone, email }));
  //   };
  const service = useSelector((strore: RootState) => strore.auth);
  const onHandleServiceIn = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    void dispatch(signInService({ password, email }));
  };

  return (
    <div>
      {signService === true ? (
        <SignUpService />
      ) : (
        <>
          <h1>Вход(servis) </h1>
          <div>
            <form
              style={{ display: 'flex', flexDirection: 'column' }}
              onSubmit={(e) => void onHandleServiceIn(e)}
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
                Submit
              </button>
              <button type="submit">Забыли пароль?</button>
              {submitted === true && service.error && <h3>{service.error}</h3>}
            </form>
            <button type="submit" onClick={() => setSignService(true)}>
              Регистрация
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default SignInService;
