import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './clientdisplay.css';
import arrow_left from '../../../assets/icons/chevron-left.svg';
import ArrowLeft from '../../arrowleft/ArrowLeft';
import SearchAndAdd from '../../../components/searchadd/SearchAndAdd';
import Client from '../../../components/card/client/Client';
import { useAuth } from '../../../provider/AuthContextProvider';

const ClientDisplay = () => {
 
  document.title="eewdoces | Meus cliente";

  const { clientStorage } = useAuth();

  const url = '/eewdoces/register';
  const navigate = useNavigate();
  const handleClick = () => { navigate('/eewdoces/register/clients') }

  return(
    <div className='container-main-sales-register'>
      <ArrowLeft to={url} logo={arrow_left} >Meus clientes</ArrowLeft>
      <main className='container-sales-register'>
        <SearchAndAdd id='search-sales' placeholder={'Buscar por clientes'} handleSearch = {() => alert('Function in construction...')} handleAdd={handleClick}/>
        <Client arrayList={clientStorage} onClick={handleClick}/>
        
      </main>
      {/* <Navbar/> */}
    </div>
  );
}

export default ClientDisplay;
