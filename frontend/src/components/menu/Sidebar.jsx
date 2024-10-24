import { Navigate } from 'react-router-dom';

import './sidebar.css';
function Sidebar (){
  const handleChangePageSales = () => {
    const page = document.getElementById('main-s-n').value;
    page.classList.add('hide');
  }

  const handleChangePageBusiness = () => {
    Navigate('/eewdoces/busi');
  }

  return (
    <div className='sidebar-business'>
      <button id='sales' onClick={()=>{handleChangePageSales}} className='sales'>Vendas</button>
      <button id='business' onClick={()=>{handleChangePageBusiness}} className='business'>Meu Negócio</button>
    </div>
  );
}

export default Sidebar;