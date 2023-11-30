// const animals = [
//     'Lion',
//     'Racoon',
//     'Monkey',
//     'Cat',
//     'Dog',
//     'Bird',
//     'Fish',
//     'Turtle',
//     'Snake'
// ];

// animals[4] = 'Frog'//replace
// animals.push('Elephant');//prideti reiksme
// animals.push('Horse', 'cow', 'pig');//prides kelis bet is eiles, nuo galo
// animals.unshift('Tiger', 'Bear')//prides i prieki
// //masyve svarbi tvarka kas po ko
// animals.pop()//atimam nuo galo po viena
// animals.shift()//atimamas nuo priekio

// let animalsLine = 'Animals: '

// for (let i = 0; i < animals.length; i++) {
//     console.log(animals[i])
//     animalsLine += animals[i] + '+';//sujungia masyvo reiksmes
// }

// const animalsline2 = animals.join('+')//sujungia masyvo reiksmes

// console.log(animalsline2)
// console.log(animalsLine)
// console.log(animals, animals.length)

// for (let animal of animals) {
//     console.log(animal)
// }



// //for each
// animals.forEach(animals => console.log(animals));//call, back funkcija, for atidavineja po viena elementa (animals.forEach(animals =>)


// animals.forEach(animals => console.log(animals))



// const arr123 = [1, 2, 3, 77, 78];
// let sum = 0
// arr123.forEach(num => sum += num)//num-funkcijos parametras
// console.log(sum)

// // positiveSum = 0
// // arr123.forEach(petras => {
// //     if (petras > 0) {
// //         positiveSum += petras
// //     }
// // }


// //one line
// let positiveSum = 0
// arr123.forEach(petras => petras > 0 ? positiveSum += petras : null)//null, false

// console.log(positiveSum)
// //null objektas tik neaisku koks dar

// let positiveSum1 = 0
// arr123.forEach(petras => {
//     if (petras > 0) {
//         positiveSum1 += petras
//     }
// })
// console.log(positiveSum1)



// const farm = [
//     'Cow',
//     'Chicken',
//     'Pig',
//     'Cow',
//     'Cichken',
//     'Cow'
// ]

// let positive = 0
// farm.forEach(petras => {
//     if (petras === 'Cow') {
//         //a=b+a (sutrumpinimas a+=b) didina tokiu skaiciu kuris yra po ligybe ++ didna vienetu
//         positive++//++ padidina vienu
//     }
// })
// console.log(positive)








// const superFarm = [
//     { animal: 'Cow', weight: 500 },
//     { animal: 'Chicken', weight: 3 },
//     { animal: 'Pig', weight: 100 },
//     { animal: 'Cow', weight: 400 },
//     { animal: 'Chicken', weight: 2 },
//     { animal: 'Cow', weight: 600 }
// ];

// let svoris = 0
// superFarm.forEach(animal => animal.animal === 'Cow' ? svoris += animal.weight : false)

// console.log(svoris)

// const allAnimlasWeight = {}

// superFarm.forEach(a => {
//     if (allAnimlasWeight[a.animal] === undefined) {
//         allAnimlasWeight[a.animal] = 0;
//     }
//     //pridetinauja gyvuli ir prdideti svori 0, jei givulio nera tada nioeko jei yra uzdeda nuli
//     allAnimlasWeight[a.animal] += a.weight;
//     //prioe gyvulio nulio pridedam svori
// })

// console.log(allAnimlasWeight);

// const colors = [
//     'red',
//     'green',
//     'blue',
//     'yellow',
//     'pink',
//     'purple',
//     'orange'
// ];

// let isBlack = 'No';
// colors.forEach(color => color === 'black' ? isBlack = 'Yes' : false)//reik false
// console.log(isBlack)

// let isPink = 'NO'
// colors.forEach(color => color === 'pink' && (isPink = 'Yes'))
// //nereik false nes yra &&, pima eina false (color === 'pink') ir del && nutraukia if
// console.log(isPink)

// let isPink2 = 'NO'
// colors.forEach(color => {
//     if (color === 'pink') {
//         isPink2 = 'Yes';
//     }
// })

// console.log(isPink2)
//---------------------------------------------------------------------
// const superFarm = [
//     { animal: 'Cow', weight: 500 },
//     { animal: 'Chicken', weight: 3 },
//     { animal: 'Pig', weight: 100 },
//     { animal: 'Cow', weight: 400 },
//     { animal: 'Chicken', weight: 2 },
//     { animal: 'Cow', weight: 600 }
// ];

//Kiek sveria
// let svoris = 0
// superFarm.forEach(animal => animal.animal === 'Cow' ? svoris += animal.weight : false)
//-----------------------------------------------------------
//Bendras svoris
// const allAnimlasWeight = {}
// superFarm.forEach(a => {
//     if (allAnimlasWeight[a.animal] === undefined) {
//         allAnimlasWeight[a.animal] = 0;
//         allAnimlasWeight[a.animal] += a.weight;
//     }
// })
//----------------------------------------------------------
// const colors = [
//     'red',
//     'green',
//     'blue',
//     'yellow',
//     'pink',
//     'purple',
//     'orange'
// ];

// let isBlack = 'No';
// colors.forEach(color => color === 'black' ? isBlack = 'Yes' : false)//reik false
// console.log(isBlack)

