function main(valor) {
  let numeroString = valor.toString();
  let divisor = 0;

  for(let index = 0; index < numeroString.length; index++){divisor += parseInt(numeroString[index]);  }
  return (valor/divisor == parseInt(valor/divisor, 10));
}
module.exports = main;