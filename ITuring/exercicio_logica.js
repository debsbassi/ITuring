let a = 10
let b = true
let c = 3
let d = [1,2,3,4]
let e = "Nome"

console.log("Esses são os exercicios da aula 3")
//1
if (a == 10) {
    console.log("A");
} else {
    console.log("B");
}
//2
if (a > 10) {
    console.log("A");
} else {
    console.log("B");
}
//3
if (a >= 10) {
    console.log("A");
} else {
    console.log("B");
}
//4
if (b == true) {
    console.log("A");
} else {
    console.log("B");
}
//5
if (b) {
    console.log("A");
} else {
    console.log("B");
}
//6
if (c) {
    console.log("A");
} else {
    console.log("B");
}
//7
if (d) {
    console.log("A");
} else {
    console.log("B");
}
//8
if (d[0] == 1) {
    console.log("A");
} else {
    console.log("B");
}
//9
if (d[1] == 1) {
    console.log("A");
} else {
    console.log("B");
}
//10
if (typeof(e) == 'string') {
    console.log("A");
} else {
    console.log("B");
}



console.log("Esses são os exercicios que fiquei com dúvida")
//5
if (b) 
    console.log("A");
 else {
    console.log("B");
}
//6
if (c) {
    console.log("A");
} else {
    console.log("B");
}
//7
if (d) {
    console.log("A");
} else {
    console.log("B");
}

//Não confunda os valores boolean primitivos true e false com os valores true e false do objeto Boolean. 
//Qualquer valor que não for undefined, null, 0, NaN, ou uma string vazia (""), e qualquer objeto, incluíndo um objeto Boolean 
//cujo valor é false, é avaliado como true quando passado por uma condicional.