// let isPink = 'NO'
// colors.forEach(color => color === 'pink' && (isPink = 'Yes'))
//---------------------------------------------------------------
// const farm = [
//     'Cow',
//     'Chicken',
//     'Pig',
//     'Cow',
//     'Cichken',
//     'Cow'
// ]
// let positive = 0
// farm.forEach(petras => {
//     if (petras === 'Cow') {
//         positive++
//     }
// })
// console.log(positive)
//-------------------------------------------------------------

// const arr1 = [
//     [1, 7, 3],
//     [4, 22, 6],
//     [0, 8]
// ];

// let sum0 = 0

// for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr1[i].length; j++) {
//         sum0 += arr1[i][j];
//     }
// }

// suma = 0;

// arr1.forEach(a => {
//     a.forEach(b => {
//         suma += b;
//     });
// });

// console.log(suma, sum0);
//---------------------------------------------------
// const arr2 = [
//     [
//         0, [4, 22, 6]
//     ],
//     2,
//     3,
//     [
//         4,
//         [
//             4,
//             22,
//             [0, 8]
//         ],
//         6
//     ],
//     5,
//     6,
//     [0, 8],
//     8,
//     9
// ];

// let suma = 0;

// function sumArr(arr) {
//     arr.forEach(element => {
//         if (Array.isArray(element)) {
//             //(itemas yra array)jei itemas true tai jis yra array ir iskviecia pats save, rekursine funkcija
//             sumArr(element)
//         } else {
//             suma += element;
//         }
//     });
// }

// sumArr(arr2)
// console.log(suma)
// console.log(arr2.flat(Infinity).reduce((a, b) => a + b, 0))

//---------------------------------------------------------
//map metodas elementu modifikacijai

// const arr3 = [-5, 8, -3, 0, 4, 2, -1, 0, 1, -9, 6];

// const arr11 = arr3.map(element => {
//     //map paima elementa ir grazina nauja elementa
//     if (element < 0) {
//         return 0//grazina ta pacia reiksme(8)
//     }
//     return element//grazina pakeista modifikuota reiksme(-5)
// });
// console.log(arr11)
//-------------------------------------------------------foreach metodas
// const arr4 = [...arr3];
// arr4.forEach((element, index) => {
//     //pakeitimas ant kopijos, nes keitimas negryztamas
//     if (element < 0) {
//         arr3[index] = 0;//jei norim gaut index,pakeisti reiksme array
//     }
// });

// console.log(arr4);

// arr3.forEach((element, index) => {
//     if (element < 0) {
//         arr3[index] = 1;
//     }
// });
// console.log(arr3);
//-----------------------------------map
// const colors = ['pink', 'green', 'blue', 'yellow', 'pink', 'black', 'pink'];
// //const noPinkIsBlack = colors.map(elements => elements =='pink'?'black':item;)//(oneline)
// const coloBl = colors.map(element => {
//     if (element == 'pink') {
//         return 'black'
//     }
//     return element
// });
// console.log(coloBl);
//--------------------------------------------------
// const colors2 = [
//     { color: 'pink' },
//     { color: 'green' },
//     { color: 'blue' },
//     { color: 'yellow' },
//     { color: 'pink' },
//     { color: 'black' },
//     { color: 'pink' }
// ];
// const coloBl = colors2.map(element => {
//     if (element.color == 'pink') {
//         //(element.color) pima bojekto reiksme({ color: 'pink' })
//         return { color: 'black' }
//     }
//     return element
// });
// console.log(coloBl);
//-------------------------------------------

// const colors3 = [
//     { color: 'pink', id: 1, sky: 'blue' },
//     { color: 'green', id: 2, sky: 'blue' },
//     { color: 'blue', id: 3, tractor: 'green' },
//     { color: 'yellow', id: 4, sky: 'blue' },
//     { color: 'pink', id: 5, forest: 'green' },
//     { color: 'black', id: 6, sky: 'blue' },
//     { color: 'pink', id: 7, sky: 'blue' }
// ];

// const net = colors3.map(item => item.color == 'pink' ? { ...item, color: 'black' } : { ...item })
// //jei be spredo(...) tai tik pareferinam
// //...item nusikopjavom ir overwritonom(viska nusikopjavom)
// console.log(colors3);
// console.log(net);
// const netNew = colors3.map(item => ({ ...item, color: 'black' }));//visos calors i black, objekta po grazinimo idedam i apvalius skliaustus
// console.log(netNew);

//-------------------------------------------------------
//Antrą elementą padaryti black
// const colors4 = [
//     ['pink', 'green', 'blue'],
//     ['yellow', 'pink', 'black'],
//     ['pink', 'green', 'blue'],
//     ['yellow', 'pink', 'black'],
//     ['pink', 'green', 'blue'],
//     ['yellow', 'pink', 'black'],
//     ['pink', 'green', 'blue'],
//     ['yellow', 'pink', 'black'],
//     ['pink', 'green', 'blue'],
//     ['yellow', 'pink', 'black'],
//     ['pink', 'green', 'blue'],
//     ['yellow', 'pink', 'black']
// ];
// const sec = colors4.map(item => {
//     item[1] = 'black';//2 reiksme black
//     return item
// })
// console.log(sec)