import React from 'react';
import './navbar.css'; // Estilos separados

import navbarList from '../../config/layout/NavbarList';
import ButtonIcon from '../button/ButtonIcon';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  return (
    <div className="navbar-footer">
      {navbarList && navbarList.map((item, index) => {
        return(
          <div className={item.style} key={index}>
            <ButtonIcon id={item.name} onClick={item.path} src={item.src} alt={item.alt} />
          </div>
        )
      })}
    </div>
  );
};

export default Navbar;

{/* 
      <div className="nav-item">
        <button id="store-menu"><img src={store} alt="" /></button>
      </div> 
*/}