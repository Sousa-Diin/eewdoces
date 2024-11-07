import React from "react";

import './supplier.css';
import ItemSuppliers from "./item/ItemSuppliers";
import NotItemFound from "../info/NotItemFound";

const Suppliers = ({arrayList, onClick}) => {
  return(
    <section className="my-sales">
      {
        !arrayList || arrayList.length === 0
        ? 
          <NotItemFound title={'fornecedor'} onClick={onClick}/> 
        : 
        arrayList.map((item, index) => {
          return ( 
            <ItemSuppliers item={item} index={index}/>
          )
        }) 
      }
    </section>
  );
}

export default Suppliers;