import React from "react";

import './itemsuppliers.css';

const ItemSuppliers = ({item, index}) => {
  return(
    <div key={index} className="sales">
      <div className='container-status'><span>ID: {index+1}</span> <pre className="type-person">{item.type_person}</pre></div>
      <h6 className="suppliers-name">{item.name}</h6>
      <span className="suppliers-phone">Telefone: {item.phone}</span>
      <span className="suppliers-adress">{item.address}</span>
    </div>
  )
}

export default ItemSuppliers;