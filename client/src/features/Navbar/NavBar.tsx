import React, { useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { Service, User } from '../LogReg/type';
import { logOut } from '../LogReg/AuthSlice';
import './style/style.css';
import type { RootState } from '../../redux/store';
import { useAppDispatch } from '../../redux/store';

function NavBar(): JSX.Element {

  const dispatch = useAppDispatch();
  const user: User = useSelector((store: RootState): User => store.auth.user);
  const service: Service = useSelector((store: RootState): User => store.auth.service);
  console.log(service);
  console.log(user);

  const onHandleLogout = async (): Promise<void> => {
    console.log('---');

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
                <option className="gold" value="spb">
                  Санкт-Петербург
                </option>
                <option className="gold" value="msk">
                  Москва
                </option>
                <option className="gold" value="kaz">
                  Казань
                </option>
                <option className="gold" value="nov">
                  Великий Новгород
                </option>
                <option className="gold" value="vlad">
                  Владивосток
                </option>
              </select>
            </div>
          </label>
        </div>
        <li className="nav-item">
          <NavLink to="/main">На главную</NavLink>
        </li>
        {service || user ? (
          <>
            <NavLink style={{ color: 'orange' }} onClick={onHandleLogout} to="/">
              logout
            </NavLink>
            {user && <div>Hello, {user.name}</div>}
            {service && <div>{service.title}</div>}
          </>
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

        {service && (
          <NavLink style={{ color: 'orange' }} to="/personalArea">
            Личный кабинет
          </NavLink>
        
        )}

      </div>
      <Outlet />
    </>
  );
}
export default NavBar;
