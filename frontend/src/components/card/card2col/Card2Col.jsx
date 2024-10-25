import React from "react";
import './card2col.css'

const Card2Col = ({title, arrayItem}) => {
  return(
    <div className="section">
      <h2>{title}</h2>
      {/* Mapeia os itens do arrayItem e os exibe */}
      {arrayItem && arrayItem.map((item, index) => {
        return( 
          <div className="indicator" key={index}>
            <span className="indicador-span">{item.label}:</span> <span className="indicador-span">{item.value} {item.unidade}</span>
          </div>
        )
      })}
    </div>
  );
};

export default Card2Col;