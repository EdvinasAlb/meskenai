

// function rand(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// // funkcijos deklaracija(kodas nevykdo)
// // function fun1() {//visalaik matom kur yra nevarbu kur iskvietimas
// //     console.log('this is fun1');// ne klonas
// // }
// //deklaracijos pabaiga
// // function fun1() {//visalaik matom kur yra nevarbu kur iskvietimas
// //     console.log('this is fun1111111'); //clonas overwritina
// // }



// console.log('Start');
// //funkcijos iskvietimas
// fun1();
// console.log('End');



// function fun1() {//funkcijoms priskiriam kintamuosius
//     console.log('this is fun1');
//     return 'This realy fun'
// }




// // let fun2 = fun1// funkcija priskirta kitam kintamajam

// let fun2 = fun1()// i fun 2 sugrys fun 1 funkcijos veiksmas ir bus undifined
// //
// console.log(fun1, fun2);


// // svarbu ar kintamajam priskiriam funkcija ar ka ji grazina(returne)
// //cinsole log daro darba o returne yra jos darbo rezultatas




// let fun3 = function () {
//     console.log("this is")
// }

// // arow funkcija

// let fun4 = () => {
//     console.log('This is fun')
// }
// //onelineris
// let fun5 = () => console.log('This fun')//jei funkcija turi viena eilute(expresion)

// let fun6 = () => {
//     return 'this is fun'
// }


// fun3();
// fun4();
// fun5();

// console.log(fun6()); //() logina ka returnina, be () grazina funkcija

// let fun7 = () => 'is';

// console.log(fun7());


// let fun8 = (day) => {
//     return 'Today is' + day;
// }

// let today = 'Friday';

// console.log(fun8(today))





//jei funkcija neturi argumentu
// jei yra kintamasis kuris nenaudojamas naudojam (_) kai nereikia funkcijoje deti skliaustu







//destytojo funkciju pvz

// console.log('Have fun with functions!');

// console.log('Function declaration');

// // function declaration
// let fun1 = function() {
//     return 'This is really fun1';
//     console.log('This is fun1');
// }
// // let fun1 = function() {
// //     console.log('This is fun1 clone');
// // }

// let fun2 = fun1();

// console.log('fun2:', fun2, typeof fun2);


// let cl = console.log;

// cl('BEVERLY HILLS');

// console.log('cl:', cl, typeof cl);



// console.log('End of function declaration');


// // function rand(min, max) {
// //     min = Math.ceil(min);
// //     max = Math.floor(max);
// //     return Math.floor(Math.random() * (max - min + 1)) + min;
// // }


// console.log('Start of the program');



// // calling the function
// fun1();
// fun1();
// fun1();



// console.log('--------------------End of the program-------------------');

// let fun3 = function() {
//     console.log('This is fun3');
// }

// // arrow function
// let fun4 = () => {
//     console.log('This is fun4');
// }

// // one-liner arrow function
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