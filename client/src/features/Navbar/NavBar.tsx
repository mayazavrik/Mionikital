import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import type { RootState } from '../../redux/store';
import { useAppDispatch } from '../../redux/store';
import { logOut } from '../LogReg/AuthSlice';
import type { User } from '../LogReg/type';

function NavBar(): JSX.Element {
  const user: User = useSelector((store: RootState): User => store.auth.user);
  console.log(user);

  const dispatch = useAppDispatch();

  const onHandleLogout = async (): Promise<void> => {
    dispatch(logOut());
  };

  return (
    <>
      <div className="nav-container">
        rfer{' '}
        {user ? (
          <NavLink onClick={onHandleLogout} to="/">
            logout
          </NavLink>
        ) : (
          <li>
            <NavLink to="reg">Вход</NavLink>
          </li>
        )}
        {/* <ul>
          {!user.id && (
            <li>
              <NavLink to="/">Auth page</NavLink>
            </li>
          )}
          {user.id && (
            <>
              <li>
                <NavLink onClick={onHandleLogout} to="/">
                  logout
                </NavLink>
              </li>
              <li>
                <NavLink to="/services">Сервисы</NavLink>
              </li>
              <li>Hello, {user.name}</li>
            </>
          )}
        </ul> */}
      </div>
      <Outlet />
    </>
  );
}

export default NavBar;
