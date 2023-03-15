/* Exibir as seguintes informações:
1. Compras com preço acima de R$ 6,00;
2. O nome de cada compra e de sua categoria;
3. O total da soma das compras em R$. */

/* filter */

let compras = [
    { nome:'Arroz', valor: 6.00, categoria: 'Alimento'},
    { nome: 'Feijão', valor: 10.00, categoria: 'Alimento' },
    { nome: 'Macarrão', valor: 6.50, categoria: 'Alimento'},
    { nome: 'Amaciante', valor: 9.00, categoria: 'Limpeza'},
    { nome: 'Detergente', valor: 3.50, categoria: 'Limpeza'},
    {nome: 'Sabão em pó', valor: 5.25, categoria: 'Limpeza'}
];


let valor = compras.filter(compra => (compra.valor > 6));
console.log(valor);


/* map */

let informacoes = compras.map (compra => `${compra.nome}`  +  ' categoria: ' +  `${compra.categoria}`);
console.log(informacoes);


/*reduce */

let soma = compras.reduce((resultado, quantidade) => {
    return (resultado + quantidade.valor); }, 0);
console.log(soma);
