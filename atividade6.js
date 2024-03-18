const listaVogais = "aeiouáéíóúâêîôûàèìòùãõäëïöü";

function main(string) {
    // codigo
    let contador = 0;

    string = string.toLowerCase();

    for(let i = 0; i < string.length; i++){
        if(listaVogais.includes(string[i]))contador++;
    }

    return contador;
}
module.exports = main;