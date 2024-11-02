import React, { useEffect } from 'react';

import './clientregister.css';
import arrow_left from '../../../assets/icons/chevron-left.svg';
import ArrowLeft from '../../arrowleft/ArrowLeft';
import SearchAndAdd from '../../../components/searchadd/SearchAndAdd'
import SalesInfo from '../../../components/card/sales/SalesInfo';

const ClientRegister = () => {
 
  useEffect(()=>{ document.title="eewdoces | cadastro de cliente"},[]);

  const url = '/eewdoces/register/all';

  
  return(
    <div className='container-main-sales-register'>
      <ArrowLeft to={url} logo={arrow_left} >Cadastre um cliente</ArrowLeft>
      <main className='container-sales-register'>
        <SearchAndAdd id='search-sales' placeholder={'Buscar por nome do cliente'}/>
        <SalesInfo arrayList={[]}/>
        
      </main>
      {/* <Navbar/> */}
    </div>
  );
}

export default ClientRegister;
