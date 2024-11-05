import { useLocation, useNavigate } from 'react-router-dom';
import './pagenotfound.css';

const PageNotFound = ({message, error}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const url = location.pathname;
  const trimmedUrl = url.substring(0, url.lastIndexOf('/'));

  console.log(trimmedUrl); // Resultado: "/eewdoces/sales/all"

  setTimeout(()=>{/* 
    navigate(trimmedUrl) || */
    navigate(trimmedUrl);
  },1000);

  return (
    <div className='container-not-found'>
      <h2>{message || 'A página solicitada não foi encontrada'}</h2>
      <h3>{error}</h3>
    </div>
  );

}

export default PageNotFound;