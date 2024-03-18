function main(args) {
  // codigo
  args = args.toString();
  let resul = 0;

  for(let index = 0; index < args.length; index++){
    resul+=parseInt(args[index]);
  }
  return resul;
}
module.exports = main;