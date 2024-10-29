import React from "react";

import './itemsales.css';

const ItemSales = ({item, index}) => {
  return(
    <div key={index} className="sales">
      <div className='container-status'><span>n°{index}</span> <pre>pendente</pre></div>
      <h6>Descrição: {item.content}</h6>
      <span>R$177,59</span>
      <h7>data: __/__/__</h7>
    </div>
  )
}

export default ItemSales;