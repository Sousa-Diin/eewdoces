import React from "react";

import './salesinfo.css';
import ItemSales from "./item/ItemSales";
import NotItemFound from "../info/NotItemFound";

const SalesInfo = ({arrayList, onClick}) => {
  return(
    <section className="my-sales">
      {
        !arrayList || arrayList.length === 0
        ? 
          <NotItemFound title={'venda'} onClick={onClick}/> 
        : arrayList.map((item, index) => {
        return ( 
          <ItemSales item={item} index={index}/>
        )
      })}
    </section>
  );
}

export default SalesInfo;