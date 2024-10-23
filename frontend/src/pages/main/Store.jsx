import Header from '../../components/header/Header';
import Main from '../../components/main/Main';
import MenuPrincipal from '../../components/menu/MenuPrincipal';
import './Store.css'

function Store() {
  return (
    <main className='main-menu'>
     <Header/>
     <Main/>
     <MenuPrincipal/>
    </main>
  );
}

export default Store;
