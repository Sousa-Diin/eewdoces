import React, {createContext, useContext, useEffect, useState} from "react";
import { listSales } from "../config/layout/ListItens";
import useFetchData from '../hooks/useFetchData.js';
import { registerPeople } from "../service/peopleService.js";
const AuthContext = createContext({});

const setLocalStorage = (key, value) => {
  try {
    localStorage.setItem(key,JSON.stringify(value));
  } catch (error) {
    console.error("Erro ao salvar no localStorage:", error);
  }
};

const getLocalStorage = (key) => {
  try {
    const storeData = localStorage.getItem(key);
    return storeData 
      ? JSON.parse(storeData) 
      : [];
  } catch (error) {
    console.error("Erro ao recuperar do localStorage:", error);
    return [];
    }
};

const AuthContextProvider = ({children}) => {
 
  
  const [sales, setSales] = useState(listSales);
  const [userList, setUserList] = useState(() => getLocalStorage('userList'));
  const [clientStorage, setClientStorage] = useState(userList.filter((dt) => dt.type_person === 'client'));
  const [supplierStorage, setSupplierStorage] = useState(userList.filter((dt) => dt.type_person === 'supplier'));

  // Sincroniza o estado com o localStorage
  useEffect(() => {
    if (userList) {
      setLocalStorage("userList", userList);
      
    }
  }, [userList]);

  const addPeople = async (user) =>{
    try {
      if (user){
        setUserList((prevList) => [
          ...prevList, 
          user
        ]);
      //enviar os dados para um backend ou API
      await registerPeople(user);
      }else{
        throw new Error('Error adding user. Ensure the object is not empty.');
      }
    } catch (error) {
      console.error("Erro ao recuperar do localStorage:", error.message);
    }
  };

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
  
  


  return( 
    <AuthContext.Provider value={{ 
      sales, 
      setSales, 
      sortArray, 
      userList, 
      addPeople,
      clientStorage,
      supplierStorage
    }}>
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