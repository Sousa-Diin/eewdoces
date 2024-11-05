import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './supplierdisplay.css';
import arrow_left from '../../../assets/icons/chevron-left.svg';
import Suppliers from '../../../components/card/supplier/Suppliers';
import ArrowLeft from '../../arrowleft/ArrowLeft';
import SearchAndAdd from '../../../components/searchadd/SearchAndAdd';
import LoginSplash from '../../login/splash/LoginSplash';
import PageNotFound from '../../error/PageNotFound';
import { useNavigate } from 'react-router-dom';

const SupplierDisplay = () => {
 
  useEffect(()=>{ document.title="eewdoces | meus fornecedores"},[]);

  const url = '/eewdoces/register';
  const navigate = useNavigate();


  const listSuppliers = 
    [
      {
      "name": "Supermecados BH",
      "type_person": "supplier",
      "phone": "(31)3117-2602",
      "address": "Av.Vaz Monteiro, 325 - centro"
      },
      {
      "name": "Embalagem Botelho",
      "type_person": "supplier",
      "phone": "(35)3822-2859",
      "address": "Rua Dr. Alvaro Botelho - centro"
      },
      {
      "name": "Casa da Embalagem",
      "type_person": "supplier",
      "phone": "(35)3821-7528",
      "address": "Rua Firmino Sales - centro"
      },
      {
      "name": "E&WDoces",
      "type_person": "both",
      "phone": "(35)9 9772-3497",
      "address": "Lavras - MG"
      },
      {
      "name": "Client_default",
      "type_person": "client",
      "phone": "(35) 9 0000-1110",
      "address": "Lavras - MG"
      },
      {
      "name": "Clint_one",
      "type_person": "client",
      "phone": "(35) 9 0000-1111",
      "address": "Rua Alvaro Botelho - centro"
      }
    ]

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      // Substitua pelo seu endpoint
      axios
      .get('http://localhost:4001/people/')
      .then((response) => {
        setData(response.data); // Armazena os dados da API
        console.log(` Data API: ${JSON.stringify(response.data, null, 2)}`);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []); // Executa apenas uma vez quando o componente é montado
    
      if (loading) return <LoginSplash/>;

      if (error == 'NetWork Error'){
       return <PageNotFound message='A página solicitada não foi encontrada' error={error}/>;
      }
        
    
  
  return(
    <div /* className='container-main-sales' */>
    <ArrowLeft to={url} logo={arrow_left} style='around' >Meus fornecedores</ArrowLeft>
      <main className='container-sales-register'>
        
        <SearchAndAdd id='search-sales' placeholder={'Buscar por fornecedor'}  handleSearch = {() => alert('Function in construction...')} handleAdd={() => navigate('/eewdoces/register/suppliers')}/>
        <Suppliers arrayList={data}/>
      
      </main>
      {/* <Navbar/> */}
    </div>
  );
}

export default SupplierDisplay;
