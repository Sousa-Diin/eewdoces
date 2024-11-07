import React, { useEffect } from 'react';

import './productdisplay.css';
import arrow_left from '../../../assets/icons/chevron-left.svg';
import SearchAndAdd from '../../../components/searchadd/SearchAndAdd';
import ArrowLeft from '../../arrowleft/ArrowLeft';
import { useNavigate } from 'react-router-dom';
import Product from '../../../components/card/product/Product';
import useFetchData from '../../../hooks/useFetchData';
import PageNotFound from '../../error/PageNotFound';
import LoginSplash from '../../login/splash/LoginSplash';


const ProductDisplay = () => {
 
  useEffect(()=>{ document.title="eewdoces | meus produtos"},[]);

  const url = '/eewdoces/register';
  const navigate = useNavigate();
  const handleClick = () => { navigate('/eewdoces/register/products') };

  const { data, loading, error } = useFetchData('/products');
  
  if (loading) return <LoginSplash/>;

  if (error == 'NetWork Error'){
   return <PageNotFound message='A página solicitada não foi encontrada' error={error}/>;
  }
      
  
  return(
    <div /* className='container-main-sales' */>
    <ArrowLeft to={url} logo={arrow_left} style='around' >Meus produtos</ArrowLeft>
      <main className='container-sales-register'>
        <SearchAndAdd id='search-sales' placeholder={'Buscar por produto'}  handleSearch = {() => alert('Function in construction...')} handleAdd={handleClick}/>
        <Product arrayList={data} onClick={handleClick}/>
        
      </main>
      {/* <Navbar/> */}
    </div>
  );
}

export default ProductDisplay;
