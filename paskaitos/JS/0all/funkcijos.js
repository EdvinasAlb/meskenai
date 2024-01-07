function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function fun1() {
//     console.log('this is fun1');
//     return 'This realy fun'
// }
// // let fun2 = fun1
// let fun2 = fun1()
// console.log(fun1, fun2);

// let fun3 = function () {
//     console.log("this is")
// }

//-------------------------------------------------Arow Funkc.

// let fun4 = () => {
//     console.log('This is fun')
// }
//----------------------------------------------------One Liner Funkc.
// let fun5 = () => console.log('This fun')

// let fun6 = () => {
//     return 'this is fun'
// }
// fun3();
// fun4();
// fun5();
// console.log(fun6());
// let fun7 = () => 'is';
// console.log(fun7());
// let fun8 = (day) => {
//     return 'Today is' + day;
// }
// let today = 'Friday';
// console.log(fun8(today))

//--------------------------------------Functio. Declaration
// let fun1 = function() {
//     return 'This is really fun1';
//     console.log('This is fun1');
// }
//  let fun1 = function() {
//      console.log('This is fun1 clone');
//  }
// let fun2 = fun1();
// console.log('fun2:', fun2, typeof fun2);

// let cl = console.log;

// cl('BEVERLY HILLS');

// console.log('cl:', cl, typeof cl);

// console.log('End of function declaration');

//---------------------------Calling The Function
// fun1();
// fun1();
// fun1();

// console.log('--------------------End of the program-------------------');

// let fun3 = function() {
//     console.log('This is fun3');
// }

//--------------------------------Arrow Function
// let fun4 = () => {
//     console.log('This is fun4');
// }

//------------------------------------------One Liner Arrow Function
// let fun5 = () => console.log('This is fun5');

// let fun6 = () => {
//     return 'This is really fun6';
// }

// let fun7 = () => 'This is really fun7';

// fun3();
// fun4();
// fun5();

// console.log( fun6() );
// console.log( fun7() );

// let fun8 = (day = 'Sunday') => {
//     return 'Today is ' + day;
// }

// let today = 'Friday';

// console.log( fun8(today) );

// today = 'Saturday';

// console.log( fun8(today) );

// console.log( fun8() );

// let fun9 = (a, b = 10) => {
//     return a > b;
// }

// let a = 2;
// let b = 3;
// let c = 4;

// console.log( fun9(b, a, c) );

// console.log( fun9(b) );

// let fun10 = x => 3 * x;

// let result = fun10(8);

// console.log(result);

// let fun11 = _ => console.log('This is dash');

// fun11();

// if (true) {
//     var a = 'A'
// }

// function fun() {
//     var b = 'B';
//     console.log(a)
// }

// let fun2 = () => { console.log('fun 2 fumction ver1'); }

// fun2 = () => { console.log('fun 2 function ver2'); }
// fun2()

// const fun2 = () => { console.log('fun 2 fumction ver1'); }

//---------------------------------------Rekur. Funkc.
// function count123(count) {
//     console.log('start', count);
//     count++;
//     if (count <= 3) {
//         count123(count);
//     }
//     console.log('end', count - 1);
// }
// count123(1);

// const fun3 = () => {
//     console.log('Fun 3 funkcija')
// }

// const fun4 = () => {
//     console.log('fun4 funkcija');
//     return fun3;
// }

// fun4()()

//-----------------------------------Call Back Funkcion.
// const fun5 = f => {
//     console.log('fun 5');
//     f();
// }
// fun5(fun3)

//-------------------------------------------Calculator
// const calc = (action, f1, f2) => {
//   let result = action(f1, f2);
//   console.log(`%cResult: ${result}`, `color:red; font-size:20px;`);
// };
// const sum = (a, b) => a + b;
// const sub = (a, b) => a - b;
// const mul = (a, b) => a * b;
// const div = (a, b) => a / b;

// calc(sum, 20, 5);
// calc(mul, 10, 5);
// calc(div, 10, 5);
// calc((a, b) => a + b, 10, 5);
// calc(sub, 10, 5);

// const calc1 = action => {
//   let f1 = 30; //action f1
//   let f2 = 10; //action f2
//   let result = action(f1, f2);
//   console.log(`%cResult: ${result}`, `color:red; font-size:20px;`);
// };

// calc1((a, b) => a + b);

//--------------------------------2
// function funkc(a, b) {
//     for (let i = 0; i < b; i++) {
//         console.log(a);
//     }
// }
// funkc('labas rytas', 3)

//-------------------------------4
// function funkc(a) {
//     let n = 0;
//     for (let i = 2; i <= a / 2; i++) {
//         if (a % i == 0) {
//             n++;
//         }
//     } console.log(n);//iškviečia for ciklo atskymą
// };
// funkc(10);
