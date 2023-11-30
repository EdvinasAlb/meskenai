// //primityvus ir objectiniai kintamieji
// //stringai, bolean neprimityvus
// //kiti primityvus

// const five = 5;

// const animal = {
//     name: 'Leo',
//     age: 3,//ne kintamasis o savybe(propertie)
// };

// animal.age++;//incriment property
// animal.tail = true;//add new property
// animal.name = 'Leo the Lion'//overwrite property
// delete animal.tail//delete property
// //objecto reikia, paimam 20 prekiu ir kiekviena aprasom objektu (kaina, dydis, savybes)
// //objecto savybes (= priskyrimas)


// let fivePlus  = five;// copy value

// fivePlus++;//incriment copy

// console.log('Five:', five);
// console.log('Five plus:', fivePlus);


// const anmalPlus =  animal;//copy (nuoroda) reference, objektas nesukuria naujo kintamojo
// //2.16 js15

// const realAnimal =  { ...animal }//copy object, (...--spread syntax, taskai paiima objecto turini)
// //-------------console rodo senus ivykius--------------//
// console.log('animal:', animal,'tikras animal',realAnimal);
// console.log('animalPlus:', anmalPlus);

// console.log(animal == anmalPlus)

// //lyginant objectus ziurim ar tas pats objektas ar skirtingas, jei skiritngas bus fase jei prisikirtas tas pats tik naujam kintamajam bus tas pats true
// //objektas yra maisas, masyvas yra komoda su stalciukais


// // console.log(animal, typeof(animal));
// // console.log('name', animal.name);

// // ------------------------------------------------------------------------
// const person={
//     firstName:'James',
//     lastName:'Bond',
//     age:30,
//     occupation: 'Secret agent',
// };//object pvz

// const n = 'firstName';

// console.log(person.firstName, person[n], person['first' + 'Name']);
// //rasome (person['first' + 'Name']) kai negalim rasyti(person.firstName)



// const sumator = (a,b,c) => a+b+c;//... galima panaudoti vietoj (a,b,c) funkcijoj(rest)...--susirenka kas lieka

// console.log(sumator(1,2,3));


// //sumator 2 rest, spread operator
// const sumator2 = (...args) =>{//...----jei suspaustas isklaiedizma jei iskleistas suspaudziam
//     //restas (...) surenka i viena kruva ir susdeda i viena objekta
//     console.log(args);
//     let sum=0
//     for (const arg of args) {//for of, for in ciklai(eina per objektus)
//         sum +=arg;
//     }
//     return sum;
// }

// console.log(sumator2(1,2,3,4))



// //for in pvz
// const sumator3 = (...args) =>{
//     console.log(args);
//     let sum=0
//     for (const arg of args) {//ciklas kuris pereina per visa objekta
//         sum +=arg;
//     }
//     return sum;
// }

// console.log(sumator2(1,2))

//--------------------------------... gali buti spreadas,, gali buti restas, jei i kintamaji ateina objektas, objektas yra suspaustas(spreadas), jei ateina kazkas iskleistas(restas)suspaudziam--------------- po spredo veikimo atskiros reiksmes, po resto suspaustas

// const person={
//         firstName:'James',
//         lastName:'Bond',
//         age:30,
//         occupation: 'Secret agent',
//     };

//    const agent007 = {...person, codeName:'007', age:43}
//spreadas veikia...--nuajas property(codeName:'007') overwrite(age:43)
// console.log(agent007)
//spreadas daznai naudojamas, restas reciau




//Destructuring assignment
// const{codeName, firstName, lastName} = agent007;
// const age = agent007.age
// //priskiriam reiksmes naujiems kintamiesiems, daznai naudojamas
// console.log(codeName,firstName,lastName,age)





//11.28 1:12 for in ciklas
//for in  ciklas pereina per visa objekta
//eina per enuberable, neturincius konkrecios eiles
// for-in -== neiteruojamos reiksmes
// for(const key in agent007){
//     console.log(key, ':',agent007[key])
// }

//objektas---maisas, viskas sumesta
//masyvas---griezta tvarka viduje, skirtas saugoti vienodiem kintamieji(yra tik numeriai)







//     //masyvas(objektas)
//     const animals =[
//         'racoon',
//         'dog',
//         'fox',
//         'lion',
//         'elephant',
//         'cat',
// ];


// animals[16]='dog';// pridedam i masyva

// console.log(animals, animals.length, animals[4]);//property---ilgis(lenght)

// for (let i = 0; i < animals.length;i++){
//     console.log(animals[i]);
// }//for cikla panaudojam pereit per visa masyva

// console.log('of---------------------------------------')//randa tuscius aukstus
// for (const animal of animals){
//     console.log(animal)
// }
// console.log('in---------------------------------------')//ignoruoja tuscius aukstus

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
//this --- konteksinis zodis, jei turim nama,name turim buta, bute virtuve, jei stovim virtuvei ir sakom sitas kambaris, jei atsistojam ant gatves ir sakom sita kmbari nudazyk zaliai-bus nesamone. Kontekstas-ko viduje mes stovim dabar. Butas, kitas butas bet namas tas pats.
//arow funkcija nesupranta zodzio THIS
//THIS naudojamas kad agentas saudytu is savo ginklu
//     console.log(gun)
// }
// }
// agent007.useGuns()

// const isItString = 'Go to mision'
// console.log(typeof (isItString), isItString.length);//JS primityvus dalykai yra giliai objektai, is prrimityvu galima issreikalauti objekto. Prototipinis, objektinis principas.




//-----------------------------------------prototype string
// String.prototype.hello = function(){
//     return 'Hello' + this;
// }
// //retas naudojimas
// const me = 'Racoon';
// console.log(me.hello());