import { useNavigate } from 'react-router-dom';
import './pagenotfound.css';

const PageNotFound = () => {
  const navigate = useNavigate();
  setTimeout(()=>{
    navigate('/eewdoces/main/store');
  },2000);

  return (
    <div className='container-not-found'>
      <h2>A página solicitada não foi encontrada</h2>
      <h3>Erro 404</h3>
    </div>
  );

}

export default PageNotFound;