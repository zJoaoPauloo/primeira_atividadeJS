function main(arrayNumeros) {
  // codigo

  if(arrayNumeros.lentgh === 0){
    return 0;
  }

  let resultSoma=0;
  for (let valor of arrayNumeros){resultSoma+=valor;}
  
  return resultSoma/arrayNumeros.length;
}
module.exports = main;