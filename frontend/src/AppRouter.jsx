import {
      HashRouter
      as Router,
      Route, 
      Routes,
    } from "react-router-dom";

import Login from './pages/login/Login';
import Store from './pages/main/Store';
import MyBusiness from "./pages/business/Business";

const AppRouter =() => {
   
  return(
    <Router>
      <Routes>           
        <Route path='/eewdoces/' element={<Login/>}/>  
        <Route path="/eewdoces/store" element={<Store/>} />          
        <Route path="/eewdoces/busi" element={<MyBusiness/>} />          
      </Routes>
    </Router>
  );
}

export default AppRouter;