CREATE ROLE "eewdoces" WITH
	LOGIN
	NOSUPERUSER
	CREATEDB
	NOCREATEROLE
	INHERIT
	NOREPLICATION
	NOBYPASSRLS
	CONNECTION LIMIT -1
	PASSWORD 'xxxxxx';

CREATE DATABASE "EEWDoces"
    WITH
    OWNER = eewdoces
    ENCODING = 'UTF8'
    LOCALE_PROVIDER = 'libc'
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;


--DROP TABLE public.products;

BEGIN TRANSACTION;

CREATE TABLE IF NOT EXISTS public.people (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  type_person VARCHAR(20) CHECK (type_person IN ('both','client', 'supplier')),
  phone VARCHAR(50),
  address TEXT NOT NULL

);

INSERT INTO people (name, type_person, phone, address)
VALUES 
	('Supermecados BH','supplier', '(31)3117-2602', 'Av.Vaz Monteiro, 325 - centro' ),
	('Embalagem Botelho', 'supplier', '(35)3822-2859', 'Rua Dr. Alvaro Botelho - centro'),
	('Casa da Embalagem', 'supplier', '(35)3821-7528', 'Rua Firmino Sales - centro'),
	('E&WDoces', 'both', '(35)9 9772-3497', 'Lavras - MG'),
	('Client_default', 'client', '(35) 9 0000-1110', 'Lavras - MG'),
	('Clint_one', 'client', '(35) 9 0000-1111', 'Rua Alvaro Botelho - centro');

select * from people;


CREATE TABLE IF NOT EXISTS public.products(
  id SERIAL PRIMARY KEY,
  describe TEXT NOT NULL,
  price NUMERIC(10, 2) NOT NULL,
  stock INT NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS public.order_product(
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  product_id INT NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  count INT NOT NULL,
  unit_price NUMERIC(10, 2) NOT NULL
);


CREATE TABLE IF NOT EXISTS public.orders(
  --order_id UUID NOT NULL REFERENCES order_product(id) ON DELETE CASCADE,
  order_id UUID NOT NULL UNIQUE,
  people_id UUID NOT NULL REFERENCES people(id) ON DELETE CASCADE,
  date_order TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  type_order VARCHAR(10) NOT NULL CHECK (type_order IN ('compra', 'venda')),
  total NUMERIC(10, 2) NOT NULL,
  status VARCHAR(20) NOT NULL,
  PRIMARY KEY (order_id, people_id)
);



INSERT INTO orders (order_id, people_id, date_order, type_order, total, status)
VALUES ('ef77870a-383a-4e82-9532-5902dc469046','1498181b-44bb-461b-865b-a564a192e2df', '2024-10-05 15:30:00', 'compra', 29.95, 'pendente');

UPDATE orders
SET status = 'pago'
WHERE order_id = 'ef77870a-383a-4e82-9532-5902dc469046' AND people_id = '1498181b-44bb-461b-865b-a564a192e2df';

SELECT * FROM orders
WHERE order_id = 'ef77870a-383a-4e82-9532-5902dc469046' AND people_id = '1498181b-44bb-461b-865b-a564a192e2df';





CREATE TABLE IF NOT EXISTS public.transactions(
  id SERIAL PRIMARY KEY,
  order_id UUID NOT NULL REFERENCES orders(order_id) ON DELETE CASCADE,
  amount_paid NUMERIC(10, 2) NOT NULL,
  method_paid VARCHAR(50) NOT NULL CHECK (method_paid IN ('pix', 'cartao', 'dinheiro')),
  payment_status VARCHAR(30) NOT NULL CHECK (payment_status IN ('pago', 'pendente', 'aguardando', 'cancelado')),
  date_transaction TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO transactions (order_id, amount_paid, method_paid, payment_status,date_transaction)
VALUES
	('ef77870a-383a-4e82-9532-5902dc469046',29.95,'pix','pago','2024-10-08 17:50:00');


INSERT INTO products (describe, price, stock)
VALUES 
	('3 folhas de adesivo a3 papel',10.2, 3 ),
	('Leite Cond. Cemil 395g', 5.99, 18),
	('Creme de leite 200g', 3.18,18),
	('Leite em pó 400g', 15.98, 2),
	('Manteiga s/sal 200g', 14.00, 1),
	('Acucar colorido', 10.90, 2);

INSERT INTO order_product (product_id,count, unit_price)
VALUES 
	(1, 2,10.20 ),
	(2, 5,5.99 ),
	(3, 5,3.18 ),
	(5, 1,14.00 ),
	(6, 1,10.98 );

select * from people;
select * from products;
select * from order_product;
select * from orders;
select * from transactions;

/*DELETE FROM order_product
WHERE id = 'd28c7102-6292-43d1-8ef6-1374411c256d';*/


--COMMIT;

--ROLLBACK; 