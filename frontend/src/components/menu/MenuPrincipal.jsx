import './MenuPrincipal.css';

function MenuPrincipal (){
  return (
    <footer className='menu-bottom'>
      <section className='menu-bottom-section'>      
        <ul className='menu-bottom-section-ul'>
          <li className='menu-bottom-section-ul-li'>Loja</li>
          <li className='menu-bottom-section-ul-li'>Compras</li>
        </ul>
        <ul className='menu-bottom-section-ul'>
          <li className='menu-bottom-section-ul-li'>Vendas</li>
          <li className='menu-bottom-section-ul-li'>Menu</li>
        </ul>  
      </section>
    </footer>
  );
}

export default MenuPrincipal;