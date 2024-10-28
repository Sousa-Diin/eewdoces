import React, { useEffect } from 'react';
import Navbar from '../../components/footer/Navbar';

const Sales = () => {
  useEffect(() => {
      document.title = "eewdoces | Vendas"; // Define o título da aba
  }, []); // O array vazio faz com que o título mude apenas na montagem do componente
  
  return(
    <div className=''>
      <h6>Minhas vendas</h6>

      <Navbar/>
    </div>
  );
}

export default Sales;