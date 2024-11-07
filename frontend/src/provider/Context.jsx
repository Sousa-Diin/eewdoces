import React, {createContext} from "react";

const AuthContext = createContext({});

const AuthContextProvider = (props) => {
  return <AuthContext.Provider value={{}}>
    {props.children}
  </AuthContext.Provider>
}

export default AuthContextProvider;