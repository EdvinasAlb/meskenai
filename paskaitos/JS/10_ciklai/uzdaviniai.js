
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 1
// let kint1 = 5;
// let kint2 = 10;
// let kint3 = 15;

// let total = kint1 + kint2 + kint3;
// console.log(total);

// let kint4 = `5 10 15, ${total}`;
// console.log(kint4);
// 2
// let kint1 = rand(5, 10);
// console.log(kint1);
//3
// let labas = 'labas';

// for (let i = 0; i < 5; i++) {
//     console.log(labas);
// }
//4
// let kint1 = rand(5, 10);
// for (let i = 0; i < 7; i++) {
//     console.log(kint1);
// }

//5
// let kint1 = rand(5, 10);

// for (let i = 0; i < kint1; i++) {
//     console.log(kint1);
// }


//6
// let kint1 = rand(5, 10);
// let result = '';
// let i = kint1;

// do {
//     i = i + 1;
//     result = result + i;
// } while (i < 7);

// for (let i = 0; i < result; i++) {
//     console.log(result);
// }





//7
// let seven;
// let sum = 0;
// let sum2 = 0;

// for (let i = 0; i < 5; i++) {
//     let random = rand(10, 20);
//     seven = random; //A. Assigning the random number to the variable seven

//     seven = seven || 0; //B. Assigning 0 to the variable seven
//     seven = seven + random; //B. Adding the random number to the variable seven

//     seven = seven || ''; //C. Assigning an empty string to the variable seven
//     seven = seven + ' ' + random; //C. Adding the random number to the variable seven

//     sum = sum + random; //D. Adding the random number to the variable sum
//     seven = seven || ''; //D. Assigning an empty string to the variable seven
//     seven = seven + ' ' + random; //D. Adding the random number to the variable seven

//     sum2 = sum2 + random; //E. Adding the random number to the variable sum
//     seven = seven || ''; //E. Assigning an empty string to the variable seven
//     seven = seven + (i ? ' + ' : '') + random; //E. Adding the random number to the variable seven
// }

// seven = seven + ' ' + sum; //D. Adding the sum to the variable seven
// seven = seven + ' = ' + sum2; //E. Adding the sum to the variable seven

// console.log(seven);

//8
let kintamasis;
let circle = 0
let didesni18 = 0
let nesumuotos = 0
let nesumuotosSum = 0
let lyginiai = 0
let neLyginiai = 0
do {
    kintamasis = rand(10, 25)//aadalis
    console.log(kintamasis)
    // if (kintamasis <= 18) {//c
    //     didesni18 = kintamasis + didesni18
    // }
    // if (kintamasis > 18) {//d
    //     nesumuotos++
    //     nesumuotosSum = kintamasis + nesumuotosSum
    // }
    // if (kintamasis % 2 === 0) {//e
    //     lyginiai++
    // } else neLyginiai++
    circle++//b dalies ciklas

} while (kintamasis > 12)

console.log('ciklu skaicius', circle)
// console.log('maziau nei 18 suma', didesni18)
// console.log('daugiau nei 18 ciklu sk.', nesumuotos)
// console.log('daugiau nei 18 ciklu sk.suma', nesumuotosSum)
// console.log('lyginiai', lyginiai, 'nelyginiai', neLyginiai)

//9
// let random;
// let small = 0;
// let big = 0;
// let fives = 0;
// do {
//     random = rand(5, 10);
//     for (let i = 0; i < random; i++) {
//         small++//suskaiciuoja kiek ciklu
//         // console.log('-',)
//     }
//     big++//suskaiciuoja kiek ciklu
//     // console.log('-------',)

//     fives = random == 5 ? fives : 0; //reset
//     fives = random == 5 ? fives + 1 : 0;//resetas

//     fives = random == 5 ? fives + 1 : fives;
// } while (random != 5 || fives < 3)

// console.log('big', big, 'small', small, 'fives', fives)




//10


