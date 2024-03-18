function main(string1,string2) {
  if(string1.length !== string2.length)return false;
  
  string1 = string1.replace(/\s/g, '').split("").sort().join("");
  string2 = string2.replace(/\s/g, '').split("").sort().join("");
  return (string1 === string2)?true:false;
}
module.exports = main;