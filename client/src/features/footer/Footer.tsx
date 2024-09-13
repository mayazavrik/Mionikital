import React from 'react';
import './style/style.css';
import { NavLink, Outlet } from 'react-router-dom';
import { BiSolidToTop } from 'react-icons/bi';
import { FaWhatsappSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import pic from '../../images/6.jpg';

function Footer(): JSX.Element {
  return (
    <div className="footer" id="footer">
      <div className="box-container">
        <div className="box">
        <h3>Навигация</h3>
          <li className="footeritem">
            <NavLink className="footerlink" to="/">
              На главную
            </NavLink>
          </li>
          <li className="footeritem">
            <NavLink className="footerlink" to="/services">
              Сервисы
            </NavLink>
          </li>

          <li className="footeritem">
            <NavLink className="footerlink" to="/news">
              Статьи
            </NavLink>
          </li>

          <li className="footeritem">
            <NavLink className="footerlink" to="/sales">
              Акции
            </NavLink>
          </li>
        </div>
        <div className="box2">
          <h3>Контакты</h3>
          <a href="#">
            {' '}
            <i className="fas fa-phone" /> 
            <FaPhone style={{
      color: 'green',
      fontSize: '30px',
     
    }} />+79669298681{' '}
          </a>
          <a href="#">
            {' '}
            <i className="fas fa-envelope" />
            <MdEmail style={{
      color: 'yellow',
      fontSize: '30px',
     
    }} /> mionik1@yandex.ru{' '}
          </a>
  

          <a href="https://wa.me/79669298681?text=Здравствуйте%2C+пишу+с+сайта">
            {' '}
            <i className="whatsapp"/> <FaWhatsappSquare style={{
      color: 'green',
      fontSize: '30px',
     
    }} />
    Whatsapp{' '}
            
          </a>
          <a href="https://t.me/mionik_m">
            {' '}
            <i className="fab tg"/> 
            <FaTelegram style={{
      color: 'blue',
      fontSize: '30px',
     
    }} />Telegram{' '}
          </a>
          <a href="https://www.youtube.com/channel/UC1ZqbOD0wJ2EFblg5A1tvFg">
            {' '}
            <i className="fab tg"/>
            <IoLogoYoutube style={{
      color: 'red',
      fontSize: '30px',
     
    }} />
     Youtube{' '}
          </a>
          
        </div>

        <div className="credit shadow">
          {' '}
          created by LAPOCHKI
          <button className="totop" onClick={() => window.scrollTo({ top: 0, bahavior: 'smooth' })}>
            <BiSolidToTop />
          </button>
         
          <img className="carpic" src={pic} alt="pic" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
