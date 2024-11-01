import React from 'react';
import './arrowleft.css';
import { Link } from 'react-router-dom';

function ArrowLeft({children, logo, to}) {

  const sty = {
    title: 'container-back-title',
    img: 'container-back-img',
    container:'container-back-container',
  }

  return (
    <section className={sty.container}>
      <div  className={sty.container} >
        <Link to={to}  className={sty.img} ><img src={logo}/></Link>
        <span className={sty.title}>{children}</span>   
      </div>  
    </section>
    
  );
}

export default ArrowLeft;
