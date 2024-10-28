import {
     BrowserRouter as Router,
     Route, 
     Routes,
    } from "react-router-dom";

import Login from './pages/login/Login';
import Store from './pages/main/Store';
import MyBusiness from "./pages/business/Business";
import ViewRegister from "./pages/register/all/ViewRegister";
import Sales from "./pages/sales/Sales";

const AppRouter =() => {
   
  return(
    <Router>
      <Routes>           
        <Route path='/eewdoces/' element={<Login/>}/>  
        <Route path="/eewdoces/main/store" element={<Store/>} />          
        <Route path="/eewdoces/main/busi" element={<MyBusiness/>} />          
        <Route path="/eewdoces/register/all" element={<ViewRegister/>} />      
        <Route path="/eewdoces/sales/all" element={<Sales/>} />      
      </Routes>
    </Router>
  );
}

export default AppRouter;