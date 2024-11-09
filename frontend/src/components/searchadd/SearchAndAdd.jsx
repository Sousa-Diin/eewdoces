import React from "react";

import './searchandadd.css';

import x from '../../assets/icons/x.svg';
import circle_plus from '../../assets/icons/circle-plus.svg';

const SearchAndAdd = ({id, placeholder, searchTerm, handleClearInput, handleSearchChange, handleAdd}) => {
  return ( 
    <nav className='dad-search-container'>
      <div className='search-container'>
        <input value={searchTerm} onChange={handleSearchChange} type="text" placeholder={placeholder} /> 
        <img className={searchTerm === "" ? "" : 'search-container-show-img'} onClick={ handleClearInput } src={x} alt="lupa search" />
      </div> 
      <img onClick={handleAdd} src={circle_plus} alt=" add item" id={id} />
    </nav>
  )
}

export default SearchAndAdd;