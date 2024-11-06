import React, { useEffect } from 'react';

import './transactionsdisplay.css';
import arrow_left from '../../../assets/icons/chevron-left.svg';

import ArrowLeft from '../../arrowleft/ArrowLeft';
import SearchAndAdd from '../../../components/searchadd/SearchAndAdd';
import { useNavigate } from 'react-router-dom';
import Transaction from '../../../components/card/transaction/Transaction';


const TransactionsDisplay = () => {
 
  useEffect(()=>{ document.title="eewdoces | minhas transações"},[]);

  const url = '/eewdoces/register';
  const navigate = useNavigate();
  const handleClick = () => { navigate('/eewdoces/register/transactions')}
  const transaction = [
    {
      "id": 1,
      "order_id": "ef77870a-383a-4e82-9532-5902dc469046",
      "amount_paid": "29.95",
      "method_paid": "pix",
      "payment_status": "pago",
      "date_transaction": "2024-10-08T20:50:00.000Z"
    }
  ];
  
  return(
    <div /* className='container-main-sales' */>
    <ArrowLeft to={url} logo={arrow_left} style='around' >Minhas transações</ArrowLeft>
      <main className='container-sales-register'>
        <SearchAndAdd id='search-sales' placeholder={'Buscar por transações'}  handleSearch = {() => alert('Function in construction...')} handleAdd={handleClick}/>
        <Transaction arrayList={transaction} onClick={handleClick}/>
        
      </main>
      {/* <Navbar/> */}
    </div>
  );
}

export default TransactionsDisplay;
