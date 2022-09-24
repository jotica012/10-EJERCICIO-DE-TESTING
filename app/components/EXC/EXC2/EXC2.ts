/**
  * Ejercicio 2
  * Dado un arreglo de numeros, devuelva un arreglo con dos listas en su interios,
  * la primera contendrá los números pares del arreglo y la segunda los impares
  */
 let numberArray: number [] = [];
 numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

 function separateN(array){
    array = [[], []];
    array.forEach(element => {
        if(element%2 == 0){
            array[0].push(element);
        } else {
            array[1].push(element);
        }
    });
    return array;
 }

 console.log(separateN(numberArray));

 export default separateN;