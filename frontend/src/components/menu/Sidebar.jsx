import React from 'react';
import './sidebar.css';


function Sidebar ({activePage, setActivePage}){

  return (
    <div className='sidebar-business'>
      <button id='sales' onClick={()=> setActivePage('vendas')} className={activePage === 'vendas' ? 'underline': '' }>Vendas</button>
      <button id='business' onClick={()=> setActivePage('meuNegocio')} className={activePage === 'meuNegocio' ? 'underline': '' }>Meu Negócio</button>
    </div>
  );
}

export default Sidebar;