function main(num) {
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
module.exports = main;