import React from 'react';

import './btnicon.css';

function ButtonIcon ({id, src, onClick, style}) {


  return( 
    <button onClick={onClick} className={style} id={id}>
      <img src={src} alt='btn icon' />
    </button>
  );
}

export default ButtonIcon;