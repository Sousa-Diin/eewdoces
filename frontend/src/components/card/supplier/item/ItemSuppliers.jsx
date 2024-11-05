import React from "react";

import './itemsuppliers.css';

const ItemSuppliers = ({item, index}) => {
  return(
    <div key={index} className="sales">
      <div className='container-status'><span>n°{index}</span> <pre>{item.type_person}</pre></div>
      <span>{item.name}</span>
      <h6>Phone: {item.phone}</h6>
      <h7>{item.address}</h7>
    </div>
  )
}

export default ItemSuppliers;