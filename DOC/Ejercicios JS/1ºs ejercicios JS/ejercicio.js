        //Ejercicio 1 - Impares por consola 1 - 20 (solo con console!!)

//10 % 3 = 1

// let limit = 20;

// for (let i = 1; i <= limit; i++) {
//     if (i % 2 === 1) {
//         console.log('Los números impares son: '+ i);
//     }
// }

// Mismo ejercicio pero de Jona:

// const maxLaps = 20;
// const divisor = 2;

// for (let i = 0; i < maxLaps; i++) {
//     const leftover = i % divisor;
//     const isOdd = leftover === 1;
//     if (isOdd) {
//         console.log(i + ' is odd');
//     }
// }

// FORMA ÓPTIMA:

// const maxLaps = 20;
// const divisor = 2;

// for (let i = 1; i < maxLaps; i += divisor) {  //i = i+2 === i+=2;
//     console.log('-------' + i + ' is odd');
// }


// ------------------------------------------------------------------------------------------------------------------


        //Ejercicio 2 - Fibonacci

// 0 + 1 = 1;
// 1 + 1 = 2;
// 2 + 1 = 3;
// 3 + 2 = 5;
// 5 + 3 = 8;
// 8 + 5 = 13;

// const maxLaps = 10;
// let numOne = 0;
// let numTwo = 1;

// console.log(numOne);
// console.log(numTwo);

// for (let i = 0; i <= maxLaps; i++) {
//     const result = numOne + numTwo;
//     console.log(result);
//     numOne = numTwo;
//     numTwo = result;
// }


// Mismo ejercicio de arriba sacado de internet

// var fibonacci = [];
// fibonacci[0] = 0;
// fibonacci[1] = 1;
// for (var i = 2; i < 144; i++) {
//   fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
// }
// console.log(fibonacci);


// ------------------------------------------------------------------------------------------------------------------


        // Ejercicio 3 - Calendario


// const weekdays = ['Sabado', 'Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'];
// weekdays[1];

// for (let i = 1; i <= 31; i++) {
//     console.log(i);
//     let weekdayAsNumber;
//     if (i % 7 === 0) {
//         weekdayAsNumber = 6;
//     } else {
//         weekdayAsNumber = i % 7 -1;
//     }
//     console.log(weekdays[weekdayAsNumber]); //Lunes - Domingo, undefined
// }


// Mismo ejercicio con la forma de alberto:

const days = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo']

let j = 5

for (let i = 1; i <= 31; i++) {
    console.log(days[j], i)
    j++
    
    if(j>6){
        j = 0;
    }
}


// ------------------------------------------------------------------------------------------------------------------


        // Ejercicio 4: Calculadora (funciones) // add, substract, multiply, divide, AC.
        // Que las funciones tengan un return, no poner el console dentro de las funciones.

        // SUMA
// function add(n1, n2) {
//     const result = n1 + n2;
//     return result;
// }

// const result = add(1, 2); // 3
// console.log(add(1, 2)); // 3

// add(1, 2); // 3
// add(4, 7); // 11
// add(2, 1); // 3



        // RESTA
// function substract (n1, n2) {
//     const result = n1 - n2;
//     return result;
// }
// const result = substract(2, 1);
// console.log(substract(2, 1));



        // MULTIPLICACIÓN
// function multiply (n1, n2) {
//     const result = n1 + n2;
//     return result;
// }
// const result = multiply(2, 2);
// console.log(multiply(2, 2));



        // DIVISIÓN
// function divide (n1, n2) {
//     const result = n1 / n2;
//     return result;
// }
// const result = divide(10 / 5);
// console.log(divide(10, 5));



        // AC
// function AC () {
//         const result = 0;
//         return result;
// }
// const result = AC(0);
// console.log(AC(0));