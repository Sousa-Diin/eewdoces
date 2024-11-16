import React, {createContext, useContext, useState} from "react";
import { listSales } from "../config/layout/ListItens";
import useFetchData from '../hooks/useFetchData.js';

const AuthContext = createContext({});

const AuthContextProvider = ({children}) => {
 
  /* const [endpoint, setEndPoint] = useState({}); */

  const sortArray = (array, params) => {
    // Cria uma cópia do array para evitar mutação
    return React.useMemo(() => {
      return [...array].sort((a, b) =>
        params === 'desc'
          ? b.name.localeCompare(a.name)
          : a.name.localeCompare(b.name)
      );
    }, [array, params]);
  };
  
  

  const [sales, setSales] = useState(listSales);

  return( 
    <AuthContext.Provider value={{ sales, setSales, sortArray }}>
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