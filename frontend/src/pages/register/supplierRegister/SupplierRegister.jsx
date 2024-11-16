import React, { useEffect } from 'react';

import './supplierregister.css';
import arrow_left from '../../../assets/icons/chevron-left.svg';

import ArrowLeft from '../../arrowleft/ArrowLeft';
import PeopleForm from '../forms/PeopleForm';


const SupplierRegister = () => {
 
  useEffect(()=>{ document.title="eewdoces | cadastro de fornecedor"},[]);

  const url = '/eewdoces/view/suppliers';

  
  return(
    <div /* className='container-main-sales' */>
    <ArrowLeft to={url} logo={arrow_left} style='around' >Cadastre um fornecedor</ArrowLeft>
      <main className='container-sales-register'>     
        <PeopleForm type = 'supplier' titleBtn={'Salvar fornecedor'}/>
      </main>
      {/* <Navbar/> */}
    </div>
  );
}

export default SupplierRegister;
