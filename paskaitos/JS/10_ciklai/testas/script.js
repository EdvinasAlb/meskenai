function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}



//1
// for (let i = 10; i >= 1; i--) {
//     console.log(`Liko ${i} ratu`)
// }

//2

// let greitis;
// let vidutinis = 0;
// let vid = 0;

// for (let i = 10; i >= 1; i--) {
//     greitis = rand(120, 220)
//     console.log(`Liko ${i} ratu, greitsi ${greitis} km/h`)
//     vidutinis = greitis + vidutinis
//     vid = vidutinis / 10
// }
// console.log(vidutinis, vid);
//3

// let atsitiktinis
// let sumkuras = 0

// for (let i = 0; i < 10; i++) {
//     atsitiktinis = rand(3, 6)
//     sumkuras = atsitiktinis + sumkuras
//     console.log(atsitiktinis, sumkuras)
// }

// if (sumkuras <= 44) {
//     console.log(`Pavyko ${sumkuras}`)
// } else console.log(`NePavyko ${sumkuras}`)

//4

// let greitis
// for (let i = 0; i < 10; i++) {
//     console.log('Ratai', i + 1)
//     for (let j = 0; j < 5; j++) {
//         greitis = rand(20, 120)
//         console.log('Posukiai', 'greitis -', greitis)
//     }
// }