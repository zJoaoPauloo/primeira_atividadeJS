function main(num) {
    // codigo
    let valorFatorial = num;  
    for(let index = num-1; index > 0; index--){valorFatorial *= index;}

    return valorFatorial;
}
module.exports = main;