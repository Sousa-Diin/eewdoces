import React from "react";

import './searchandadd.css';

import lupa from '../../assets/icons/lupa.svg';
import circle_plus from '../../assets/icons/circle-plus.svg';

const SearchAndAdd = ({id, placeholder, handleSearch, handleAdd}) => {
  return ( 
    <nav className='dad-search-container'>
      <div className='search-container'>
        <input type="text" placeholder={placeholder} /> 
        <img onClick={handleSearch} src={lupa} alt="lupa search" />
      </div> 
      <img onClick={handleAdd} src={circle_plus} alt=" add item" id={id} />
    </nav>
  )
}

export default SearchAndAdd;