function main(array) {
  let resul=0;
  for (let num of array){
    if (num%2==0) resul++; 
  }
  return resul;
}
module.exports = main;