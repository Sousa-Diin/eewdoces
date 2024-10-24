import './Store.css';
import logo from '../../assets/img/eewdoces_adesivo_com_arco.png';
import Header from '../../components/header/Header';
import Sidebar from '../../components/menu/Sidebar';
import Main from '../../components/card/Card';
import CardHide from '../../components/card/cardHide/CardHide';
import Navbar from '../../components/footer/Navbar';

function Store() {
  let style = {
    div:"head-container-div",
    img:"head-container-img",
    h3: "head-container-h3"
  }
  return (
    <div className='container-faturar-cobrar'>
      <Header 
        title={'E&W'} 
        logo={logo}
        style={style}
      />
      <div id='main-s-n' className='main-menu'>
        <Sidebar/>
        <Main/>
        <CardHide title={'Bora faturar'}>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
             minim veniam, quis nostrud exercitation ullamco laboris nisi ut
             aliquip ex ea commodo consequat. Duis aute irure dolor in
             reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
             pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
             culpa qui officia deserunt mollit anim id est laborum.
        </CardHide> 
        <CardHide title={'Bora cobrar'}>
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
             pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
             culpa qui officia deserunt mollit anim id est laborum.
        </CardHide> 
      </div>
      <Navbar/>
    </div>
  );
}

export default Store;
