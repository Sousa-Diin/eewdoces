import React from "react";

import './supplier.css';
import ItemSuppliers from "./item/ItemSuppliers";

const Suppliers = ({arrayList}) => {
  return(
    <section className="my-sales">
      {
        !arrayList || arrayList.length === 0
        ? 
          <p> Cadastre um novo fornecedor.</p> 
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