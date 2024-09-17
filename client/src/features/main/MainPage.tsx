import React, { useEffect, useState } from 'react';
import image from './style/hands2.webp';
import { NavLink, useNavigate } from 'react-router-dom';
import './style/main.css';
import SliderBlock from '../news/SliderBlock';

function MainPage(): JSX.Element {
  const [, setClassStopScrolling] = useState<'' | 'stop-scrolling'>(''); // Изначальное состояние
  // const scrollToFooter = () => {
  // 	const footerElement = document.getElementById("footer");
  // 	if (footerElement) {
  // 		footerElement.scrollIntoView({ behavior: "smooth" });
  // 	}
  // };
  const navigate = useNavigate();

  const handleServices = () => {
    navigate('/services');
  };
  const stopPoint = 450;
  useEffect(() => {
    const handleScroll = (): void => {
      const { scrollY } = window;
      if (scrollY > stopPoint) {
        setClassStopScrolling('stop-scrolling');
      } else {
        setClassStopScrolling('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className="wrapper">
      <h1 className="font-link" id="bigName">
        Сlinica di massaggio
      </h1>
      <h1 className="par">
        Мы рады помочь вам в решении ваших проблем, не стесняйтесь обращаться к нам
      </h1>
      <div className="navbtns">
        <button onClick={handleServices} id="b1" type="button" className="btn btn-outline-light ">
          <NavLink className="navlink2" to="/services">
            Массаж
          </NavLink>
        </button>
        <button id="b1" type="button" className="btn btn-outline-light">
          <NavLink className="navlink2" to="/courses">
            Абонементы
          </NavLink>
        </button>
        <button
          id="b1"
          type="button"
          className="navlink4"
          onClick={() => window.open('https://dikidi.ru/895712', '_blank')}
        >
          Записаться
        </button>
      </div>

      <div className="container">
        {/* <div className="preload" data-preaload>
                  <div className="circle"></div>
                  <p className="text">Garage Guru</p>
                </div> */}

        {/* <div className="links_container">
                                <button id="b1" type="button" className="btn btn-outline-light">
                                  <NavLink className="navlink" to="/services">
                                    Сервисы
                                  </NavLink>
                                </button>

                                <button id="b1" type="button" className="btn btn-outline-light">
                                  <NavLink className="navlink" to="/sales">
                                    Акции
                                  </NavLink>
                                </button>
                              </div> */}
        <div className="videocontainer">
          <div id="background-video">
            <img className="hands" src={image} alt="main" />{' '}
          </div>
        </div>

        <div className="about">
          <div className="abouttext">
            Клиника массажа на Итальянской. Массаж стельки остеопатия.
          </div>
        </div>
        <div className="sliderPart">
          <SliderBlock />
        </div>

        {/* <Footer/> */}
      </div>
    </div>
  );
}

export default MainPage;
