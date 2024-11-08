import React from 'react';

import './viewregister.css';
import arrow_left from '../../../assets/icons/arrow-left.svg';
import Header from '../../../components/header/Header';
import Navbar from '../../../components/footer/Navbar';
import { IconResgisterList } from '../../../config/layout/ListItens';
import { Link } from 'react-router-dom';
import ArrowLeft from '../../arrowleft/ArrowLeft';

function ViewRegister () {
 document.title='eewdoces | Cadastros';

  const url = '/eewdoces/main/store'

  return(
    <div className='container-register'>
      <Header title='E&W'/>
    
      <main className='main-all-register'>
      <ArrowLeft to={url} logo={arrow_left} >Cadastros</ArrowLeft>
        <nav>
          {
            IconResgisterList.map((item, index) => {
              return (
                  <Link  style={{ textDecoration: 'none' }} to={item.path +'/?order=asc'} className={item.style} key={index}>
                    <img src={item.src}/>
                    <span>{item.name}</span>
                  </Link>
              )
            })
          }
        </nav>
      </main>
      <Navbar/>
    </div>
  );
}

export default ViewRegister;