function main(ano) {
    // codigo
    return ((ano%4===0 && ano%100 !== 0) || ano%400 === 0)?true:false;
}
module.exports = main;