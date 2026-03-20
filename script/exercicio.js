//------------------------------ EXERCICIO 12 ----------------------------//
function exercicio12 () {
    const numero= Number (prompt("digite um numero"))
if( numero > 0 ) {
    alert ("o numero é positivo)");
}else if (numer0< 0){
    alert("o numero é negativo");
}else {

    alert ("o numero é zero");
}
}
const buttonexercico12 = document.getElementById("exerciocio12")
buttonexercico12.addEventListener('click', () => { exercicio12() })
//----------------------EXERCICIO 20---------------------------//
function exerciocio20 () {
    const ipi = Number(prompt("digite o percentual de IPI:"));
const codigo1=prompt("codigo da peça 1:");
const valor1 = Number (prompt("valor da peça 1"));
 const quant1 = Number(prompt("quantidade da peça 1:"));
 const codigo2= prompt("codigo da peça 2;");
 const valor2 = Number (prompt("valor da peça 2:"));
 const quant2 = Number (prompt("digite a quantidade da  peça 2:"))
 //calculo
 const total = (valor1*quant1+valor2*quant2) * (1 + ipi/100);
//saida
alert("valor total a ser pago com IPI:r$"+total.toFixed(20));
}

 const buttonexercico20 = document.getElementById("exerciocio20")
buttonexercico20.addEventListener('click', () => { exercicio20() })

//-------------------- EXERCICIO 18 -----------------------//
function exercicio18 () {
//entrada 
const custo = Number (prompt("digite o custo de fabrica do carro;"));
//calculos
const  distribuidor= custo *0.28;
const impostos = custo *0.45;
//saida
alert("valor final ao consumidor:r$"+total.toFixed(2));
}
const buttonexercico18 = document.getElementById("exerciocio18")
buttonexercico18.addEventListener('click', () => { exercicio18() })

//---------------------EXERCICIO 1----------------------------//
function exercicio1 () {
const num1= Number(prompt("digite o primeiro numero:"));
const num2 = Number(prompt("digite o segundo numero:"));
const soma = num1 + num2;
alert("a soma é:"+ soma.toFixed(2));

}
const buttonexercico1 = document.getElementById("exerciocio1")
buttonexercico1.addEventListener('click', () => { exercicio1() })