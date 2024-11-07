import React, {useEffect} from 'react';

import './viewregister.css';
import arrow_left from '../../../assets/icons/arrow-left.svg';
import Header from '../../../components/header/Header';
import Navbar from '../../../components/footer/Navbar';
import { IconResgisterList } from '../../../config/layout/ListItens';
import { Link } from 'react-router-dom';
import ArrowLeft from '../../arrowleft/ArrowLeft';

function ViewRegister () {
  useEffect(()=>{ document.title='eewdoces | Cadastros'},[]);

  const cssArrowBack = {
    title: 'container-back-title',
    img: 'container-back-img',
    container:'container-back-container',
  }

  const url = '/eewdoces/main/store'

  return(
    <div className='container-register'>
      <Header title='E&W'/>
    
      <main className='main-all-register'>
      <ArrowLeft to={url} logo={arrow_left} style={cssArrowBack}>Cadastros</ArrowLeft>
        <nav>
          {
            IconResgisterList.map((item, index) => {
              return (
                  <Link  style={{ textDecoration: 'none' }} to={item.path} className={item.style} key={index}>
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