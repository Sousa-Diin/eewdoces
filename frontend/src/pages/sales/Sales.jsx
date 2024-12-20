import React, { } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../../provider/AuthContextProvider";
import './sales.css';

import Navbar from '../../components/footer/Navbar';
import SearchAndAdd from '../../components/searchadd/SearchAndAdd';
import SalesInfo from '../../components/card/sales/SalesInfo';


const Sales = () => {
  
  document.title = "eewdoces | Vendas"; // Define o título da aba
  // O array vazio faz com que o título mude apenas na montagem do componente
  const { sales, setSales } = useAuth();
  const navigate = useNavigate();
  
  return(
    <div className='container-main-sales'>
      <span className='title-sales' >Minhas vendas</span>
      <main className='container-sales'>
        <SearchAndAdd id='search-sales' placeholder={'Buscar por vendas'} handleSearch = {() => alert('Function in construction...')} handleAdd={() => navigate('/eewdoces/register/orders')}/>
        <SalesInfo arrayList={sales} onClick={{}}/>
      </main>
      <Navbar/>
    </div>
  );
}

export default Sales;
