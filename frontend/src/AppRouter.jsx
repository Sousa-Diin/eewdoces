import {
     BrowserRouter as Router,
     Navigate,
     Route, 
     Routes,
    } from "react-router-dom";

import Login from './pages/login/Login';
import Store from './pages/Store';
import MyBusiness from "./pages/MyBusiness";


const AppRouter =() => {
   
  return(
    <Router>
      <Routes>           
        <Route path='eewdoces/' element={<Login/>}/>  
        <Route path="eewdoces/main" element={<Store/>} />          
        <Route path="eewdoces/busi" element={<MyBusiness/>} />          
      </Routes>
    </Router>
  );
}

export default AppRouter;