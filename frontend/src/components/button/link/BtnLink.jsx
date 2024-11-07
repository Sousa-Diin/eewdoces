import React from 'react';
import { Link } from 'react-router-dom';

import '../btnicon.css';

function BtnLink ({id, src, link, name, style}) {


  return( 
      <Link to={link} className={style} id={id}>
          <img src={src} alt={'menu iocn'} />
          {name}
      </Link>
  );
}

export default BtnLink;