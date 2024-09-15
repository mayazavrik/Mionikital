import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { NavLink, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { logOut } from '../logreg/AuthSlice';
import style from './style/Navbar.module.css';
import './style/style.css';
import type { RootState } from '../../redux/store';
import { useAppDispatch } from '../../redux/store';

import Footer from '../footer/Footer';
import picnav from '../../images/vecteezy_wellness-icon-png-clipart-free_23618239.png';

function NavBar(): JSX.Element {
  const [nav, setNav] = useState(false);
  const closeMenu = () => {
    setNav(false); 
  };
  const dispatch = useAppDispatch();
  const user = useSelector((store: RootState) => store.auth.user);
  const scrollToFooter = () => {
    const footerElement = document.getElementById('footer');
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: 'smooth' });
      closeMenu(); // Закрыть меню после клика
    }
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    closeMenu(); // Закрыть меню после клика
  };

  const onHandleLogout = async (): Promise<void> => {
    try {
      await dispatch(logOut());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <img className='picnav' src={picnav} alt='pic' />
        <div className={style.box}>
          <ul
            className={
              nav ? [style.menu, style.active].join(' ') : [style.menu].join(' ')
            }
          >
            <li className="nav-item">
              <NavLink onClick={closeMenu} className="navlink" to="/">
                На главную
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink onClick={closeMenu}  className="navlink" to="/services">
                Массаж
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink onClick={scrollToTop}   className="navlink" to="/doctors">
                Врачи
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink onClick={closeMenu} className="navlink" to="/courses">
                Абонементы
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink onClick={closeMenu}  className="navlink" to="/news">
                Статьи
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink onClick={closeMenu}  className="navlink" to="/sales">
                Акции
              </NavLink>
            </li>
            <button onClick={scrollToFooter} id="b2" type="button" className="navlink">
						<NavLink className="navlink3" to="#footer">
							Связаться
						</NavLink>
					</button>
            {user ? (
              <>
                <li className="nav-item">
                  <button className="navlink" onClick={onHandleLogout}>
                    Выйти
                  </button>
                </li>
                {user && <div className="nav-hello">Привет, {user.name}</div>}
              </>
            ) : (
              <li className="nav-item">
                {/* <NavLink className="navlink" to="reg">
                  Вход
                </NavLink> */}
              </li>
            )}

          
          </ul>
          <div onClick={() => setNav(!nav)} className={style.mobile_btn}>
            {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
          </div>
        </div>
      </div>

      <Outlet />

      <Footer />
    </>
  );
}

export default NavBar;

//     <>
//       <div className="collapse navbar-collapse" id="navbarResponsive">
//       <img className='picnav' src={picnav} alt='pic' />
   
//         <button onClick={() => setModalActive(!modalActive)} id="menu-close" className="menu_close btn flex">
//         <img  className='menuclose' src={menuclose} alt='pic' />
//       </button>
    
//     <div className={
//               nav ? [style.menu, style.active].join(' ') : [style.menu]
//             }>
//     <li className="nav-item">
//           <NavLink className="navlink" to="/">
//             На главную
//           </NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink className="navlink" to="/services">
//             Массаж
//           </NavLink>
//         </li>   
//         <li className="nav-item">
//           <NavLink className="navlink" to="/courses">
//             Абонементы
//           </NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink className="navlink" to="/news">
//             Статьи
//           </NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink className="navlink" to="/sales">
//             Акции
//           </NavLink>
//         </li>
//         {user ? (
//           <>
//             <NavLink
//               className="nav-item"
              
//               onClick={onHandleLogout}
//               to="/"
//             >
//               Выйти
//             </NavLink>
//             {user && <div className="nav-hello">Привет, {user.name}</div>}
            
//           </>
//         ) : (
//           <li className="nav-item">
//             {/* <NavLink className="navlink" to="reg">
//               Вход
//             </NavLink> */}
//           </li>
//         )}
      
//         {user?.isAdmin && (
//           <NavLink className="nav-item" to="/personalArea/admin">
//             Личный кабинет
//           </NavLink>
//         )}{' '}
//           <button onClick={() => setModalActive(modalActive)} id="menu-button" className="menu2 ">
//         <img  className='menuicon' src={menuicon} alt='pic' /> </button>
//       </div>
    
//     </div>
     
//       <Outlet />

//       <Footer />
//     </>
//   );
// }




// /* eslint-disable @typescript-eslint/no-unsafe-member-access */
// /* eslint-disable jsx-a11y/label-has-associated-control */
// /* eslint-disable @typescript-eslint/no-unsafe-return */
// /* eslint-disable @typescript-eslint/no-unsafe-assignment */
// import React, { useEffect, useState } from 'react';
// import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
// import { NavLink, Outlet } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { logOut } from '../LogReg/AuthSlice';
// import style from './style/Navbar.module.css';
// import './style/style.css';
// import type { RootState } from '../../redux/store';
// import { useAppDispatch } from '../../redux/store';

// import Footer from '../footer/Footer';
// import picnav from '../../images/vecteezy_wellness-icon-png-clipart-free_23618239.png';



// function NavBar(): JSX.Element {
//   const [nav, setNav] = useState(false);
//   const dispatch = useAppDispatch();
//   const user = useSelector((store: RootState) => store.auth.user);
//   // const service = useSelector((store: RootState) => store.auth.service);

//   const onHandleLogout = async (): Promise<void> => {
//     dispatch(logOut()).catch(console.log);
//   };

//   return (
//     <>
//       <div className="collapse navbar-collapse" id="navbarResponsive">
//       <img className='picnav' src={picnav} alt='pic' />
   
//         <button onClick={() => setModalActive(!modalActive)} id="menu-close" className="menu_close btn flex">
//         <img  className='menuclose' src={menuclose} alt='pic' />
//       </button>
    
//     <div className={
//               nav ? [style.menu, style.active].join(' ') : [style.menu]
//             }>
//     <li className="nav-item">
//           <NavLink className="navlink" to="/">
//             На главную
//           </NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink className="navlink" to="/services">
//             Массаж
//           </NavLink>
//         </li>   
//         <li className="nav-item">
//           <NavLink className="navlink" to="/courses">
//             Абонементы
//           </NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink className="navlink" to="/news">
//             Статьи
//           </NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink className="navlink" to="/sales">
//             Акции
//           </NavLink>
//         </li>
//         {user ? (
//           <>
//             <NavLink
//               className="nav-item"
              
//               onClick={onHandleLogout}
//               to="/"
//             >
//               Выйти
//             </NavLink>
//             {user && <div className="nav-hello">Привет, {user.name}</div>}
            
//           </>
//         ) : (
//           <li className="nav-item">
//             {/* <NavLink className="navlink" to="reg">
//               Вход
//             </NavLink> */}
//           </li>
//         )}
      
//         {user?.isAdmin && (
//           <NavLink className="nav-item" to="/personalArea/admin">
//             Личный кабинет
//           </NavLink>
//         )}{' '}
//           <button onClick={() => setModalActive(modalActive)} id="menu-button" className="menu2 ">
//         <img  className='menuicon' src={menuicon} alt='pic' /> </button>
//       </div>
    
//     </div>
     
//       <Outlet />

//       <Footer />
//     </>
//   );
// }
// export default NavBar;
