import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../../../provider/AuthContextProvider';
import useFetchData from '../../../hooks/useFetchData';

import './clientdisplay.css';
import arrow_left from '../../../assets/icons/chevron-left.svg';
import filter from '../../../assets/icons/filter-right.svg';
import ArrowLeft from '../../arrowleft/ArrowLeft';
import SearchAndAdd from '../../../components/searchadd/SearchAndAdd';
import Client from '../../../components/card/client/Client';
import LoginSplash from '../../login/splash/LoginSplash';
import PageNotFound from '../../error/PageNotFound';

const ClientDisplay = () => {
 
  document.title="eewdoces | Meus cliente";
  const { data , loading, error } = useFetchData('/people');
  const { sortArray, clientStorage } = useAuth();

  const [searchTerm, setSearchTerm] = useState(""); 
  const [searchParams, setSearchParams] = useSearchParams();
  const [client, setClient] = useState([]);

  const sortedClients = sortArray(
    data.filter((dt) => dt.type_person === 'client'), 
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
    setClient(
      sortedClients.filter((spp) =>
        spp.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      
    );

  }, [searchTerm,sortedClients,setSearchTerm, handleClearInput]);

  const url = '/eewdoces/register';
  const navigate = useNavigate();
  const handleClick = () => { navigate('/eewdoces/register/clients') }

  if (loading) return <LoginSplash/>;
  
  if (error == 'NetWork Error'){
   return <PageNotFound message='A página solicitada não foi encontrada' error={error}/>;
  }
  

  return(
    <div className='container-main-sales-register'>
      <ArrowLeft to={url} logo={arrow_left} >Meus clientes</ArrowLeft>
      <main className='container-sales-register'>
        <SearchAndAdd id='search-sales' placeholder={'Buscar por clientes'}
         handleClearInput = {handleClearInput} 
         handleAdd={handleClick}
         handleSearchChange={handleSearchChange}
         input={searchTerm}
        />
        <img src={filter} onClick={ handleChangeParamsOrder } alt="filtro icon" className="filter" />
        <Client arrayList={[...client || [] ,...clientStorage]} onClick={handleClick}/>
        
      </main>
      {/* <Navbar/> */}
    </div>
  );
}

export default ClientDisplay;
