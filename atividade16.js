function main(array1,array2) {
  // codigo
  if(array1.length !== array2.length)return 0;

  let resultado = 0;
  for(let index in array1){resultado += array1[index]*array2[index];}

  return resultado;
}
module.exports = main;