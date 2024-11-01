import React from "react";

import './options.css';
import list from '../../../assets/icons/list.svg';
import close from '../../../assets/icons/x-circle-fill.svg';

const Options = ({handleVisibleContainer}) => {
 
  return (
    <>
      <nav className="header-option">
        <img src={list} alt="list menu icon" className="list" />
        <button onClick={ handleVisibleContainer }><img src={close} alt="close menu icon" className="close" /></button>
      </nav>
    </>
  )

}

export default Options;