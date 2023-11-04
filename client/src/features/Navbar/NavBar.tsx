
import { logOut } from '../LogReg/AuthSlice';
import type { User } from '../LogReg/type';
import React, { useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './style/style.css';
import { RootState, useAppDispatch } from '../../redux/store';
function NavBar(): JSX.Element {
  const dispatch = useAppDispatch();
    const user: User = useSelector((store: RootState): User => store.auth.user);

  const onHandleLogout = async (): Promise<void> => {
    dispatch(logOut());
  };

  return (
    <>
  

      <div className="collapse navbar-collapse" id="navbarResponsive">
      <div className="nav-item"> 
            <label className="form-label">
              Выберите город
              <div>
                <select id="group" name="groupGold">
                  <option className='gold' value="spb">Санкт-Петербург</option>
                  <option className='gold' value="msk">Москва</option>
                  <option className='gold' value="kaz">Казань</option>
                  <option className='gold' value="nov">Великий Новгород</option>
                  <option className='gold' value="vlad">Владивосток</option>
                </select>
              </div>
            </label>
          </div>
      <li className="nav-item">
            <NavLink to="/main">На главную</NavLink>
          </li>
      {user ? (
          <NavLink onClick={onHandleLogout} to="/">
            logout
          </NavLink>
        ) : (
          <li>
            <NavLink to="reg">Вход</NavLink>
          </li>
        )}
          <li className="nav-item">
            <NavLink to="/services">Сервисы</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/news">Статьи</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/sales">Акции</NavLink>
        </li>
      </div>
      <Outlet />
    </>
  );
}
export default NavBar;

