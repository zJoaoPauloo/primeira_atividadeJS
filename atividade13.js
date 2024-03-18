function main(array) {
  // codigo
  let arrayFibonacci = [];
  if (array >= 1) arrayFibonacci.push(0);
  if (array >= 2) arrayFibonacci.push(1);
  
  for (let i = 2; i < array; i++) {arrayFibonacci[i] = arrayFibonacci[i - 1] + arrayFibonacci[i - 2];}
  
  return arrayFibonacci;
}
module.exports = main;