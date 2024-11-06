import React from "react";

import './itemtransaction.css';

const ItemTransaction = ({item, index}) => {
  return(
    <div key={index} className="sales">
      <div className='container-status'><span>N°{index+1}</span> <pre className="type-person">{item.payment_status}</pre></div>
      <h6>Forma de pagamento: {item.method_paid}</h6>
      <span>R$: {item.amount_paid}</span>
      <p>{item.date_transaction}</p>
    </div>
  )
}

export default ItemTransaction;