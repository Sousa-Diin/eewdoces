import React from "react";

import './menuprincipal.css';
import close from '../../../assets/icons/close.svg';


const MenuPrincipal = ({open, handleClosenMenu}) => {

  return (
    <div className={`cantainer-main-menu-principal ${open ? 'open-menu' : ''}`}>
      <section className="cantainer-main-menu-principal-cmd">
       <img src="" alt="add-client" />
       <img src="" alt="add-supplier" />
       <img src="" alt="add-product" />
       <img src="" alt="create-order" /> 
      </section>
      <button onClick={handleClosenMenu}><img src={close} alt="" /></button>
    </div>
  )

}

export default MenuPrincipal;