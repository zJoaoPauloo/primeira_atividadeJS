function main(num) {
  const listaNumeros = [1,2];
  do{
    let buff = listaNumeros[1];
    listaNumeros[1] = listaNumeros[0]+listaNumeros[1];
    listaNumeros[0] = buff;
  }while(listaNumeros[1] < num);

  return listaNumeros[1] == num;
}
module.exports = main;