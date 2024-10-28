import React, {useEffect} from 'react';

import './viewregister.css';
import Header from '../../../components/header/Header';
import Navbar from '../../../components/footer/Navbar';

function ViewRegister () {
  useEffect(()=>{ document.title='eewdoces | Cadastros'},[]);
  return(
    <div className='container-register'>
      <Header/>
      <main className='main-all-register'>
        <h3>Cadastros</h3>

      </main>
      <Navbar/>
    </div>
  );
}

export default ViewRegister;