// function rand(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

//---------------------------Not
// let d = !!!a;
// console.log(a, typeof (a));
// let e = 777;
// let f = !e;
// console.log(f, typeof (f));

//-----------------------------Or ||

// let t = true;
// let h = false;

// console.log('t || t', t || t);// true || true = true
// console.log('t || h', t || h);// true || false = true
// console.log('h || t', h || t);// false || true = true
// console.log('h || h', h || h);// false || false = false

//--------------------------------------And &&
// console.log('t && t', t && t);// true && true = true
// console.log('t && h', t && h);// true && false = false
// console.log('h && t', h && t);// false && true = false
// console.log('h && h', h && h);// false && false = false

// let bever = '';
// console.log(!bever);
// let x = 5;//ture
// let y = 10;//ture
// let v = 0;//false

// console.log(x || y || v);

// console.log(x && y && v);

// console.log(v || (y && x))

//--------------------------------Bar
// console.log('start');

// console.log('1 km');

// console.log('2 km');

// if (8 < 3) {
//     console.log('Baras');
// } else if (8 < 3) {
//     console.log('Shop');
// } else if (8 > 3) {
//     console.log('BAR');
// } else {
//     console.log('so');
// }

//console.log('Shop');

// console.log('4 km');

// console.log('End');

// let r = rand(0, 5) || `Zero`;

//if (r==0) {
//     r='zero';
// }
// console.log(r);

// let randDigital = rand(0, 1);

// if (randDigital == 0) {
//     console.log('Zero');
// } else {
//     console.log('One');
// }
//------------------------------------------If / Else One Liner
// let what = rand(0, 1) ? `One` : `Zero`;
// console.log(what)

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

//----------------------------------------------2
// function rand(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// let atsiReiks3 = rand(0, 25);
// let atsiReiks4 = rand(0, 25);
// let atsiReiks5 = rand(0, 25);
// console.log((atsiReiks3 + atsiReiks4 + atsiReiks5) / 3);

//---------------------------------------------3
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

//------------------------------------------4
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

//------------------------------------------6
// let zvakiuKiekis = rand(5, 3000)

// if (zvakiuKiekis > 1000 && zvakiuKiekis < 2000) {

//     console.log(`Žvakių kiekis ${zvakiuKiekis}, 3 % procentų nuolaida, nuolaida ${zvakiuKiekis * 0.03} `)

// } else if (zvakiuKiekis > 2000) {

//     console.log(`Žvakių kiekis ${zvakiuKiekis}, 4 % nuolaida, nuolaida ${zvakiuKiekis * 0.03}`)

// } else {

//     console.log('Žvakių kiekis mažiau nei 1 kk, nuolaidos nėra')
// }

//-----------------------------------------------7
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

// console.log('Tarpinis žinių patikrinimas #1');


// function rand(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }

//----------------------------------------1

// let kauliukas1 = rand(1, 6);
// let kauliukas2 = rand(1, 6);

// console.log(`Kamuoliukų suma ${kauliukas1 + kauliukas2}`)

// if (kauliukas1 + kauliukas2 > 8) {
//     console.log('Laimėta');
// } else {
//     console.log('Pralaimėta')
// }
//----------------------------------------2

// let pilkis = rand(3, 6);
// let murklys = rand(3, 6);

// console.log(`"Pilkis" ${pilkis}, "Murklys"${murklys}`)

// if (pilkis > murklys) {
//     console.log('Pilkis sunkesnis')
// } else if (pilkis < murklys) {
//     console.log('Murklys sunkesnis')
// } else {
//     console.log('Nei vienas sunkesnis')
// }
//-----------------------------------------------3


// let karviu = rand(0, 30);
// let katinu = rand(0, 30);


// let karviuvaltis = (karviu < 15)
// let katinuvaltis = (katinu < 15)

// console.log(`Karvių skaičius ${karviu}, katinų skaičius ${katinu}`)

// if (karviuvaltis && katinuvaltis) {
//     console.log('Telpa')
// } else {
//     console.log('Netelpa')
// }

//---------------------------------------------------4

// let kauliukas = rand(1, 6)

// console.log(`Kauliukas  ${kauliukas}`);

// if (kauliukas == 1 || kauliukas == 5) {
//     console.log('Televizorius')
// } else if (kauliukas == 3 || kauliukas == 4) {
//     console.log('Skalbimo mašina')
// } else if (kauliukas == 2 || kauliukas == 6) {
//     console.log('Šaldytuvas')
// }



