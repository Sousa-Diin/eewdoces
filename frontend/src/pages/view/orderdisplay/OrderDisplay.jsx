import React, { useEffect } from 'react';

import './orderdisplay.css';
import arrow_left from '../../../assets/icons/chevron-left.svg';

import SearchAndAdd from '../../../components/searchadd/SearchAndAdd';
import ArrowLeft from '../../arrowleft/ArrowLeft';
import { useNavigate } from 'react-router-dom';
import Order from '../../../components/card/order/Order';


const SalesDisplay = () => {
 
  useEffect(()=>{ document.title="eewdoces | meus pedidos"},[]);

  const url = '/eewdoces/register';
  const navigate = useNavigate();
  
  return(
    <div /* className='container-main-sales' */>
    <ArrowLeft to={url} logo={arrow_left} style='around' >Meus pedidos</ArrowLeft>
      <main className='container-sales-register'>
        <SearchAndAdd id='search-sales' placeholder={'Buscar por pedido'} handleSearch = {() => alert('Function in construction...')} handleAdd={() => navigate('/eewdoces/register/orders')}/>
       <Order/>
        
      </main>
      {/* <Navbar/> */}
    </div>
  );
}

export default SalesDisplay;
