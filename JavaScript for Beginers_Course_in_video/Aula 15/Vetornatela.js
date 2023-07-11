// Para criar um loop de repetições

//let valores = [8, 1, 7, 4, 2, 9];
//valores.sort();

//console.log(valores);

/* Maneira não produtiva de fazer
console.log(valores[8]);
console.log(valores[1]);
console.log(valores[7]);
console.log(valores[4]);
console.log(valores[2]);
console.log(valores[9]); 
*/
/*
for (let pos = 0; pos < valores.length; pos++) {
  valores.sort;
  console.log(`A posição ${pos} tem o valor ${valores[pos]}`);
}

// Forma mais simplificada de fazer com o "FOR"
// Ler "para cada posição dentro/ em valores" mostrar o valores[pos]
for (let pos in valores) {
  console.log(valores[pos]);
}

// Buscar valores dentro de um vetor. Se o valor não for encontrado o JS exibe -1
*/
let num = [5, 3, 2, 1, 8];
// indexOf retorna a pos ou chave do valor do elemento (vetor)
let pos = num.indexOf(5);
if (pos == -1) {
  console.log(`O valor não foi encontrado!!!`);
} else {
  console.log(`O valor está na posição ${pos}`);
}
