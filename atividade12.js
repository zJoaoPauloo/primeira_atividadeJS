function main(lista) {

    if (!lista.length) {
        return; // Or `return undefined;` if you want to emphasize the return value
    }
    
    return lista.reduce((menor, atual) => {
        return atual < menor ? atual : menor;
    }, Infinity);

}
module.exports = main;