
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// //1 užduotis
// const elementu30 = [
//     rand(5, 25),
//     rand(5, 25),
//     rand(5, 25),
//     rand(5, 25),
//     rand(5, 25),
//     rand(5, 25),
//     rand(5, 25),
//     rand(5, 25),
//     rand(5, 25),
//     rand(5, 25),
//     rand(5, 25),
//     rand(5, 25),
//     rand(5, 25),
//     rand(5, 25),
//     rand(5, 25),
//     rand(5, 25),
//     rand(5, 25),
//     rand(5, 25),
//     rand(5, 25),
//     rand(5, 25),
//     rand(5, 25),
//     rand(5, 25),
//     rand(5, 25),
//     rand(5, 25),
//     rand(5, 25),
//     rand(5, 25),
//     rand(5, 25),
//     rand(5, 25),
//     rand(5, 25),
//     rand(5, 25)
// ]
// console.log(elementu30, elementu30.length)

// //2 užduotis
// //a
// let didesniu10 = 0
// elementu30.forEach(a => {
//     if (a > 10) {
//         didesniu10++
//     }
// })
// console.log('Reikšmės didesnės nei 10 =', didesniu10);

// //b
// function dydz(a) {
//     let dydzNum = a[0];
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] > dydzNum) dydzNum = a[i];
//     }
//     return dydzNum;
// }
// const result = dydz(elementu30);
// console.log('Dyžiausia reikšmė =', result)

// //c
// let lygSum = 0
// elementu30.forEach(a => {
//     if (a % 2 === 0) {
//         lygSum += a
//     }
// })
// console.log('Lyginių reikšmių suma =', lygSum)

// //d
// const elementu30New = { ...elementu30 }
// console.log(elementu30New)



//e



//f


//g


//h





//3. Užduotis
// const characters = ('ABCD')
// function atsitRai(length) {
//     let result = ' ';
//     const chaLen = characters.length;
//     for (let i = 0; i < length; i++) {
//         result += characters.charAt(Math.floor(Math.random() * chaLen));
//     }

//     return result;
// }

// const raidziu200 = [
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
//     atsitRai(1),
// ]

// console.log(typeof (raidziu200))

// let raidziuA = 0;
// raidziu200.forEach(a => {
//     if (a == 'A') {

//     } else raidziuA++
// })
// console.log(raidziuA);
