/*
Crie um array com 5 items (tipos variados).
*/
var variados = [2,'carro', {pessoa: 'legal'}, true, null];
console.log(variados);
/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem(add) {

  variados.push(add);
  return variados;

}

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
console.log(addItem([1, [2,3], {cor:'azul'}]));


/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
let elemento = variados[5][2];
let frase = 'O segundo elemento do segundo array é ';
console.log(elemento);
console.log(variados[5][2]);
console.log(frase,elemento);

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
let quantidade = variados.length;
console.log('O primeiro array tem ' + quantidade + ' itens.' );

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
let quantidadeSeg = variados[5].length;
console.log('O segundo array tem ' + quantidadeSeg  + ' itens.' );
/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
console.log( 'Números pares entre 10 e 20:' );

let cont = 10
while(cont >=10 && cont <=20){

  cont % 2 === 0 ? console.log(cont): '';
  cont++;

};

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log( 'Números ímpares entre 10 e 20:' );

let cont = 10
while(cont >=10 && cont <= 20){

  cont % 2 != 0 ? console.log(cont): '';
  cont++;

}

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log( 'Números pares entre 100 e 120:' );
for(i=100; i>= 100 && i<=120; i++){
    i % 2 === 0 ? console.log(i): '';
}

console.log( 'Números ímpares entre 111 e 125:' );
for(i=100; i>= 100 && i<=120; i++){
  i % 2 != 0 ? console.log(i): '';
}
