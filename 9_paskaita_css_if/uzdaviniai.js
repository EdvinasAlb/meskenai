//1uždavinys
// function rand(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// let atsiReiks1 = rand(0, 4);
// let atsiReiks2 = rand(0, 4);

// if (atsiReiks1, atsiReiks2 === 0) {
//     console.log('');
// } else {
//     console.log(atsiReiks1 / atsiReiks2);
// }

//2uždavinys
// function rand(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// let atsiReiks3 = rand(0, 25);
// let atsiReiks4 = rand(0, 25);
// let atsiReiks5 = rand(0, 25);
// console.log((atsiReiks3 + atsiReiks4 + atsiReiks5) / 3);

//3uždavinys
// let a = rand(1, 10);
// let b = rand(1, 10);
// let c = rand(1, 10);

// let trikampisA = a > 3;
// let trikampisB = b > 3;
// let trikampisC = c > 3;

// if (trikampisA && trikampisB && trikampisC) {
//     console.log('Susidarys')
// } else {
//     console.log('Nesusidarys')
// }
// console.log(a, b, c)
// console.log(trikampisA, trikampisB, trikampisC)

//4uždavinys
// let reiksme1 = rand(0, 2);
// let reiksme2 = rand(0, 2);
// let reiksme3 = rand(0, 2);
// let reiksme4 = rand(0, 2);

// let r1 = reiksme1 < 1;
// let r2 = reiksme2 < 1;
// let r3 = reiksme3 < 1;
// let r4 = reiksme4 < 1;
// let total = (r1 + r2 + r3 + r4)

// console.log(reiksme1, reiksme2, reiksme3, reiksme4)
// console.log(r1, r2, r3, r4)
// console.log(total)

//6uždavinys
// let zvakiuKiekis = rand(5, 3000)

// if (zvakiuKiekis > 1000 && zvakiuKiekis < 2000) {

//     console.log(`Žvakių kiekis ${zvakiuKiekis}, 3 % procentų nuolaida, nuolaida ${zvakiuKiekis * 0.03} `)

// } else if (zvakiuKiekis > 2000) {

//     console.log(`Žvakių kiekis ${zvakiuKiekis}, 4 % nuolaida, nuolaida ${zvakiuKiekis * 0.03}`)

// } else {

//     console.log('Žvakių kiekis mažiau nei 1 kk, nuolaidos nėra')
// }

// 6uždavinys
// let vidurkis1 = rand(0, 100)
// let vidurkis2 = rand(0, 100)
// let vidurkis3 = rand(0, 100)

// let aVid = ((vidurkis1 + vidurkis2 + vidurkis3) / 3)

// console.log(aVid)

// let vid1 = vidurkis1 - aVid;
// let vid2 = vidurkis2 - aVid;
// let vid3 = vidurkis3 - aVid;
// console.log(vid1, vid2, vid3)

// let maz1 = vid1 < 10 || vid1 > 90;
// let maz2 = vid2 < 10 || vid2 > 90;
// let maz3 = vid3 < 10 || vid3 > 90;

// if (maz1) {
//     console.log(vid1)
// }

// if (maz2) {
//     console.log(vid2)
// }

// if (maz3) {
//     console.log(vid3)
// }

// console.log(maz1, maz2, maz3)