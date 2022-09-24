/**
 * ejercicio 1
 * cree una función que recibe 2 arreglos como parametros.
 * luego combina estos arreglos en uno solo, alternando sus valores.
 *
 * ejem: dados los arreglos ["h", "a", "c"] y [7, 4, 17, 10, 48],
 * la respuesta deber ser: ["h", 7, "a", 4, "c", 17, 10, 48]
 *
 * note que los arreglos pueden ser de diferente tamaños y el contenido puede ser cualquier tipo de dato
 */
let wordArrayA: string [] = [];
wordArrayA = ['b', 'a', 'c'];

let wordArrayB: string[] = [];
wordArrayB = ['7', '3', '0'];

function joinArr(array1, array2?){
    const arraySize = array1.length + array2.length;
    const array= [];
    for (let a = 0; a < arraySize; a++) {
        if(array1[a] !== undefined){
            array.push(array1[a]);
        }
        if(array2[a] !== undefined){
            array.push(array2[a]);
        }
    }
    return array;
}
console.log(joinArr(wordArrayA, wordArrayB));

export default joinArr;
