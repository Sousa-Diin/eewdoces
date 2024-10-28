import React from 'react';
import './arrowleft.css';
import { Link } from 'react-router-dom';

function ArrowLeft({children, logo, style, to}) {
  return (
    <section className={style.container}>
      <Link to={to} style={{ textDecoration: 'none'}} className={style.container}>
        <img className={style.img} src={logo}/>
        <span className={style.title}>{children}</span>   
      </Link>  
    </section>
    
  );
}

export default ArrowLeft;
