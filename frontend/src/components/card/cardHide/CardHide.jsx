import Accordion from 'react-bootstrap/Accordion';
import './cardhide.css';

function CardHide({children, title}) {
  return (
    <section className='div-faturar-cobrar'>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>{title}</Accordion.Header>
          <Accordion.Body>
            {children}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </section>
    
  );
}

export default CardHide;

/* 

*/