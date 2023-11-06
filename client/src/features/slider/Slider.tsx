import React from 'react';
function Slider(): JSX.Element {
    return (
        <div className="slider-containner">
        <div className="carusel-containner">
          <span id="left"></span>
          <ul className="slider-items-containner">
            <li>
              <img
                src="https://www.leedam.com/uploads/1/3/9/7/13978721/usk-960x500.jpg"
                id="lastClone"
              />
            </li>
            <li>
              <img
                src="https://indiafacts.org/wp-content/uploads/2019/11/Equality-vs.-Nature-How-Hierarchy-can-Help-us-Save-the-Planet-960x500.jpg"
              />
            </li>

            <li>
              <img
                src="https://www.minnesotauncorked.com/wp-content/uploads/2019/03/million-hazelnut-campaign-960x500.png"
              />
            </li>

            <li>
              <img
                src="https://blog.aquacarpatica.com/english/wp-content/uploads/2018/02/rsz_dsc09790_pr_a-min-960x500.jpg"
              />
            </li>

            <li>
              <img
                src="https://www.leedam.com/uploads/1/3/9/7/13978721/usk-960x500.jpg"
              />
            </li>

            <li>
              <img
                src="https://indiafacts.org/wp-content/uploads/2019/11/Equality-vs.-Nature-How-Hierarchy-can-Help-us-Save-the-Planet-960x500.jpg"
                id="firstClone"
              />
            </li>
          </ul>
          <span id="right"></span>
          <button id="play">Play</button>
        </div>
      </div>
    )
}


export default Slider;

   

