import React, { useEffect } from 'react';
import Main from '../../components/card/Card';
import CardHide from '../../components/card/cardHide/CardHide';

const Winnings = () => {
  useEffect(() => {
      document.title = "eewdoces | Ganhos - loja"; // Define o título da aba
  }, []); // O array vazio faz com que o título mude apenas na montagem do componente
  
  return(
    <>
      <Main />
      <CardHide title={'Bora faturar'}>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
             minim veniam, quis nostrud exercitation ullamco laboris nisi ut
             aliquip ex ea commodo consequat. Duis aute irure dolor in
             reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
             pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
             culpa qui officia deserunt mollit anim id est laborum.
      </CardHide> 
      <CardHide title={'Bora cobrar'}>
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
             pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
             culpa qui officia deserunt mollit anim id est laborum.
      </CardHide> 
    </>
  );
}

export default Winnings;