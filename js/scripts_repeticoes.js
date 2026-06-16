//PEGANDO ELEMENTOS DO DOM
const divFor = document.querySelector('#div-for')

//ESTRUTURAS DE REPETIÇÕES

for (i = 0; i < 10; i++){
    console.log(i)
    divFor.innerHTML += `${i} <br>`
}

//CONTADOR E ACUMULADOR 

const inputNum1 = document.querySelector('#num1') 

const btnNum1 = document.querySelector('#btn-num1')

const divResult = document.querySelector('#result-cont-acum')

var cont = 0, contPar = 0, contImpar = 0
var acum = 0.0

btnNum1.addEventListener('click',(evt)=>{
    var numDigitado = Number(inputNum1.value)

    //CONTADOR
    cont++ 
    //ACUMULADOR
    acum += numDigitado

    if(numDigitado % 2 === 0){
        contPar++
    }else{
        contImpar++
    }

    divResult.innerHTML = `<br> TOTAL DE NÚMEROS DIGITADOS ${cont} <br> <br>
    A SOMA DOS NÚMEROS DIGITADOS É ${acum} <br> <br>
    TOTAL DE NÚMEROS PAR DIGITADOS: ${contPar} <br> <br>
    TOTAL DE NÚMEROS IMPARES DIGITADOS: ${contImpar} <br> <br>
    `



})

//REPETIÇÃO COM WHILE

const inputFrase = document.querySelector('#msg')

const inputRepeticao = document.querySelector('#repeticao')

const bntExibir = document.querySelector('#bnt-exibir')

const divResultFrase = document.querySelector('#result-frase')

var contFrase = 0
var totalRepeticao = Number(inputRepeticao.value)

bntExibir.addEventListener('click', (evt)=> {
    totalRepeticao = Number(inputRepeticao.value)

    while(totalRepeticao > contFrase){
        divResultFrase.innerHTML += `${contFrase + 1} - ${inputFrase.value} <br>`
        contFrase++
        
    }
})

