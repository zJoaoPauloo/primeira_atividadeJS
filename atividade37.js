function main(num) {
  let string = num.toString();

  let resul = 0;
  for(let i = 0; i < string.length; i++){resul += parseInt(string[i])**string.length;}
  return resul == num;
}
module.exports = main;