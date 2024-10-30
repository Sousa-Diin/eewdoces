import React from "react";

import './options.css';

const Options = ({handleVisibleContainer}) => {
 
  return (
    <>
      <nav>
        <img src="" alt="list menu icon" className="list" />
        <button onClick={ handleVisibleContainer }><img src="" alt="close menu icon" className="close" /> X </button>
      </nav>
    </>
  )

}

export default Options;