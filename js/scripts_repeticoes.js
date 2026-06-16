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

//COLEÇÃO DE DADOS - ARRAY

transporte = ['Bicicleta', 'Carro', 'Moto', 'Onibus', 'Avião', 'Tototo']

for(i = 0; i < transporte.length; i++){
    console.log(transporte[i])
}

//FOR IN 

const divForin = document.querySelector('#div-forin')

for(var pos in transporte){
    console.log(transporte[pos])
    divForin.innerHTML += `${transporte[pos]} <br> <br>`
}

//FOR OF 

const divForOf = document.querySelector('#div-forof')

for(var elem of transporte){
    divForOf.innerHTML += `${elem} <br> <br>`
}

//COLEÇÃO DE PESSOAS - ARRAY DE OBJETOS

const pessoas = [
    {nome: 'Maria', idade: 18, renda: 15000},

    {nome: 'José', idade: 23, renda: 1800},

    {nome: 'Chicó', idade: 32, renda: 1.50},
    
    {nome: 'João Grilo', idade: 34, renda: 2.20},
]

console.log('----------LISTA POR FOR IN----------')
for(var indiceObjPessoa in pessoa){
    console.log(pessoas[indiceObjPessoa].nome, [indiceObjPessoa].idade, [indiceObjPessoa].renda)

}

console.log('----------LISTA POR FOR OF----------')
for(var pessoa of pessoas){
    console.log(pessoa.nome, pessoa.idade, pessoa.renda)
}

//FOREACH

const divForeach = document.querySelector('#div-foreach')


pessoas.forEach((elem, i)=>{
    divForeach.innerHTML += `${i} - ${elem.nome}, ${elem.idade} anos com a renda ${elem.renda} <br>`
}) 
