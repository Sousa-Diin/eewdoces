import React, { useEffect } from 'react';

import './productdisplay.css';
import arrow_left from '../../../assets/icons/chevron-left.svg';
import SearchAndAdd from '../../../components/searchadd/SearchAndAdd';
import ArrowLeft from '../../arrowleft/ArrowLeft';
import { useNavigate } from 'react-router-dom';


const ProductDisplay = () => {
 
  useEffect(()=>{ document.title="eewdoces | meus produtos"},[]);

  const url = '/eewdoces/register';
  const navigate = useNavigate();
  
  return(
    <div /* className='container-main-sales' */>
    <ArrowLeft to={url} logo={arrow_left} style='around' >Meus produtos</ArrowLeft>
      <main className='container-sales-register'>
        <SearchAndAdd id='search-sales' placeholder={'Buscar por produto'}  handleSearch = {() => alert('Function in construction...')} handleAdd={() => navigate('/eewdoces/register/products')}/>
       
        
      </main>
      {/* <Navbar/> */}
    </div>
  );
}

export default ProductDisplay;
