

// function rand(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// for (let i = 0; i < 5; i++) {
//     console.log('Hello, Racoon', rand(1, 100))
// }

// do {
//     var coin = rand(0, 1) ? `Head` : `Tails`;
//     console.log(coin);
// } while (coin != `Head`);//,!=kol iskiris headas=ciklas kol iskrenta tailas

// do {
//     var digit = rand(1, 20);
//     console.log(digit);
// } while (digit <= 10);//pradzioj(digit > 10) neiginys //tol kol gaunas daugiau nei desimt, tada nutruksta, yra neiginys

// > ---- <= teiginius verciam i neiginius
// >= ---- <
// == ---- !=
// === ---- !==
// && ---- ||
// do {
//     var digit = rand(1, 20);
//     var digit = rand(1, 20);
//     console.log(digit);
// } while (digit <= 10 || digit <= 10)//pradzioje neiginys(digit > 10 && digit > 10)//teiginius verciam neiginiais


// let neisiena uz bloko ribu
// var matomas visur,js vara iskelia i virsu(housted)

// let digit;//do, vhile ciklai taip rasomi, kintamasis deklaruojamas uz bloko ribu let didgit, vidui digit
// do {
//     digit = rand(1, 20);//du letai skirtinguose blokuose su ta poacia reiksme bet du skirtingi kintamieji, isorinis letas virsui, vidinis letas apacioj
//     console.log(digit);
// } while (digit <= 10)



// do while skaiciuoja pirma cikla besalygiskai, nuo 1 iki begalybes

// while nuo 0 iki begalybes, gali neprasisukti nei vieno karto

// pvz.. fiodoras nori nusipirkti meskere, 300 eu meskere fiodoras dirba bolt per diena uzdirba nuo 30 iki 100 rytoj gimtadienis mociute kazkiek padovanos eu, kiek naktu ar dienu reikia vazineti kad fiodoras uzdirbtu ant meskeres

// let fiodor = 0;// neturi pinigu

// let gramp = rand(0, 600);


// fiodor += gramp;

// console.log(fiodor)

// while (fiodor < 300) {
//     let money = rand(40, 300);
//     fiodor += money;
//     console.log(`Fiodor has ${fiodor} money`)
// }

// do --- kai zinom kiek ciklu
// do while --- ai zinom kiek ciklu gali neprasisukti
// while --- kai nezinom kiek ciklu gali neprasisukti











// breaks and continues

//break
// for (let i = 0; i < 5; i++) {
//     console.log(i + 1);
//     if (i + 1 == 3) {
//         break;//iseina toj vietoj kai buna true
//     }
//     console.log('next')
// }//breikas naudojamas avariniams isejimams is ciklo, pvz

// let fuse = 0
// while (true) {
//     if (++fuse > 50) {//apsauga nuo uzsiciklinimo pvz
//         break
//     }
//     console.log('Hello');
// }





//continue
// for (let i = 0; i < 5; i++) {
//     console.log(i + 1)
//     if (i + 1 == 3) {
//         continue;//nutraukia kas zemiau ir tesia cikla toliau
//     }
//     console.log('next')
// }

// for (let i = 0; i < 5; i++) {
//     console.log(i + 1)
//     if (i + 1 != 3) {
//         console.log('next')
//     }//logika kuri taip pat veikia kaip continue
// }





//mach
// let parcel = 'S';//ieina per tam tikra vieta ir rodo viska nuo tos vietos

// switch (parcel) {
//     case 'S':
//         console.log('Small');
//     case 'M':
//         console.log('Medium');
//     case 'L':
//         console.log('Large');
//     default:
//         console.log('xL');
// }





// loop in loop
// for (let i = 0; i < 5; i++) {
//     console.log('Big one', i + 1)
//     for (let j = 0; j < 5; j++) {
//         console.log('Small one', i + 1)
//     }
// }//ciklas, cikle --- brake, continue


// for (let i = 0; i < 5; i++) {
//     console.log(`%cMetimas! Nr ${i}`, `color: crimson; font-size:20px;`)//i js ivedamas html ir css
//     let coin;
//     do {
//         coin = rand(0, 1) ? "H" : "T";
//         console.log(coin);
//     } while (coin != "H")
// } 