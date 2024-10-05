# E&WDoces

## Sistema de gerenciamento de produtos(materia prima e material), produtos(vendas), bem como fornecedores e clientes 

> O presente projeto nasceu da necessidade de ter o controle dos materiais de uso para confecção dos doces, e embalagens do mesmo.
> Pensando em prever e controlar quanto de materia prima necessaria para cada massa e o material necessario, 
> com isso sendo possivél prever a quantidade exata de material e materia prima.

_________________________
|ENTIDAES | PRIMARY KEY| FOREIGN KEY |
|---------|------------|-------------|
| SUPPLIER | ID | NULL |
| CLIENT | ID | NULL |
| PRODUCT | ID | CustomerID |
| SALE | ID | ProductID |
| BUY | ID | ProductID |


