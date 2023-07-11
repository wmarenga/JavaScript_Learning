/* Define n1 e n2 como inicialmente 0 para o caso de 
algum número não ser informado, sendo declarado como 
indefinido*/
function soma(n1 = 0, n2 = 0) {
  return n1 + n2;
}
console.log(soma(2, 2));
