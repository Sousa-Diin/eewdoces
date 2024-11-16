import React, {createContext, useContext, useState} from "react";
import { listSales } from "../config/layout/ListItens";

const AuthContext = createContext({});

const AuthContextProvider = ({children}) => {
 
  const [sales, setSales] = useState(listSales);

  return( 
    <AuthContext.Provider value={{ sales, setSales }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

// Hook personalizado para usar o contexto
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthContextProvider");
  }
  return context;
};