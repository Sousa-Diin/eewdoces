import React, { useState } from 'react';
import './navbar.css'; // Estilos separados

import { navbarlist } from '../../config/layout/ListItens.js';
import ButtonIcon from '../button/ButtonIcon';
import SideBar from '../option/SideBar.jsx';
import MenuPrincipal from '../menu/menumain/MenuPrincipal.jsx';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  const [visible, setVisible] = useState(false);
  const [open, handleOpenMenu] = useState(false);
  
  const handleVisibleContainer = () => {
    setVisible(!visible);
  }
  const handleClosenMenu = () => {
    handleOpenMenu(!open);
  }

  const handleChangeRoute = route => {
    if (route === '/eewdoces/main/option'){
      return handleVisibleContainer;
    } 
    else if (route === '/eewdoces/main/menu'){
      return handleClosenMenu;
    }
    return route;
  }

  const navigate = useNavigate();

  return (
    <div className="navbar-footer">
      {navbarlist && navbarlist.map((item, index) => {
        return(
          <>
            <div className= {item.style } key={index}>
              <ButtonIcon 
                id={item.name} 
                link={
                  item.path !== '/eewdoces/main/option' || item.path === '/eewdoces/main/menu' 
                  ? item.path 
                  : ''
                 }
                onClick={
                  item.path === '/eewdoces/main/option' ? handleVisibleContainer
                  : item.path === '/eewdoces/main/menu' ? handleClosenMenu 
                  : item.path 
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

                         /* 
 item.path === '/eewdoces/main/option' ? handleVisibleContainer
 : item.path  ? item.path === '/eewdoces/main/menu' ? handleClosenMenu 
 : item.path : item.path */