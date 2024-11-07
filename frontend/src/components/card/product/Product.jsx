import React from "react";

import './product.css';
import ItemProduct from "./item/ItemProduct";
import NotItemFound from "../info/NotItemFound";

const Product = ({arrayList, onClick}) => {
  return(
    <section className="my-sales">
      {
        !arrayList || arrayList.length === 0
        ? 
          <NotItemFound title={'produto'} onClick={onClick}/> 
        : 
        arrayList.map((item, index) => {
          return ( 
            <ItemProduct item={item} index={index}/>
          )
        }) 
      }
    </section>
  );
}

export default Product;