import React, { useEffect } from 'react';

import './supplierregister.css';
import arrow_left from '../../../assets/icons/chevron-left.svg';

import ArrowLeft from '../../arrowleft/ArrowLeft';


const SupplierRegister = () => {
 
  useEffect(()=>{ document.title="eewdoces | cadastro de fornecedor"},[]);

  const url = '/eewdoces/view/suppliers';

  
  return(
    <div /* className='container-main-sales' */>
    <ArrowLeft to={url} logo={arrow_left} style='around' >Cadastre um fornecedor</ArrowLeft>
      <main className='container-sales-register'>
        {/* <SearchAndAdd id='search-sales' placeholder={'Buscar por vendas'}/> */}
       
        
      </main>
      {/* <Navbar/> */}
    </div>
  );
}

export default SupplierRegister;
