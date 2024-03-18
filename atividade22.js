function main(num) {
  // codigo
  if (num <= 1) {
    return false;
  }

  let divisores=0;
  for(let index = 1; index <= num/2; index++){
    if(num%index == 0)divisores+=index;
  }
  return divisores == num;
}
module.exports = main;