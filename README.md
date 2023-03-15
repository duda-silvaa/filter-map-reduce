# filter-map-reduce
 
 ### Estudos Js - manipulação de array 
 
 * Conteúdos principais: 
 - [x] Filter 
 - [x] Map 
 - [x] Reduce 
 
 #### Filter 
 
 Ele vai percorrer todo o array e criar um novo com todos os elementos que passaram no teste implementado, nesse caso, quando o valor de uma compra for maior que R$ 6,00. 
 Como temos objetos dentro do array, precisamos acessar suas propriedades para fazer o filtro. Para isso basta chamar o nome do array seguido da notação de ponto e logo após, o nome da propriedade.
 
 ![filter](https://user-images.githubusercontent.com/125522513/225176076-afe3c46f-a034-4ba4-8bcd-072b75516a44.png)
 
 #### Map 
 
Com o Map é possível percorrer todos os itens do array, executar alguma transformação nesses itens e retornar um novo array sem modificar o atual. Assim ele vai  percorrer o array e dentro de cada objeto pega as propriedades nome e categoria de cada compra.

![map](https://user-images.githubusercontent.com/125522513/225177120-2a7e6c71-93b0-4d31-a86e-0642f7c76b6a.png)

#### Reduce 

O método reduce passa por cada item do array fazendo uma expressão escolhida, e no final vai devolver um único valor. Ele vai receber dois valores, um acumulado e um atual, o acumulado irá somar com o atual. Como no primeiro loop da soma não tem nenhum valor acumulado, então precisa passar como segundo parâmetro esse valor, que no caso vai ser 0. Com ele tem-se a soma das compras. 

![reduce](https://user-images.githubusercontent.com/125522513/225177916-d50e6324-71e4-4cd9-88fe-178753b979e5.png)

