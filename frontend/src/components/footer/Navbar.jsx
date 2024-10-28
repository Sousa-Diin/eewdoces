import React from 'react';
import './navbar.css'; // Estilos separados

import { navbarlist } from '../../config/layout/ListItens.js';
import ButtonIcon from '../button/ButtonIcon';

const Navbar = () => {

  return (
    <div className="navbar-footer">
      {navbarlist && navbarlist.map((item, index) => {
        return(
          <div className= {item.style } key={index}>
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