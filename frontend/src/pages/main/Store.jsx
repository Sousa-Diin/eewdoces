import React from 'react';
import './Store.css';

import Header from '../../components/header/Header';
import Sidebar from '../../components/menu/Sidebar';
import Navbar from '../../components/footer/Navbar';
import MyBusiness from '../business/Business';
import Winnings from '../winnings/Winnings';

import { useState } from 'react';
function Store({hidden}) {
 
  const [activePage, setActivePage] = useState('vendas');

  return (
    <div className='container-faturar-cobrar'>
      <Header/>
      <main id='main-s-n' className='main-menu'>
        <Sidebar activePage={activePage} setActivePage={setActivePage}/>
        {activePage === 'vendas' && <Winnings/>}
        {activePage === 'meuNegocio' && <MyBusiness/>} 
      </main>
      <Navbar/>
    </div>
  );
}

export default Store;
