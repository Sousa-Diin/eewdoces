import React, { useState, useEffect } from 'react';
import './business.css';
import Card2Col from '../../components/card/card2col/Card2Col';

const Business = () => {

  const [salesData, setSalesData] = useState([]);
  const [supplyData, setSupplyData] = useState([]);
  const [ordemPedido, setOrdemPedido] = useState([{label:'251024', value: 177, unidade:'reais'}]);
  const [faturamento, setFaturamento] = useState([
    {label:'Agosto', value: 110, unidade:'reais'},
    {label:'Setembro', value: 422.00, unidade:'reais'},
    {label:'Outubro', value: 1288, unidade:'reais'},
  ]);

  useEffect(() => {
    // Simula uma atualização de dados a cada 5 segundos
    const interval = setInterval(() => {
      setSalesData([
        {label: 'Diárias', value: Math.floor(Math.random() * 100), unidade: 'unidades'},
        {label: 'Semana', value: Math.floor(Math.random() * 700), unidade: 'unidades'},
        {label: 'Mensal', value: Math.floor(Math.random() * 3000), unidade: 'unidades'},
      ]);
      setSupplyData([
        {label: 'Ninho', value: Math.floor(Math.random() * 100), unidade: 'g'},
        {label: 'Leite condensado', value: Math.floor(Math.random() * 700), unidade: 'g'},
        {label: 'Creme de leite ', value: Math.floor(Math.random() * 3000), unidade: 'g'},
        {label: 'Chocolate ', value: Math.floor(Math.random() * 3000), unidade: 'g'},
        {label: 'Granule ', value: Math.floor(Math.random() * 3000), unidade: 'g'},
        {label: 'Caixa P-650 ', value: Math.floor(Math.random() * 3000), unidade: 'un'},
        {label: 'Adesivos p/ caixa ', value: Math.floor(Math.random() * 3000), unidade: 'un'},
      ]);

    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className='section-business' >
        
        <Card2Col 
          title={'Vendas'}
          arrayItem={salesData}
        />

        <Card2Col 
          title={'Faturamento'}
          arrayItem={faturamento}
        />

        <Card2Col 
          title={'Pedidos'}
          arrayItem={ordemPedido}
        />

        <Card2Col 
          title={'Suprimentos'}
          arrayItem={supplyData}
        />
    </section>
      
  );
};

export default Business;
