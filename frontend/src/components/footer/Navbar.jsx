import React, { useState } from 'react';
import './navbar.css'; // Estilos separados

import { navbarlist } from '../../config/layout/ListItens.js';
import ButtonIcon from '../button/ButtonIcon';
import SideBar from '../option/SideBar.jsx';
import MenuPrincipal from '../menu/menumain/MenuPrincipal.jsx';
import BtnLink from '../button/link/BtnLink.jsx';

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
    <>
    <div className="navbar-footer">
        <BtnLink id={navbarlist[0].name} className={navbarlist[0].style} src={navbarlist[0].src} link={navbarlist[0].path}/>
        <BtnLink id={navbarlist[1].name} className={navbarlist[1].style} src={navbarlist[1].src} link={navbarlist[1].path}/>
        <ButtonIcon id={navbarlist[2].name} style={navbarlist[2].style} src={navbarlist[2].src} onClick={handleClosenMenu}/>
        <BtnLink id={navbarlist[3].name} className={navbarlist[3].style} src={navbarlist[3].src} link={navbarlist[3].path}/>
        <ButtonIcon id={navbarlist[4].name} className={navbarlist[4].style} src={navbarlist[4].src} onClick={handleVisibleContainer}/>
      
    </div>
    <SideBar visible={visible} handleVisibleContainer={handleVisibleContainer}/>
    <MenuPrincipal open={open} handleClosenMenu={handleClosenMenu}/>
    </>
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