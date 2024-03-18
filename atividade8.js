function main(string) {
    // codigo
    string = string.toLowerCase();
    if(string.replace(/\s/g, '') === string.replace(/\s/g, '').split("").reverse().join(""))return true;
    else return  false;
}
module.exports = main;