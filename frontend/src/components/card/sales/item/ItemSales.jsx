import React from "react";

import './itemsales.css';
import clock from '../../../../assets/icons/clock.svg'

const ItemSales = ({item, index}) => {
  return(
    <div key={index} className="sales">
      <div className='container-status'>
        <span>n°{index}</span>
        <div className={`status-sales ${item.status ? item.status: ''}`}>
          <div className={`circule ${item.status ? 'circule-'+item.status : ''}`}></div>
          <span>{item.status}</span>
          </div>
      </div>
      <h6>Client: {item.name}</h6>
      <span>R$ {item.value},00</span>
      <div className="date-sales">
        <img src={clock} alt="" />
        <spanp>{item.date}</spanp>
      </div>
    </div>
  )
}

export default ItemSales;