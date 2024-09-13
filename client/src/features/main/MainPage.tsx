import React, { useEffect, useState } from 'react';
import image from './style/hands2.webp';
import './style/main.css';
import SliderBlock from '../news/SliderBlock';
import { BiSolidToTop } from 'react-icons/bi';
import Footer from '../footer/Footer';
import { NavLink } from 'react-router-dom';

function MainPage(): JSX.Element {
  const [classStopScroll, setClassStopScrolling] = useState<'' | 'stop-scrolling'>(''); // Initial top position
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
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="wrapper">
      <div className="container">
        <div className="forname">
          <div id='namecont' className={`naming ${classStopScroll}`}>
            <h1 className="font-link" id='bigName'>Сlinica di massaggio</h1>
            <h1 className='par'>
            Мы рады помочь вам в решении ваших проблем, не стесняйтесь обращаться к нам</h1>
           <div className='navbtns'>
           <button id="b1" type="button" className="btn btn-outline-light">
                                  <NavLink className="navlink2" to="/services">
                                  Массаж
                                  </NavLink>
                                </button>
                                <button id="b1" type="button" className="btn btn-outline-light">
                                  <NavLink className="navlink2" to="/courses">
                                  Абонементы
                                  </NavLink>
                                </button>
           </div>
                                 
          </div>
        </div>

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
        
            <div id='background-video'>
            <img className='hands' src={image} alt="main" /> </div>
   
        </div>

        <div className="about">
          <div className='abouttext'>Клиника массажа на Итальянской. Массаж стельки остеопатия.</div>
        </div>
        <div className="sliderPart">
          <SliderBlock />
        </div>
      </div>
      {/* <Footer/> */}
    </div>
  );
}

export default MainPage;
