import { useState } from 'react';
import './card.css';
import arrowRigth from '../../assets/icons/chevron-right.svg'
import Accordion from 'react-bootstrap/Accordion';
import { useNavigate } from 'react-router-dom';

function Card() {
  const [winnings, setWinnings] = useState('288,00');
  const [countWinnings, setCountWinnings] = useState(24);
  const navigate = useNavigate();
  const baseUrl = '/eewdoces/sales/all';

  return (
    <main className='card-win'>
      <section className=' header-win' >
        <span>Ganhos</span>
        <aside className='container-arrow-detail'>
          <pre>detalhes </pre>
          <img src={arrowRigth} onClick={() => navigate(baseUrl) } className="chevron-right"></img>
        </aside>
      </section>
      <section >
        <span > R$ {`${winnings}`}</span>
        <div className='footer-win'>
          <pre className='sales-count'>{`${countWinnings}`} vendas /</pre>
          <pre className='sales-count-day'>hoje</pre>
        </div>
      </section>
      
    </main>
  );
}

export default Card;