import React, { useEffect } from 'react';

import './clientregister.css';
import arrow_left from '../../../assets/icons/chevron-left.svg';

import ArrowLeft from '../../arrowleft/ArrowLeft';


const ClientRegister = () => {
 
  useEffect(()=>{ document.title="eewdoces | cadastro de cliente"},[]);

  const url = '/eewdoces/register/all';

  
  return(
    <div /* className='container-main-sales' */>
    <ArrowLeft to={url} logo={arrow_left} style='around' >Cadastre um cliente</ArrowLeft>
      <main className='container-sales-register'>
        {/* <SearchAndAdd id='search-sales' placeholder={'Buscar por vendas'}/> */}
       
        
      </main>
      {/* <Navbar/> */}
    </div>
  );
}

export default ClientRegister;
