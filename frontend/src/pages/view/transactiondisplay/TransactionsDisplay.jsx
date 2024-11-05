import React, { useEffect } from 'react';

import './transactionsdisplay.css';
import arrow_left from '../../../assets/icons/chevron-left.svg';

import ArrowLeft from '../../arrowleft/ArrowLeft';
import SearchAndAdd from '../../../components/searchadd/SearchAndAdd';
import { useNavigate } from 'react-router-dom';


const TransactionsDisplay = () => {
 
  useEffect(()=>{ document.title="eewdoces | minhas transações"},[]);

  const url = '/eewdoces/register';
  const navigate = useNavigate();
  
  return(
    <div /* className='container-main-sales' */>
    <ArrowLeft to={url} logo={arrow_left} style='around' >Minhas transações</ArrowLeft>
      <main className='container-sales-register'>
        <SearchAndAdd id='search-sales' placeholder={'Buscar por transações'}  handleSearch = {() => alert('Function in construction...')} handleAdd={() => navigate('/eewdoces/register/transactions')}/>
       
        
      </main>
      {/* <Navbar/> */}
    </div>
  );
}

export default TransactionsDisplay;
