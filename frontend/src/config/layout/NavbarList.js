import plus from '../../assets/icons/plus.svg';
import store from '../../assets/icons/shop.svg';
import product from '../../assets/icons/box2.svg';
import bag from '../../assets/icons/bag.svg';
import list from '../../assets/icons/list.svg';

const NavbarList = [
  {
    name: "store-menu",
    src: store,
    alt: 'icon store',
    style: 'nav-item',
    path: '/eewdoces/main/store',
  },
  {
    name: "product-menu",
    src: product,
    alt: 'icon product',
    style: 'nav-item',
    path: '/eewdoces/register/all',
  },
  {
    name: "menu-icon",
    src: plus,
    alt: 'icon plus',
    style: 'add-button',
    path: '/eewdoces/main/store',
  },
  {
    name: "bag-menu",
    src: bag,
    alt: 'icon bag',
    style: 'nav-item',
    path: '/eewdoces/sales/all',
  },
  {
    name: "list-menu",
    src: list,
    alt: 'icon list',
    style: 'nav-item',
    path: '/eewdoces/main/store',
  },
  
];

export default NavbarList;