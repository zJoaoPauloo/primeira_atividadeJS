function mdcDoisNumeros(num1,num2) {
  // codigo
  let sobra = 1;
  if(num2 == 0) return num1;

  while(sobra!=0){
    sobra = num1 % num2;
    num1 = num2;
    num2 = sobra;
  }
  
  return num1;
}

function main(array) {
  let mdcArray = [];

  for (let i = 0; i < array.length - 1; i++) {
    let mdcAtual = mdcDoisNumeros(array[i], array[i + 1]);
    mdcArray.push(mdcAtual);
  }
  if(mdcArray.length==0) return 0;

  mdcArray.push(mdcDoisNumeros(array[array.length - 2], array[array.length - 1]));

  let result = -9999999999;
  for(let valor of mdcArray){
    if (valor>result)result=valor;
  }
  return result;
}
module.exports = main;