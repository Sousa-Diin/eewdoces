import React from "react";

import './notitemfound.css'

import notFound from '../../../assets/img/list_not_found.png';
import iconPlus from '../../../assets/icons/orange-plus.svg';

const NotItemFound = ({title, onClick}) => {
   return(
      <section className="section-not-found">
        <img src={notFound} alt="item not found" className="img-not-found" />
        <span className="title-not-found">Nenhum {title} encontrado</span>
        <div className="btn-add-item">
          <img src={iconPlus} alt=""  onClick={onClick} className="icon-add" />
          <button onClick={onClick} className="btn-add">Cadastrar um {title}</button>
        </div>
      </section>
   );
  }

export default NotItemFound;