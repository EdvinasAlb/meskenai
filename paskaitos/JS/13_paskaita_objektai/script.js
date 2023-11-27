//primityvus ir objectiniai kintamieji
//stringai, bolean neprimityvus
//kiti primityvus

const five = 5;

const animal = {
    name: 'Leo',
    age: 3,//ne kintamasis o savybe(propertie)
};

animal.age++;//incriment property
animal.tail = true;//add new property
animal.name = 'Leo the Lion'//overwrite property
delete animal.tail//delete property
//objecto reikia, paimam 20 prekiu ir kiekviena aprasom objektu (kaina, dydis, savybes)
//objecto savybes (= priskyrimas)


let fivePlus  = five;// copy value

fivePlus++;//incriment copy

console.log('Five:', five);
console.log('Five plus:', fivePlus);


const anmalPlus =  animal;//copy (nuoroda) reference, objektas nesukuria naujo kintamojo 
//2.16 js15

const realAnimal =  { ...animal }//copy object, (...--spread syntax, taskai paiima objecto turini)
//-------------console rodo sunus ivykius--------------//
console.log('animal:', animal,'tikras animal',realAnimal);
console.log('animalPlus:', anmalPlus);

console.log(animal == anmalPlus)

//lyginant objectus ziurim ar tas pats objektas ar skirtingas, jei skiritngas bus fase jei prisikirtas tas pats tik naujam kintamajam bus tas pats true
//objektas yra maisas, masyvas yra komoda su stalciukais


// console.log(animal, typeof(animal));
// console.log('name', animal.name);