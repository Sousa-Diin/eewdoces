import './MenuPrincipal.css';
import iconPlus from '../../assets/icons/plus-circle-fill.svg';

function MenuPrincipal (){

  return (
    <footer className='menu-bottom'>
      <ul className='menu-bottom-ul'>
        <div className='menu-bottom-div'>
          <span className='menu-bottom-ul-span'>Loja</span>
          <span className='menu-bottom-ul-span'>Compras</span>
        </div>
        <div className='menu-bottom-div'>
          <span className='menu-bottom-ul-span'>Vendas</span>
          <span className='menu-bottom-ul-span'>Menu</span>
        </div>
        <button className='plus-circle-fill'><img  src={iconPlus}/></button>
      </ul>   
    </footer>
  );
}

export default MenuPrincipal;