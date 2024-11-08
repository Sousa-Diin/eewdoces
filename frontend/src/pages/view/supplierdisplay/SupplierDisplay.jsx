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
 
  document.title="eewdoces | meus fornecedores";
  const field = 'supplier';
  const { data, loading, error } = useFetchData('/people');

  const [supplier, setSupplier] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const filterSupp = data.filter( dt => dt.type_person === field)
    .sort( (a,b) => searchParams
    .get('order') === 'desc' 
      ? (b.name > a.name ? 1 : -1) 
      :  (a.name > b.name ? 1 : -1)); //.sort((a, b) => (a.name > b.name ? 1 : -1))
  
 
  

   // Atualiza `supplier` ao mudar `searchTerm`
   useEffect(() => {
    setSupplier(
      filterSupp.filter((spp) =>
        spp.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    );
  }, [searchTerm,data,supplier]);

  
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
