import React, { useEffect } from 'react';

import './sales.css';
import arrowBack from '../../assets/icons/chevron-left.svg';
import lupa from '../../assets/icons/lupa.svg';
import circle_plus from '../../assets/icons/circle-plus.svg';

import Navbar from '../../components/footer/Navbar';
import ArrowLeft from '../../pages/arrowleft/ArrowLeft';


const Sales = () => {
  useEffect(() => {
      document.title = "eewdoces | Vendas"; // Define o título da aba
  }, []); // O array vazio faz com que o título mude apenas na montagem do componente
  
  return(
    <div style={{backgroundColor:'#cdd5db', gap:'1rem'}}>
     <span style={{margin:'5px .5rem'}}>Minhas vendas </span>
      <main className='container-sales'>
        <nav ><div className='search-container'><input type="text" placeholder='Buscar por' /> <img src={lupa} alt="lupa search" /></div> <img src={circle_plus} alt=" add sales" id="addSales" /></nav>
        <section className="my-sales">
          <div className="sales">venda #1</div>
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
          <div className="sales">venda #20</div>
        </section>
      </main>
      <Navbar/>
    </div>
  );
}

export default Sales;