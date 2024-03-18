function main(lista) {
  let elementosUnicos = [];

  for (let index in lista) {
    
    if (!elementosUnicos.includes(lista[index])) {
      elementosUnicos.push(lista[index]);
    }
  }

  return elementosUnicos.length;
}

module.exports = main;