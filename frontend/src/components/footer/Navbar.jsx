import React from 'react';
import './navbar.css'; // Estilos separados
import plus from '../../assets/icons/plus.svg';
import store from '../../assets/icons/shop.svg';
import product from '../../assets/icons/box2.svg';
import bag from '../../assets/icons/bag.svg';
import list from '../../assets/icons/list.svg';

const Navbar = () => {
  return (
    <div className="navbar-footer">
      <div className="nav-item">
        <button id="store-menu"><img src={store} alt="" /></button>
      </div>
      <div className="nav-item">
        <button id="product-menu"><img src={product} alt="" /></button>
      </div>

       {/* Botão de adicionar centralizado */}
       <div className="add-button">
        <button id="add-menu"><img src={plus} alt="" /></button>
      </div>

      <div className="nav-item">
        <button id="bag-menu"><img src={bag} alt="" /></button>
      </div>
      <div className="nav-item">
        <button id="list-menu"><img src={list} alt="" /></button>
      </div>
    </div>
  );
};

export default Navbar;
