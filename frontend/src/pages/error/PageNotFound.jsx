import { useLocation, useNavigate } from 'react-router-dom';
import './pagenotfound.css';

const PageNotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const url = location.pathname;
  const trimmedUrl = url.substring(0, url.lastIndexOf('/'));

  console.log(trimmedUrl); // Resultado: "/eewdoces/sales/all"

  setTimeout(()=>{/* 
    navigate(trimmedUrl) || */
    navigate(location.pathname);
  },1000);

  return (
    <div className='container-not-found'>
      <h2>A página solicitada não foi encontrada</h2>
      <h3>Erro 404</h3>
    </div>
  );

}

export default PageNotFound;