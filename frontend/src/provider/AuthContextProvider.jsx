import React, {createContext, useContext, useState} from "react";
import { listSales } from "../config/layout/ListItens";

const AuthContext = createContext({});

const AuthContextProvider = (props) => {
 
  const [sales, setSales] = useState(listSales);

  return <AuthContext.Provider value={{ sales, setSales }}>
    {props.children}
  </AuthContext.Provider>
}

export default AuthContextProvider;
