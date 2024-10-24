import 'dotenv/config';
import express from 'express';
import PeopleRoutes from './routes/peopleRoutes.js';
import ProductsRoutes from './routes/productsRoutes.js';
import OrderProductRoutes from './routes/orderProductRoutes.js';
import OrdersRoutes from './routes/ordersRoutes.js';
import TransactionsRoutes from './routes/transactionsRoutes.js';

const app = express();
const port = process.env.WEB_PORT;
const host = process.env.WEB_HOST;

app.use('/people', PeopleRoutes); 
app.use('/products', ProductsRoutes); 
app.use('/order-product', OrderProductRoutes); 
app.use('/orders', OrdersRoutes); 
app.use('/transactions', TransactionsRoutes); 


app.listen(port,host , () => {
  console.log('API da E&WDoces está online.');
});