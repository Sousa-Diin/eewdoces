import React, { useEffect } from 'react';

import './productregister.css';
import arrow_left from '../../../assets/icons/chevron-left.svg';

import ArrowLeft from '../../arrowleft/ArrowLeft';


const ProductRegister = () => {
 
  useEffect(()=>{ document.title="eewdoces | cadastro de produto"},[]);

  const url = '/eewdoces/view/products';

  
  return(
    <div /* className='container-main-sales' */>
    <ArrowLeft to={url} logo={arrow_left} style='around' >Cadastre um produto</ArrowLeft>
      <main className='container-sales-register'>
        
       
        
      </main>
      {/* <Navbar/> */}
    </div>
  );
}

export default ProductRegister;
