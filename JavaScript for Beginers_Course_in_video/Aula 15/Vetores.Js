// Determina os valores do vetor "num"
//let num = [5,8,2,9,3]

let num = [5, 8, 4];
// Acrescenta 0 valor 6 no índice 3
num[3] = 6;
// Acrescenta valores no último índice disponível
num.push(7);
num.push(9);
num.push(5);
num.push(4, 1);

// Ordena em ordem crescente os valores do vetor
num.sort();

console.log(`Nosso vetor tem ${num.length} posições`);

// Exibe quantos elementos foram criados
console.log(num.length);
// Exibe o valor criado no índice 2
console.log(num[2]);
