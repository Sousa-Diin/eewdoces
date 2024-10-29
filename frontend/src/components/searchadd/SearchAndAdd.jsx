import React from "react";

import './searchandadd.css';

import lupa from '../../assets/icons/lupa.svg';
import circle_plus from '../../assets/icons/circle-plus.svg';

const SearchAndAdd = ({id, placeholder}) => {
  return ( 
    <nav className='dad-search-container'>
      <div className='search-container'>
        <input type="text" placeholder={placeholder} /> 
        <img src={lupa} alt="lupa search" />
      </div> 
      <img src={circle_plus} alt=" add item" id={id} />
    </nav>
  )
}

export default SearchAndAdd;