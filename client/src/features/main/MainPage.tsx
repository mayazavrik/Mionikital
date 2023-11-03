import React from 'react';
import video from './style/tesla.mp4';

function MainPage(): JSX.Element {
  return (
    <>
      {/* <div className="preload" data-preaload>
        <div className="circle"></div>
        <p className="text">Garage Guru</p>
      </div> */}

<div className="content">
          <div>
            <button id="b1" type="button" className="btn btn-outline-light">
            <label className="form-label">
              Выберите марку авто
              <div>
                <select id="group" name="group">
                  <option value="orel">Mercedes</option>
                  <option value="owl">Audi</option>
                  <option value="bee">Nissan</option>
                  <option value="bear">Kia</option>
                  <option value="enot">BMW</option>
                </select>
              </div>
            </label>
            </button>
          </div>

          <div>
            <button id="b1" type="button" className="btn btn-outline-light">
            
            <label className="form-label">
              Выберите тип услуги
              <div>
                <select id="group" name="group">
                  <option value="orel">Кузовной</option>
                  <option value="owl">ТО</option>
                  <option value="bee">Развал схожение</option>
                  <option value="bear">Замена колес</option>
                  <option value="enot">Замена масла</option>
                </select>
              </div>
            </label>
            </button>
          </div>
          <div>
            <button id="b1" type="button" className="btn btn-outline-light">
            <label className="form-label">
              Выберите местоположение
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
            </button>
          </div>
          
        </div>
      <video  id="background-video" muted loop autoPlay>
        <source src={video} type="video/mp4" />
      </video>
      <div>
        {/* <video autoPlay muted loop id="myVideo">
        <source  src={video} type="video/mp4" />
      </video> */}

       
      </div>
    </>
  );
}

export default MainPage;
