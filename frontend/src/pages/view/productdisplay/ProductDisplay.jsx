import React, { useEffect, useState } from 'react';

import './productdisplay.css';
import arrow_left from '../../../assets/icons/chevron-left.svg';
import filter from '../../../assets/icons/filter-right.svg';
import SearchAndAdd from '../../../components/searchadd/SearchAndAdd';
import ArrowLeft from '../../arrowleft/ArrowLeft';
import Product from '../../../components/card/product/Product';
import PageNotFound from '../../error/PageNotFound';
import LoginSplash from '../../login/splash/LoginSplash';
import { useNavigate, useSearchParams } from 'react-router-dom';
import useFetchData from '../../../hooks/useFetchData';
import { useAuth } from '../../../provider/AuthContextProvider';


const ProductDisplay = () => {
 
  document.title="eewdoces | meus produtos";

  const { data, loading, error } = useFetchData('/products');
  /* const { sortArray } = useAuth();

  const [product, setProduct] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

 /*  const sortedProduct = sortArray(
    data, 
    searchParams.get('order')
  ); */

  // Atualiza `products` ao mudar `searchTerm`
  /*useEffect(() => {
    setProduct(
      data.filter((spp) =>
        spp.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      
    )
  }, [searchTerm,data]);

  const handleChangeParamsOrder = () => {
    setSearchParams({order: searchParams.get('order') === 'asc' ? 'desc': 'asc'});
 }


  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  
  const handleClearInput = () => {
    setSearchTerm("");
  }; */

  const url = '/eewdoces/register';
  const navigate = useNavigate();
  const handleClick = () => { navigate('/eewdoces/register/products') };

  
  if (loading) return <LoginSplash/>;

  if (error == 'NetWork Error'){
   return <PageNotFound message='A página solicitada não foi encontrada' error={error}/>;
  }
      
  
  return(
    <div /* className='container-main-sales' */>
    <ArrowLeft to={url} logo={arrow_left} style='around' >Meus produtos</ArrowLeft>
      <main className='container-sales-register'>
        <SearchAndAdd id='search-sales' placeholder={'Buscar por produto'} 
          handleClearInput = {{}} 
          handleAdd={handleClick}
          handleSearchChange={{}}
          input={{}}/>
        <img src={filter} onClick={ {} } alt="filtro icon" className="filter" />
        <Product arrayList={data} onClick={handleClick}/>
      </main>
      {/* <Navbar/> */}
    </div>
  );
}

export default ProductDisplay;
