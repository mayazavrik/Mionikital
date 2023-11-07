/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { logOut } from '../LogReg/AuthSlice';
import './style/style.css';
import type { RootState } from '../../redux/store';
import { useAppDispatch } from '../../redux/store';

function NavBar(): JSX.Element {
  const dispatch = useAppDispatch();
  const user = useSelector((store: RootState) => store.auth.user);
  const service = useSelector((store: RootState) => store.auth.service);
;

  const onHandleLogout = async (): Promise<void> => {
    dispatch(logOut()).catch(console.log);
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
        {user?.id === 1 && (
          <NavLink style={{ color: 'orange' }} to="/personalArea/admin">
            Личный кабинет
          </NavLink>
        )}
      </div>
      {service?.isChecked === false && (
        <span className="centered-text" style={{ textAlign: 'center', fontSize: '15px' }}>
          Ваш аккаунт находится на проверке, после успешной аутентификации ваш профиль станет
          активным и пользователи смогут записаться или связаться с вами.
        </span>
      )}
      <Outlet />
    </>
  );
}
export default NavBar;
