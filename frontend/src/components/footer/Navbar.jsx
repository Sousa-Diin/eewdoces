import React, { useState } from 'react';
import './navbar.css'; // Estilos separados

import { navbarlist } from '../../config/layout/ListItens.js';
import ButtonIcon from '../button/ButtonIcon';
import SideBar from '../option/SideBar.jsx';

const Navbar = () => {

  const [visible, setVisible] = useState(true);
  
  const handleVisibleContainer = () => {
    setVisible(!visible);
  }

  return (
    <div className="navbar-footer">
      {navbarlist && navbarlist.map((item, index) => {
        return(
          <>
            <div className= {item.style } key={index}>
              <ButtonIcon id={item.name} onClick={item.path !== '/eewdoces/main/option' ? item.path : handleVisibleContainer } src={item.src} alt={item.alt} />
            </div>
            <SideBar visible={visible} handleVisibleContainer={handleVisibleContainer}/>
          </>
          
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