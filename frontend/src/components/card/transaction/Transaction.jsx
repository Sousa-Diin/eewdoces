import React from "react";

import './transaction.css';
import NotItemFound from "../info/NotItemFound";
import ItemTransaction from "./item/ItemTransaction";

const Transaction = ({arrayList, onClick}) => {
  return(
    <section className="my-sales">
      {
        !arrayList || arrayList.length === 0
        ? 
          <NotItemFound title={'transação'} onClick={onClick}/> 
        : 
        arrayList.map((item, index) => {
          return ( 
            <ItemTransaction item={item} index={index}/>
          )
        }) 
      }
    </section>
  );
}

export default Transaction;