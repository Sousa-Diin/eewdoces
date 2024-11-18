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
import { useAuth } from '../../../provider/AuthContextProvider';

const SupplierDisplay = () => {

  document.title="eewdoces | meus fornecedores";

  const { sortArray, supplierStorage } = useAuth();
  const { data, loading, error } = useFetchData('/people');

  const [supplier, setSupplier] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); 
  const [searchParams, setSearchParams] = useSearchParams();


  const sortedSuppliers = sortArray(
    data.filter((dt) => dt.type_person === 'supplier'), 
    searchParams.get('order')
  );
  
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  
  const handleClearInput = () => {
    setSearchTerm("");
  };

  const handleChangeParamsOrder = () => {
     setSearchParams({order: searchParams.get('order') === 'asc' ? 'desc': 'asc'});
  }
  // Atualiza `supplier` ao mudar `searchTerm`
  useEffect(() => {
    setSupplier(
      sortedSuppliers.filter((spp) =>
        spp.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      
    )
  }, [searchTerm,sortedSuppliers]);

  
  
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
        <Suppliers arrayList={ [...supplier, ...supplierStorage ]} onClick={handleClick}/>
      
      </main>
    </>
  );
}

export default SupplierDisplay;
