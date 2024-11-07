import React from "react";

import './itemclient.css';

const ItemClient = ({item, index}) => {
  return(
    <div key={index} className="sales">
      <div className='container-status'><span>N°{index+1}</span> <pre className="type-person">{item.type_person}</pre></div>
      <h6>{item.name}</h6>
      <span>Phone: {item.phone}</span>
      <p>{item.address}</p>
    </div>
  )
}

export default ItemClient;