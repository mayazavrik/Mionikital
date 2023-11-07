import React from 'react';
import video from './style/vid_1.mp4';
import './style/main.css';
import SliderBlock from '../news/SliderBlock';
import { BiSolidToTop } from 'react-icons/bi';
import Footer from '../footer/Footer';
import { NavLink } from 'react-router-dom';

function MainPage(): JSX.Element {
  return (
    <div className="wrapper">
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
                              <div className='videocontainer'>
                              <video id="background-video" muted loop autoPlay>
                      <source src={video} type="video/mp4" />
                    </video>
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
