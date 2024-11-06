import React from "react";

import './client.css';
import ItemClient from "./item/ItemClient";
import NotItemFound from "../info/NotItemFound";

const Client = ({arrayList, onClick}) => {
  return(
    <section className="my-sales">
      {
        !arrayList || arrayList.length === 0
        ? 
          <NotItemFound title={'cliente'} onClick={onClick}/> 
        : 
        arrayList.map((item, index) => {
          return ( 
            <ItemClient item={item} index={index}/>
          )
        }) 
      }
    </section>
  );
}

export default Client;