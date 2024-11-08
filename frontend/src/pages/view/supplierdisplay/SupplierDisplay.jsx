import React, { useEffect, useState } from 'react';

import './supplierdisplay.css';
import filter from '../../../assets/icons/filter-right.svg';
import arrow_left from '../../../assets/icons/chevron-left.svg';
import Suppliers from '../../../components/card/supplier/Suppliers';
import ArrowLeft from '../../arrowleft/ArrowLeft';
import SearchAndAdd from '../../../components/searchadd/SearchAndAdd';
import LoginSplash from '../../login/splash/LoginSplash';
import PageNotFound from '../../error/PageNotFound';
import { useNavigate, useSearchParams } from 'react-router-dom';
import useFetchData from '../../../hooks/useFetchData';

const SupplierDisplay = () => {

  const [searchTerm, setSearchTerm] = useState(""); const field = 'supplier';
  document.title="eewdoces | meus fornecedores";
  const [searchParams, setSearchParams] = useSearchParams();
  
  let filterSupp = [
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
    },
    {
    "name": "Stone",
    "type_person": "supplier",
    "phone": "(11)3004-9136",
    "address": "Rio de janeiro"
    },
    {
    "name": "Guilherme - Alvorada",
    "type_person": "client",
    "phone": "(35)3822-3130",
    "address": "Rua Dr. Franscisco Sales - centro"
    },
    {
    "name": "Cm informatica",
    "type_person": "client",
    "phone": "(35)0000-1111",
    "address": "Rua Alvaro Botelho - centro"
    }
    ].filter( dt => dt.type_person === field)
    .sort( (a,b) => searchParams
    .get('order') === 'desc' 
      ? (b.name > a.name ? 1 : -1) 
      :  (a.name > b.name ? 1 : -1)
  );
 
 
 
  const { data, loading, error } = useFetchData('/people');

  const [supplier, setSupplier] = useState([]);

  filterSupp = data.filter( dt => dt.type_person === field)
    .sort( (a,b) => searchParams
    .get('order') === 'desc' 
      ? (b.name > a.name ? 1 : -1) 
      :  (a.name > b.name ? 1 : -1)
  ); //.sort((a, b) => (a.name > b.name ? 1 : -1))
  


   const handleSearchChange = (event) => {
     setSearchTerm(event.target.value);
   };
   
   const handleClearInput = () => {
     const clear = "";
     setSearchTerm(clear);/* 
     alert("input apagado!"); */
   };

   const handleChangeParamsOrder = () => {
      setSearchParams({order: searchParams.get('order') === 'asc' ? 'desc': 'asc'});
   }
   // Atualiza `supplier` ao mudar `searchTerm`
   useEffect(() => {
    setSupplier(
      filterSupp.filter((spp) =>
        spp.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      
    )
  }, [searchTerm,data,supplier,filterSupp  ]);

  
  
  const navigate = useNavigate();
  const url = '/eewdoces/register';
  const handleClick = () => {navigate(`${url}/suppliers`);}

  if (loading) return <LoginSplash/>;
  
  if (error == 'NetWork Error'){
   return <PageNotFound message='A página solicitada não foi encontrada' error={error}/>;
  }
  
        
    
  
  return(
    <>
        <ArrowLeft to={url} logo={arrow_left} style='around' >Meus fornecedores</ArrowLeft>
        <main className='container-sales-register'>
          <SearchAndAdd id='search-sales' 
            placeholder={'Buscar por fornecedor'}  
            handleClearInput = {handleClearInput} 
            handleAdd={handleClick}
            handleSearchChange={handleSearchChange}
            input={searchTerm}
          />
          <img src={filter} onClick={ handleChangeParamsOrder } alt="filtro icon" className="filter" />
          <Suppliers arrayList={ supplier } onClick={handleClick}/>
        
        </main>
    </>
  );
}

export default SupplierDisplay;
