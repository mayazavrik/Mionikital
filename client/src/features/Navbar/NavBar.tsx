import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../redux/store';
import type { User } from '../../redux/type';
import { Data } from '../logreg/types/type';
import fetchLogout from './api';

function NavBar(): JSX.Element {
  const user: User = useSelector((store: RootState): User => store.user.user);
  console.log(user);

  const dispatch = useAppDispatch();
  const onHandleLogout = async (): Promise<void> => {
    const data: Data = await fetchLogout();
    if (data.message === 'success') {
      dispatch({ type: 'user/get', payload: {} });
    }
  };
  return (
    <>
      <div className="nav-container">
        <ul>
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
              <li>
                Hello, {user.name}, your score: {user.score}
              </li>
            </>
          )}
        </ul>
      </div>
      <Outlet />
    </>
  );
}

export default NavBar;
