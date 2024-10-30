import React from "react";

import './menuprincipal.css';
import close from '../../../assets/icons/close.svg';


const MenuPrincipal = ({open, handleClosenMenu}) => {

  return (
    <main className={`cantainer-main-menu-principal ${open ? 'open-menu' : ''}`}>
      <button onClick={handleClosenMenu}><img src={close} alt="" /></button>
    </main>
  )

}

export default MenuPrincipal;