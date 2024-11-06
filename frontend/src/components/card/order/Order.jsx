import React from "react";

import './order.css';
import ItemOrder from "./item/ItemOrder";
import NotItemFound from "../info/NotItemFound";

const Order = ({arrayList, onClick}) => {
  return(
    <section className="my-sales">
      {
        !arrayList || arrayList.length === 0
        ? 
          <NotItemFound title={'pedido'} onClick={onClick}/> 
        : 
        arrayList.map((item, index) => {
          return ( 
            <ItemOrder item={item} index={index}/>
          )
        }) 
      }
    </section>
  );
}

export default Order;