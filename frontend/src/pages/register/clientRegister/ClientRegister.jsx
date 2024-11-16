import React, { useEffect } from 'react';

import './clientregister.css';
import arrow_left from '../../../assets/icons/chevron-left.svg';
import ArrowLeft from '../../arrowleft/ArrowLeft';
import PeopleForm from '../forms/PeopleForm';

const ClientRegister = () => {
 
  useEffect(()=>{ document.title="eewdoces | cadastro de cliente"},[]);

  const url = '/eewdoces/view/clients';

  
  return(
    <div className='container-main-sales-register'>
      <ArrowLeft to={url} logo={arrow_left} >Cadastre um cliente</ArrowLeft>
      <main className='container-sales-register'>
        <PeopleForm type = 'client' titleBtn='Salvar cliente'/>
      </main>
      {/* <Navbar/> */}
    </div>
  );
}

export default ClientRegister;
