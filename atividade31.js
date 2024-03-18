function mdc(num) {
  if (num<=1) {
    return false;
  }
  else if (num<=3) {
    return true;
  }
  else if (num%2===0 || num%3===0) {
    return false;
  }

  let i = 5;
  while(i*i <= num){
    i+=6
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true;

}

function main(num) {
  if (!mdc(num)) return false;

  let contador = 2;
  for(;;contador++) {
    let numeroMersenne = (2 ** contador) - 1;
    
    if (numeroMersenne === num) return true;
    else if (numeroMersenne > num) return false;
  }
}
module.exports = main;