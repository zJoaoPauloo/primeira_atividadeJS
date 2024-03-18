function main(num) {
  return num && (num & (num - 1)) == 0;
}
module.exports = main;