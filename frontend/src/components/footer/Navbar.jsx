import React, { useState } from 'react';
import './navbar.css'; // Estilos separados

import { navbarlist } from '../../config/layout/ListItens.js';
import ButtonIcon from '../button/ButtonIcon';
import SideBar from '../option/SideBar.jsx';
import MenuPrincipal from '../menu/menumain/MenuPrincipal.jsx';

const Navbar = () => {

  const [visible, setVisible] = useState(false);
  const [open, handleOpenMenu] = useState(false);
  
  const handleVisibleContainer = () => {
    setVisible(!visible);
  }
  const handleClosenMenu = () => {
    handleOpenMenu(!open);
  }

  return (
    <div className="navbar-footer">
      {navbarlist && navbarlist.map((item, index) => {
        return(
          <>
            <div className= {item.style } key={index}>
              <ButtonIcon 
                id={item.name} 
                onClick={
                  item.path === '/eewdoces/main/option' ? handleVisibleContainer
                  : item.path  ? item.path === '/eewdoces/main/menu' ? handleClosenMenu 
                  : item.path : ''
                }
                src={item.src} alt={item.alt} />
            </div>
            <SideBar visible={visible} handleVisibleContainer={handleVisibleContainer}/>
            <MenuPrincipal open={open} handleClosenMenu={handleClosenMenu}/>
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