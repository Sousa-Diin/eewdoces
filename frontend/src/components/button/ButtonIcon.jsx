import React from 'react';

import './btnicon.css';
import { Link } from 'react-router-dom';

function ButtonIcon ({id, src, alt,onClick, name}) {


  return( 
      <Link to={onClick}>
        <button onClick={onClick} className='button' id={id}>
          <img src={src} alt={alt} />
        </button>
        {name}
      </Link>
  );
}

export default ButtonIcon;