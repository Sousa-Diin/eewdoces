import {
     BrowserRouter as Router,
     Route, 
     Routes,
    } from "react-router-dom";

import Login from './pages/login/Login';
import Store from './pages/main/Store';
import MyBusiness from "./pages/business/Business";
import ViewRegister from "./pages/register/all/ViewRegister";
import SalesRegister from "./pages/register/salesregister/SalesRegister";
import ClientRegisterRegister from "./pages/register/clientRegister/ClientRegister";
import SupplierRegister from "./pages/register/supplierRegister/SupplierRegister";
import OrderRegister from "./pages/register/orderRegister/OrderRegister";
import TransactionRegister from "./pages/register/transactionRegister/TransactionsRegister";
import Sales from "./pages/sales/Sales";
import MenuPrincipal from "./components/menu/menumain/MenuPrincipal";
import SideBar from "./components/option/SideBar";
import PageNotFound from "./pages/error/PageNotFound";

const AppRouter =() => {
   
  return(
    <Router>
      <Routes>           
        <Route path='/eewdoces/' element={<Login/>}/>  
        <Route path="/eewdoces/main/store" element={<Store/>} />          
        <Route path="/eewdoces/main/busi" element={<MyBusiness/>} />          
        <Route path="/eewdoces/main/menu" element={<MenuPrincipal/>} />          
        <Route path="/eewdoces/main/option" element={<SideBar/>} />          
        <Route path="/eewdoces/register/all" element={<ViewRegister/>} />      
        <Route path="/eewdoces/register/suppliers" element={<SupplierRegister/>} />     
        <Route path="/eewdoces/register/clients" element={<ClientRegisterRegister/>} />     
        <Route path="/eewdoces/register/products" element={<SalesRegister/>} />     
        <Route path="/eewdoces/register/orders" element={<OrderRegister/>} />     
        <Route path="/eewdoces/register/transactions" element={<TransactionRegister/>} />     
        <Route path="*" element={<PageNotFound/>} />     
        <Route path="/eewdoces/sales/all" element={<Sales/>} />      
      </Routes>
    </Router>
  );
}

export default AppRouter;