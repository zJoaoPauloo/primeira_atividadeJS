function main(string) {
  string = string.toLowerCase();
  for (let letraAlfabeto = 'a'; letraAlfabeto <= 'z'; letraAlfabeto++) {if(!string.includes(letraAlfabeto))return false;}
  return true;
}
module.exports = main;