import {
     BrowserRouter as Router,
     Route, 
     Routes,
    } from "react-router-dom";

import Login from './pages/login/Login';
import Store from './pages/main/Store';
import MyBusiness from "./pages/business/Business";
import ViewRegister from "./pages/register/all/ViewRegister";
import ProductRegister from "./pages/register/productregister/ProductRegister";
import ClientRegisterRegister from "./pages/register/clientRegister/ClientRegister";
import SupplierRegister from "./pages/register/supplierRegister/SupplierRegister";
import OrderRegister from "./pages/register/orderRegister/OrderRegister";
import TransactionRegister from "./pages/register/transactionRegister/TransactionsRegister";
import Sales from "./pages/sales/Sales";
import MenuPrincipal from "./components/menu/menumain/MenuPrincipal";
import SideBar from "./components/option/SideBar";
import PageNotFound from "./pages/error/PageNotFound";
import LoginSplash from "./pages/login/splash/LoginSplash";
import ClientDisplay from "./pages/view/clientdisplay/ClientDisplay";
import SupplierDisplay from "./pages/view/supplierdisplay/SupplierDisplay";
import OrderDisplay from "./pages/view/orderdisplay/OrderDisplay";
import TransactionsDisplay from "./pages/view/transactiondisplay/TransactionsDisplay";
import ProductDisplay from "./pages/view/productdisplay/ProductDisplay";

const AppRouter =() => {
   
  return(
    <Router>
      <Routes>           
        <Route path='/eewdoces/' element={<Login/>}/>  
        <Route path='/eewdoces/splash' element={<LoginSplash/>}/>  
        <Route path="/eewdoces/main/store" element={<Store/>} />          
        <Route path="/eewdoces/main/busi" element={<MyBusiness/>} />          
        <Route path="/eewdoces/main/menu" element={<MenuPrincipal/>} />          
        <Route path="/eewdoces/main/option" element={<SideBar/>} />          
        <Route path="/eewdoces/view/clients" element={<ClientDisplay/>} />          
        <Route path="/eewdoces/view/suppliers" element={<SupplierDisplay/>} />          
        <Route path="/eewdoces/view/products" element={<ProductDisplay/>} />          
        <Route path="/eewdoces/view/orders" element={<OrderDisplay/>} />          
        <Route path="/eewdoces/view/transactions" element={<TransactionsDisplay/>} />          
        <Route path="/eewdoces/register" element={<ViewRegister/>} />      
        <Route path="/eewdoces/register/suppliers" element={<SupplierRegister/>} />     
        <Route path="/eewdoces/register/clients" element={<ClientRegisterRegister/>} />     
        <Route path="/eewdoces/register/products" element={<ProductRegister/>} />     
        <Route path="/eewdoces/register/orders" element={<OrderRegister/>} />     
        <Route path="/eewdoces/register/transactions" element={<TransactionRegister/>} />     
        <Route path="*" element={<PageNotFound/>} />     
        <Route path="/eewdoces/sales/all" element={<Sales/>} />      
      </Routes>
    </Router>
  );
}

export default AppRouter;