import plus from '../../assets/icons/plus.svg';
import store from '../../assets/icons/shop.svg';
import product from '../../assets/icons/box2.svg';
import bag from '../../assets/icons/bag.svg';
import list from '../../assets/icons/list.svg';

import supplier from '../../assets/icons/supplier.svg';
import client from '../../assets/icons/client.svg';
import productR from '../../assets/icons/cart.svg';
import orders from '../../assets/icons/orders.svg';
import transactions from '../../assets/icons/transactions.svg';





export const navbarlist =  [ 
    {
      id:'btn-link',
      name: "store-menu",
      src: store,
      alt: 'icon store',
      style: 'nav-item',
      path: '/eewdoces/main/store',
    },
    {
      id:'btn-link',
      name: "product-menu",
      src: product,
      alt: 'icon product',
      style: 'nav-item',
      path: '/eewdoces/register',
    },
    {
      id:'btn-button',
      name: "menu-icon",
      src: plus,
      alt: 'icon plus',
      style: 'add-button',
    },
    {
      id:'btn-link',
      name: "bag-menu",
      src: bag,
      alt: 'icon bag',
      style: 'nav-item',
      path: '/eewdoces/sales/all',
    },
    {
      id:'btn-button',
      name: "list-menu",
      src: list,
      alt: 'icon list',
      style: 'nav-item',
    },
];



export const  IconResgisterList = [ 
    {
      name: "Fornecedor",
      src: supplier,
      style: 'nav-item-register',
      path: '/eewdoces/view/suppliers',
    },
    {
      name: "Clientes",
      src: client,
      style: 'nav-item-register',
      path: '/eewdoces/view/clients',
    },
    {
      name: "Produtos",
      src: productR,
      style: 'nav-item-register',
      path: '/eewdoces/view/products',
    },
    {
      name: "Pedidos",
      src: orders,
      style: 'nav-item-register',
      path: '/eewdoces/view/orders',
    },
    {
      name: "Transações",
      src: transactions,
      style: 'nav-item-register',
      path: '/eewdoces/view/transactions',
    },
];

export const listSales = [
  {name:"Persona teste",date:'05/09/2024', value: 36, status: "pendente"},
  {name:"Persona teste",date:'01/09/2024', value: 12, status: "pendente"},
  {name:"Isadora",date:'21/10/2024', value: 24, status: "concluido"},
  {name:"João",date:'15/10/2024', value: 12, status: "pendente"},
  {name:"Custodio",date:'10/08/2024', value: 24, status: "concluido"},
  {name:"Jubileu",date:'10/09/2024', value: 12, status: "concluido"},
  {name:"Eustaquio",date:'13/11/2024', value: 36, status: "cancelado"},
 
];