import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './style/style.css';
import { RootState, useAppDispatch } from '../../redux/store';

// import { fetchLogOut } from '../../App/api';

function NavBar(): JSX.Element {
  const dispatch = useAppDispatch();
  // const user = useSelector((store: RootState) => store.auth.user);
  // const logOut = (): void => {
  //   fetchLogOut()
  //     .then((data) => data.message === 'success' && dispatch({ type: 'auth/logOut' }))
  //     .catch(console.log);
  // };
  return (
    <>
  

      <div className="collapse navbar-collapse" id="navbarResponsive">
   
        <ul className="navbar-nav text-uppercase ml-auto">
          <li className="nav-item">
            <NavLink to="/services">Сервисы</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/news">Статьи</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/sales">Акции</NavLink>
          </li>
          <div className="nav-item"> 
            <label className="form-label">
              Выберите город
              <div>
                <select id="group" name="group">
                  <option value="orel">Санкт-Петербург</option>
                  <option value="owl">Москва</option>
                  <option value="bee">Казань</option>
                  <option value="bear">Великий Новгород</option>
                  <option value="enot">Владивосток</option>
                </select>
              </div>
            </label>
          </div>
          {/* {!user ? (
            <>
              <li>
                <NavLink to="/sign-in">Sign-in</NavLink>
              </li>
              <li>
                <NavLink to="/sign-up">Sign-up</NavLink>
              </li>
            </>
          ) : (
            <li>
              <NavLink onClick={logOut} to="/">
                logout{' '}
              </NavLink>
            </li>
          )} */}
        </ul>
      </div>
      <Outlet />
    </>
  );
}
export default NavBar;
// export default NavBar; // import React from 'react';
// import { useSelector } from 'react-redux';
// import { NavLink, Outlet, useNavigate } from 'react-router-dom';
// import { RootState, useAppDispatch } from '../../redux/store';
// import type { User } from '../../redux/type';
// import { Data } from '../logreg/types/type';
// import fetchLogout from './api';

// function NavBar(): JSX.Element {
//   const user: User = useSelector((store: RootState): User => store.user.user);
//   console.log(user);

//   const dispatch = useAppDispatch();
//   const onHandleLogout = async (): Promise<void> => {
//     const data: Data = await fetchLogout();
//     if (data.message === 'success') {
//       dispatch({ type: 'user/get', payload: {} });
//     }
//   };
//   return (
//     <>
//       <div className="nav-container">
//         <ul>
//           {!user.id && (
//             <li>
//               <NavLink to="/">Auth page</NavLink>
//             </li>
//           )}
//           {user.id && (
//             <>
//               <li>
//                 <NavLink onClick={onHandleLogout} to="/">
//                   logout
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/services">Сервисы</NavLink>
//               </li>
//               <li>
//                 <NavLink to="/news">Статьи</NavLink>
//               </li>
//               <li>
//                 <NavLink to="/sales">Акции</NavLink>
//               </li>
//               <div>
//             <label className="form-label">
//               Выберите город
//               <div>
//                 <select id="group" name="group">
//                   <option value="orel">Санкт-Петербург</option>
//                   <option value="owl">Москва</option>
//                   <option value="bee">Казань</option>
//                   <option value="bear">Великий Новгород</option>
//                   <option value="enot">Владивосток</option>
//                 </select>
//               </div>
//             </label>
//           </div>
//               <li>
//                 Hello, {user.name}
//               </li>
//             </>
//           )}
//         </ul>
//       </div>
//       {/* <Outlet /> */}
//     </>
//   );
// }

// export default NavBar;
