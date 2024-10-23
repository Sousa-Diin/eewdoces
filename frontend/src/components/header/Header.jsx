import './Header.css';
import logo from '../../assets/img/eewdoces_adesivo_com_arco.png';

function Header () {
  const title = 'E&W';
  return (
    <header>
      <img src={logo} alt="logo da loja"/>
      <h1>{title}</h1>
    </header>
  );
}

export default Header;