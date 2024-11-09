import React from "react";

import './itemsales.css';

const ItemSales = ({item, index}) => {
  return(
    <div key={index} className="sales">
      <div className='container-status'>
        <span>n°{index}</span>
        <div className="status-sales">
          <div className="circule"></div>
          <span>pendente</span>
          </div>
      </div>
      <h6>Client: {item.content}</h6>
      <span>R$177,59</span>
      <h7>28/09/2024</h7>
    </div>
  )
}

export default ItemSales;