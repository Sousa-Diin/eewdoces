import React, { useEffect } from 'react';

import './sales.css';

import Navbar from '../../components/footer/Navbar';
import SearchAndAdd from '../../components/searchadd/SearchAndAdd';
import SalesInfo from '../../components/card/sales/SalesInfo';
import { useNavigate } from 'react-router-dom';


const Sales = () => {
  useEffect(() => {
      document.title = "eewdoces | Vendas"; // Define o título da aba
  }, []); // O array vazio faz com que o título mude apenas na montagem do componente

  const navigate = useNavigate();
  const listSales = [
    {content:"Sales #1"},
    {content:"Sales #2"},
    {content:"Sales #3"},
    {content:"Sales #4"},
    {content:"Sales #4"},
    {content:"Sales #4"},
    {content:"Sales #4"},
    {content:"Sales #4"},
    {content:"Sales #4"},
    {content:"Sales #4"},
    {content:"Sales #4"},
    {content:"Sales #4"},
    {content:"Sales #4"},
    {content:"Sales #4"},
    {content:"Sales #4"},
    {content:"Sales #4"},
    {content:"Sales #4"},
    {content:"Sales #4"},
    {content:"Sales #4"},
    {content:"Sales #4"},
    {content:"Sales #4"},
    {content:"Sales #4"},
    {content:"Sales #4"},
    {content:"Sales #4"},
    {content:"Sales #4"},
    {content:"Sales #4"},
    {content:"Sales #4"},
    {content:"Sales #4"},
    {content:"Sales #4"},
    {content:"Sales #4"},
    {content:"Sales #4"},
    {content:"Sales #4"},
    {content:"Sales #4"},
    {content:"Sales #4"},
    {content:"Sales #4"},
    {content:"Sales #4"},
    {content:"Sales #4"},
    {content:"Sales #4"},
    {content:"Sales #4"},
    {content:"Sales #4"},
    {content:"Sales #4"},
    {content:"Sales #4"},
    {content:"Sales #4"},
    {content:"Sales #4"},
    {content:"Sales #4"},
    {content:"Sales #4"},
    {content:"Sales #4"},
    {content:"Sales #4"},
    {content:"Sales #4"},
    {content:"Sales #4"},
    {content:"Sales #4"},
    {content:"Sales #4"},
    {content:"Sales #4"},
    {content:"Sales #4"},
    {content:"Sales #4"},
    {content:"Sales #5"},
    {content:"Sales #6"},
    {content:"Sales #7"},
    {content:"Sales #8"},
    {content:"Sales #9"},
    {content:"Sales #10"},
    {content:"Sales #11"},
    {content:"Sales #12"},
    {content:"Sales #13"},
    {content:"Sales #14"},
    {content:"Sales #15"},
    {content:"Sales #16"},
    {content:"Sales #17"},
    {content:"Sales #17"},
    {content:"Sales #17"},
    {content:"Sales #17"},
    {content:"Sales #17"},
    {content:"Sales #17"},
    {content:"Sales #17"},
    {content:"Sales #17"},
    {content:"Sales #17"},
    {content:"Sales #17"},
    {content:"Sales #17"},
    {content:"Sales #17"},
    {content:"Sales #17"},
    {content:"Sales #17"},
    {content:"Sales #17"},
    {content:"Sales #17"},
    {content:"Sales #17"},
    {content:"Sales #17"},
    {content:"Sales #17"},
    {content:"Sales #17"},
    {content:"Sales #17"},
    {content:"Sales #17"},
    {content:"Sales #17"},
    {content:"Sales #17"},
    {content:"Sales #17"},
    {content:"Sales #17"},
    {content:"Sales #17"},
    {content:"Sales #17"},
  ];
  
  return(
    <div className='container-main-sales'>
      <span className='title-sales' >Minhas vendas</span>
      <main className='container-sales'>
        <SearchAndAdd id='search-sales' placeholder={'Buscar por vendas'} handleSearch = {() => alert('Function in construction...')} handleAdd={() => navigate('/eewdoces/register/orders')}/>
        <SalesInfo arrayList={listSales}/>
        
      </main>
      <Navbar/>
    </div>
  );
}

export default Sales;

  
{/* <div className="sales">venda #1</div>
<div className="sales">venda #2</div>
<div className="sales">venda #3</div>
<div className="sales">venda #4</div>
<div className="sales">venda #5</div>
<div className="sales">venda #6</div>
<div className="sales">venda #7</div>
<div className="sales">venda #8</div>
<div className="sales">venda #9</div>
<div className="sales">venda #10</div>
<div className="sales">venda #11</div>
<div className="sales">venda #12</div>
<div className="sales">venda #13</div>
<div className="sales">venda #14</div>
<div className="sales">venda #15</div>
<div className="sales">venda #16</div>
<div className="sales">venda #17</div>
<div className="sales">venda #18</div>
<div className="sales">venda #19</div>
<div className="sales">venda #20</div> */}