import React, { useState } from 'react';
import SignUpService from './SignUpService';
import { useAppDispatch } from '../../redux/store';
import { signInService } from './AuthSlice';

function SignInService(): JSX.Element {
  const [email, setEmail] = useState('');
  const [signService, setSignService] = useState(false);
  const [password, setPassword] = useState('');

  const dispatch = useAppDispatch();
  //   const onHandleSignIn = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
  //     e.preventDefault();
  //     setPhone(phone.replace(/-/g, ''));
  //     dispatch(signUp({ name, password, phone, email }));
  //   };

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
              <button type="submit">Submit</button>
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
