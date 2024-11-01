import React, { useEffect } from 'react';

import './salesregister.css';
import arrow_left from '../../../assets/icons/chevron-left.svg';

import Navbar from '../../../components/footer/Navbar';
import SearchAndAdd from '../../../components/searchadd/SearchAndAdd';
import ArrowLeft from '../../arrowleft/ArrowLeft';


const SalesRegister = () => {
 
  useEffect(()=>{ document.title="eewdoces | cadastro de produto"},[]);

  const url = '/eewdoces/register/all';

  
  return(
    <div /* className='container-main-sales' */>
    <ArrowLeft to={url} logo={arrow_left} style='around' >Cadastre um produto</ArrowLeft>
      <main className='container-sales-register'>
        {/* <SearchAndAdd id='search-sales' placeholder={'Buscar por vendas'}/> */}
       
        
      </main>
      {/* <Navbar/> */}
    </div>
  );
}

export default SalesRegister;
