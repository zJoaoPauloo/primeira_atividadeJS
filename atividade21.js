function main(listaPalavras,acronimo) {
  if((listaPalavras.length == 0) || (acronimo == undefined))return false;

  acronimo = acronimo.toLowerCase();

  let resul = "";
  for(let palavra in listaPalavras){resul += listaPalavras[palavra].charAt(0).toLowerCase();}
  return acronimo == resul;
}
module.exports = main;