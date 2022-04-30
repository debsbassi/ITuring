//mapa recebido do cliente
let produtoA = {"nome": "camiseta", "valor": 100.00, "internacional": true};
let produtoB = {"nome": "perfume", "valor": 200.00, "internacional": true};
let produtoC = {"nome": "sandália", "valor": 120.00, "internacional": false};
let valortotal

console.log(produtoA)
console.log(produtoB)
console.log(produtoC)

/*ao receber o mapa de um produto, verifica se ele é nacional ou internacional e aplica 20% de impostos caso seja de outro país e 12% caso 
seja brasileiro. Uma vez aplicado o imposto, o programa imprime na tela o valor total do produto.*/

//produto A
if (produtoA.internacional == true) {
    console.log("O produto A é internacional")
    valortotal = produtoA.valor * 1.2
}
else {
    console.log("O produto é nacional")
    valortotal = produtoA.valor * 1.12
}
console.log("O valor do produto A com imposto é: ", valortotal)

//produto B
if (produtoB.internacional == true) {
    console.log("O produto é internacional")
    valortotal = produtoB.valor * 1.2
}
else {
    console.log("O produto B é nacional")
    valortotal = produtoB.valor * 1.12
}
console.log("O valor do produto B com imposto é: ", valortotal)

//produto C
if (produtoC.internacional == true) {
    console.log("O produto é internacional")
    valortotal = produtoC.valor * 1.2
}
else {
    console.log("O produto C é nacional")
    valortotal = produtoC.valor * 1.12
}
console.log("O valor do produto C com imposto é: ", valortotal)
