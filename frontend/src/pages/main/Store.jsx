import React from 'react';
import './Store.css';
import logo from '../../assets/img/eewdoces_adesivo_com_arco.png';
import Header from '../../components/header/Header';
import Sidebar from '../../components/menu/Sidebar';
import Navbar from '../../components/footer/Navbar';
import { useState } from 'react';
import MyBusiness from '../business/Business';
import Sales from '../sales/Sales';

function Store({hidden,}) {
  let style = {
    div:"head-container-div",
    img:"head-container-img",
    h3: "head-container-h3"
  }

  const [activePage, setActivePage] = useState('vendas');

  return (
    <div className='container-faturar-cobrar'>
      <Header 
        title={'E&W'} 
        logo={logo}
        style={style}
      />
      
      <main id='main-s-n' className='main-menu'>
        <Sidebar activePage={activePage} setActivePage={setActivePage}/>
        {activePage === 'vendas' && <Sales/>}
        {activePage === 'meuNegocio' && <MyBusiness/>} 
      </main>
      
      <Navbar/>
    </div>
  );
}

export default Store;
