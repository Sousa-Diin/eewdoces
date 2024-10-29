import React from "react";

import './salesinfo.css';
import ItemSales from "./item/ItemSales";

const SalesInfo = ({arrayList}) => {
  return(
    <section className="my-sales">
      {arrayList.map((item, index) => {
        return ( 
          <ItemSales item={item} index={index}/>
        )
      })}
    </section>
  );
}

export default SalesInfo;