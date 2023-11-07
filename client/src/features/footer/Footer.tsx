import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './style/style.css';
import { NavLink, Outlet } from 'react-router-dom';
import { BiSolidToTop } from "react-icons/bi";


function Footer(): JSX.Element {

    return (
        <>
       
                    <div className="footer" id="footer">

                        < div className="box-container">

                            <div className="box">
   
                                <NavLink to="/main" style={({ isActive }) => ({
    color: isActive ? 'gold' : 'black',
    background: isActive ? 'black' : 'gold',
  })} >На главную</NavLink>
                              

      
                                <NavLink to="/services"style={({ isActive }) => ({
    color: isActive ? 'gold' : 'black',
    background: isActive ? 'black' : 'gold',
  })}>Сервисы</NavLink>
   
        
                                <NavLink to="/news"style={({ isActive }) => ({
    color: isActive ? 'gold' : 'black',
    background: isActive ? 'black' : 'gold',
  })}>Статьи</NavLink>
      

     
                                <NavLink to="/sales"style={({ isActive }) => ({
    color: isActive ? 'gold' : 'black',
    background: isActive ? 'black' : 'gold',
  })}>Акции</NavLink>
    




                            </div>
                                <div className="box2">
        <h3>contact info</h3>
        <a href="#"> <i className="fas fa-phone"></i> +7777777 </a>
        <a href="#"> <i className="fas fa-envelope"></i> lapocki@gmail.com </a>
        <a href="#"> <i className="fas fa-map-marker-alt"></i> ELBRUS </a>
   
        <a href="#"> <i className="fab fa-facebook-f"></i> GITHUB </a>
        <a href="#"> <i className="fab fa-linkedin"></i> linkedin </a>
       
      
    </div>

                            <div className="credit shadow"> created by LAPOCHKI
                            <button onClick={() => window.scrollTo({top:0, bahavior: 'smooth'})}><BiSolidToTop/></button></div>
                            

                        </div>
                        
   
        </div>
                        <Outlet />
                        
                </>
                
        );
        
    }

export default Footer;