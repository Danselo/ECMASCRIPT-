// El método at() recibe un valor numérico entero y devuelve el elemento en esa posición, permitiendo valores positivos y negativos. Los valores negativos contarán desde el último elemento del array.
// Esto no sugiere que haya algo mal con usar la notación de corchetes. Por ejemplo, array[0] devolvería el primer elemento. Sin embargo, en lugar de usar array.length para los últimos elementos

const stringsNumbers = ["one","two","three","four","five","six"];
console.log(stringsNumbers[stringsNumbers.length-1]);
console.log(stringsNumbers.at(-1));