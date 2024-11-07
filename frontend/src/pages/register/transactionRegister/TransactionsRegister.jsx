import React, { useEffect } from 'react';

import './transactionsregister.css';
import arrow_left from '../../../assets/icons/chevron-left.svg';

import ArrowLeft from '../../arrowleft/ArrowLeft';


const TransactionsRegister = () => {
 
  useEffect(()=>{ document.title="eewdoces | registro de transações"},[]);

  const url = '/eewdoces/view/transactions';

  
  return(
    <div /* className='container-main-sales' */>
    <ArrowLeft to={url} logo={arrow_left} style='around' >Registro de transações</ArrowLeft>
      <main className='container-sales-register'>
        
       
        
      </main>
      {/* <Navbar/> */}
    </div>
  );
}

export default TransactionsRegister;
