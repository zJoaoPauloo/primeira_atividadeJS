function main(string) {
  let arrayLetras = {};
  string = string.toLowerCase();

  for (let letra of string) {

    if (arrayLetras[letra])return false;
    arrayLetras[letra] = true;
  } 
return true;
}
module.exports = main;