import React, { useEffect } from 'react';

import './orderregister.css';
import arrow_left from '../../../assets/icons/chevron-left.svg';

import ArrowLeft from '../../arrowleft/ArrowLeft';


const OrderRegister = () => {
 
  useEffect(()=>{ document.title="eewdoces | registro de pedido"},[]);

  const url = '/eewdoces/register/all';

  
  return(
    <div /* className='container-main-sales' */>
    <ArrowLeft to={url} logo={arrow_left} style='around' >Registre um pedido</ArrowLeft>
      <main className='container-sales-register'>
        {/* <SearchAndAdd id='search-sales' placeholder={'Buscar por vendas'}/> */}
       
        
      </main>
      {/* <Navbar/> */}
    </div>
  );
}

export default OrderRegister;
