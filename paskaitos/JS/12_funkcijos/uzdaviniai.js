
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//1
// function funkc(a) {
//     console.log(a);
// }
// funkc('labas rytas')

//------------------------

//2
// function funkc(a, b) {
//     for (let i = 0; i < b; i++) {
//         console.log(a);
//     }
// }
// funkc('labas rytas', 3)


//3---------------------

//4
// function funkc(a) {
//     let n = 0;
//     for (let i = 2; i <= a / 2; i++) {
//         if (a % i == 0) {
//             n++;
//         }
//     } console.log(n);//iškviečia for ciklo atskymą
// };
// funkc(10);
//----------------------------------

//5

const simtas100 = [
]
for (let i = 0; i < 100; i++) {
    let random = rand(33, 77);
    simtas100.push(random);
}
console.log(simtas100);



