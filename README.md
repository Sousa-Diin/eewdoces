# E&WDoces 🧁

## Sistema de gerenciamento de produtos(materia prima e material), produtos(vendas), bem como fornecedores e clientes.

> O presente projeto nasceu da necessidade de ter o controle dos materiais de uso para confecção dos doces, e embalagens do mesmo.
> Pensando em prever e controlar quanto de materia prima necessaria para cada massa e o material necessario, 
> com isso sendo possivél prever a quantidade exata de material e materia prima.

______________________________________
|ENTIDAES | PRIMARY KEY| FOREIGN KEY |
|---------|------------|-------------|
| SUPPLIER | ID | NULL |
| CLIENT | ID | NULL |
| PRODUCT | ID | NULL |
| ORDERS | ID | `client_ID`, `supplier_ID` e `order_ID` |
| TRANSACTION | ID | `Order_ID` |
| ORDER_PRODUCT | ID | `Order_ID` e `Product_ID` |


```sql
  SELECT * FROM (name, tel, addres) supplier;
```
## 📌 🚛🏢 Fornecedores

>|ID| Name | Tel | Address |
>|---|------|-----|---------|
>|a0c4 |Supermecados BH |(31)3117-2602 | Av.Vaz Monteiro, 325 - centro |
>|48f7 |Embalagem Botelho |(35)3822-2859 | Rua Dr. Alvaro Botelho - centro |
>|41f9|Casa da Embalagem |(35)3821-7528 | Rua Firmino Sales - centro |
>|498e |E&WDoces |(35)9 9772-75349728 | Lavras - MG |

## 📌🧔🏽 Clientes

>|ID| Name | Tel | Address |
>|---|------|-----|---------|
>|c4b6df6e937d|Client_default |(35) 9 0000-1111 | Jardim Glória |
>|809cbdcda91a |Person_name_1 |(35) 9 0000-1111 | Belizandra |
>|e7585564439a |Person_name_2 |(35) 9 0000-1111 | Rua Alvaro Botelho - centro |
>|a210e003169e |E&WDoces |(35)9 9772-75349728 | Lavras - MG |

## 📌📦 Produtos

>| ID | Name | Preco | Estoque |
>|------|-----|---------|----|
>|adec | Brigadeiro  | R$12,00 | 96
>|e2de | Emb. P-650 c/300 |R$69,9 |3 |
>|fe16 | Ninho |R$53,73|1  |

## 📌📜 Pedidos

>| Order_ID | Client_ID | Supplier_ID | Date_Order | Type_Order | Total | Status
>|------|-----|---------|----|-----|----|------|
>|4fa60978 |a210e003169e | 498e |2024-10-03 09:16:08 | venda  | R$240,00  | aguardando
>|dc106d3a |e7585564439a | 48f7 |2024-10-04 22:59:17 | compra | R$139,8  | pago
>|0de9d4ec |809cbdcda91a | 41f9 |2024-09-15 00:50:05 | compra | R$53,73 | pendente

## 📌📜 ↔ 📦 pedido_Produto

>| Order_ID | Product_ID | Preco_untario | Quantidade |
>|------|-----|---------|----|
>|4fa60978 |adec | R$12,00  | 24 |
>|dc106d3a |e2de| R$69,9  | 2 |
>|0de9d4ec |fe16 | R$53,73 | 1 |



## 📌 💲💳 Transações

>|ID| Order_ID | Valor_pago | Metodo_pago | Status_pagamento | Date_transaction |
>|---|------|-----|---------|----|-----|
>| |4fa60978 | R$240,00  | pix | aguardando |2024-10-03 09:16:08
>| |dc106d3a | R$177,26  | cartão |pago | 2024-10-04 22:59:17
>| |0de9d4ec | R$53,73 | dinheiro |pendente | 2024-09-15 00:50:05