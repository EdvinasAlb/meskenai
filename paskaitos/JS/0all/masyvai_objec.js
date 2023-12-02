
// const five = 5;

// const animal = {
//     name: 'Leo',
//     age: 3,
// };

// animal.age++;
// animal.tail = true;
// animal.name = 'Leo the Lion';
// delete animal.tail

// let fivePlus  = five;

// fivePlus++;

// console.log('Five:', five);
// console.log('Five plus:', fivePlus);

// const anmalPlus =  animal;

// const realAnimal =  { ...animal }

// console.log('animal:', animal,'tikras animal',realAnimal);
// console.log('animalPlus:', anmalPlus);

// console.log(animal == anmalPlus)

// console.log(animal, typeof(animal));
// console.log('name', animal.name);


// const person={
//     firstName:'James',
//     lastName:'Bond',
//     age:30,
//     occupation: 'Secret agent',
// };

// const n = 'firstName';

// console.log(person.firstName, person[n], person['first' + 'Name']);

// const sumator = (a,b,c) => a+b+c;

// console.log(sumator(1,2,3));



// const sumator2 = (...args) => {
//     console.log(args);
//     let sum = 0
//     for (const arg of args) {
//         sum += arg;
//     }
//     return sum;
// }

// console.log(sumator2(1, 2, 3, 4))

// const sumator3 = (...args) => {
//     console.log(args);
//     let sum = 0
//     for (const arg of args) {
//         sum += arg;
//     }
//     return sum;
// }

// console.log(sumator3(1, 2))

// const person={
//         firstName:'James',
//         lastName:'Bond',
//         age:30,
//         occupation: 'Secret agent',
//     };

//const agent007 = {...person, codeName:'007', age:43}

//console.log(agent007)

//---------------------------------------------------Destructuring assignment
// const{codeName, firstName, lastName} = agent007;
// const age = agent007.age

// console.log(codeName,firstName,lastName,age)

// for(const key in agent007){
//     console.log(key, ':',agent007[key])
// }

//-------------------------------Array
//     const animals =[
//         'racoon',
//         'dog',
//         'fox',
//         'lion',
//         'elephant',
//         'cat',
// ];

// animals[16]='dog';

// console.log(animals, animals.length, animals[4]);

// for (let i = 0; i < animals.length;i++){
//     console.log(animals[i]);
// }

// console.log('of---------------------------------------')
// for (const animal of animals){
//     console.log(animal)
// }
// console.log('in---------------------------------------')

// for (const index in animals){
//     console.log(animals[index])
// }


// agent007.goToMission = _ =>{
//     console.log('Going to mision');
// }

// agent007.goToMission()

// agent007.guns = ['Walter PPK', 'AK-47', 'M16'];

// agent007.goToMission = (mission) => {
//     console.log('Going to mission', mission)
// }

// agent007.goToMission('Kill the good gay')

// for (const gun of agent007.guns){
//     console.log(gun)
// }


// agent007.useGuns= function() {
//     for (const gun of this.guns){
//     console.log(gun)
// }
// }
// agent007.useGuns()

// const isItString = 'Go to mision'
// console.log(typeof (isItString), isItString.length);


//-----------------------------------------Prototype String
// String.prototype.hello = function(){
//     return 'Hello' + this;
// }
// const me = 'Racoon';
// console.log(me.hello());

//----------------------------------------Array
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

// animals[4] = 'Frog'
// animals.push('Elephant');
// animals.push('Horse', 'cow', 'pig');
// animals.unshift('Tiger', 'Bear')

// animals.pop()
// animals.shift()

// let animalsLine = 'Animals: '

// for (let i = 0; i < animals.length; i++) {
//     console.log(animals[i])
//     animalsLine += animals[i] + '+';
// }

// const animalsline2 = animals.join('+')

// console.log(animalsline2)
// console.log(animalsLine)
// console.log(animals, animals.length)

// for (let animal of animals) {
//     console.log(animal)
// }

//--------------------------------------------For Each
// animals.forEach(animals => console.log(animals));

// animals.forEach(animals => console.log(animals))

// const arr123 = [1, 2, 3, 77, 78];
// let sum = 0
// arr123.forEach(num => sum += num)
// console.log(sum)

// positiveSum = 0
// arr123.forEach(petras => {
//     if (petras > 0) {
//         positiveSum += petras
//     }
// }


//----------------------------------------------One Liner
// let positiveSum = 0
// arr123.forEach(petras => petras > 0 ? positiveSum += petras : null)

// console.log(positiveSum)

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
//     allAnimlasWeight[a.animal] += a.weight;
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
// console.log(isPink)

// let isPink2 = 'NO'
// colors.forEach(color => {
//     if (color === 'pink') {
//         isPink2 = 'Yes';
//     }
// })

// console.log(isPink2)

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

//Bendras svoris
// const allAnimlasWeight = {}
// superFarm.forEach(a => {
//     if (allAnimlasWeight[a.animal] === undefined) {
//         allAnimlasWeight[a.animal] = 0;
//         allAnimlasWeight[a.animal] += a.weight;
//     }
// })

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
//             sumArr(element)
//         } else {
//             suma += element;
//         }
//     });
// }

// sumArr(arr2)
// console.log(suma)
// console.log(arr2.flat(Infinity).reduce((a, b) => a + b, 0))

//-------------------------------------------------------Map

// const arr3 = [-5, 8, -3, 0, 4, 2, -1, 0, 1, -9, 6];

// const arr11 = arr3.map(element => {
//     if (element < 0) {
//         return 0
//     }
//     return element
// });
// console.log(arr11)
//-------------------------------------------------------For Each
// const arr4 = [...arr3];
// arr4.forEach((element, index) => {
//     if (element < 0) {
//         arr3[index] = 0;
//     }
// });

// console.log(arr4);

// arr3.forEach((element, index) => {
//     if (element < 0) {
//         arr3[index] = 1;
//     }
// });
// console.log(arr3);
//--------------------------------------------------------Map
// const colors = ['pink', 'green', 'blue', 'yellow', 'pink', 'black', 'pink'];
// const noPinkIsBlack = colors.map(elements => elements =='pink'?'black':item;)
// const coloBl = colors.map(element => {
//     if (element == 'pink') {
//         return 'black'
//     }
//     return element
// });
// console.log(coloBl);

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
//         return { color: 'black' }
//     }
//     return element
// });
// console.log(coloBl);


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
// console.log(colors3);
// console.log(net);
// const netNew = colors3.map(item => ({ ...item, color: 'black' }));
// console.log(netNew);

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
//     item[1] = 'black';
//     return item
// })
// console.log(sec)