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

--DROP TABLE public.clients

CREATE TABLE IF NOT EXISTS public.people (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  type_person VARCHAR(20) CHECK (type_person IN ('both','client', 'supplier')),
  phone TEXT VARCHAR(50),
  address TEXT NOT NULL

);

BEGIN TRANSACTION;

--DROP TABLE public.people;

CREATE TABLE IF NOT EXISTS public.people (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  type_person VARCHAR(20) CHECK (type_person IN ('both','client', 'supplier')),
  phone VARCHAR(50),
  address TEXT NOT NULL

);

BEGIN TRANSACTION;

INSERT INTO people (name, type_person, phone, address)
VALUES 
	('Supermecados BH','supplier', '(31)3117-2602', 'Av.Vaz Monteiro, 325 - centro' ),
	('Embalagem Botelho', 'supplier', '(35)3822-2859', 'Rua Dr. Alvaro Botelho - centro'),
	('Casa da Embalagem', 'supplier', '(35)3821-7528', 'Rua Firmino Sales - centro'),
	('E&WDoces', 'both', '(35)9 9772-3497', 'Lavras - MG'),
	('Client_default', 'client', '(35) 9 0000-1110', 'Lavras - MG'),
	('Clint_one', 'client', '(35) 9 0000-1111', 'Rua Alvaro Botelho - centro');

select * from people;


BEGIN TRANSACTION;

CREATE TABLE IF NOT EXISTS public.products(
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  price NUMERIC(10, 2) NOT NULL,
  stock INT NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS public.orders(
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  people_ID UUID NOT NULL REFERENCES people(id),
  date_order TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  type_order VARCHAR(10) CHECK (type_order IN ('compra', 'venda')),
  total NUMERIC(10,2) NOT NULL,
  status VARCHAR(20) NOT NULL
);

CREATE TABLE IF NOT EXISTS public.order_product(
  order_ID UUID REFERENCES orders(id) ON DELETE CASCADE,
  product_ID INT REFERENCES products(id) ON DELETE CASCADE,
  count INT NOT NULL,
  unit_price NUMERIC(10,2) NOT NULL,
  PRIMARY KEY (order_ID, product_ID)
);

CREATE TABLE IF NOT EXISTS public.transactions(
  id  SERIAL NOT NULL PRIMARY KEY,
  order_ID UUID NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
  amount_paid NUMERIC(10, 2) NOT NULL,
  method_paid VARCHAR(50) CHECK (method_paid IN ('pix', 'cartao', 'dinheiro')),
  payment_status VARCHAR(30) CHECK (payment_status IN ('pago', 'pendente', 'aguardando', 'cancelado')),
  date_transaction TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);


--COMMIT;

--ROLLBACK; 