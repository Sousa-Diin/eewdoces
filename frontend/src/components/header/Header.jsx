/* import './Header.css'; */
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Header () {
  const title = 'E&W';
  return (
    <Navbar expand="lg" fixed='top' className="bg-body-tertiary">
      <Container>
        <Navbar.Brand className='mx-2' href="#home" >{title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className=" mx-1 ms-auto">
            <Nav.Link className='mx-2' href="#main">Orçamentos</Nav.Link>
            <Nav.Link className='mx-2' href="#buys">Transaçoes</Nav.Link>
            <Nav.Link className='mx-2' href="#sales">Históricos</Nav.Link>
            <Nav.Link className='mx-2' href="#transactions">Configurações</Nav.Link>          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;