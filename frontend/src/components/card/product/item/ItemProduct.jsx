import React from "react";

import './itemproduct.css';

const ItemProduct = ({item, index}) => {
  return(
    <div key={index} className="sales">
      <span>ID: {item.id}</span> 
      <h6>{item.describe}</h6>
      <span>R$: {item.price}</span>
      <p>{item.stock}</p>
    </div>
  )
}

export default ItemProduct;