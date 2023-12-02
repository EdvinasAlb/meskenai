
//------------------------------------------------------Foctorial
// function factorial(n) {
//     let answer = 1;
//     if (n == 0 || n == 1) {
//       return answer;
//     } else if (n > 1) {
//       for (let i = n; i >= 1; i--) {
//         answer = answer * i;
//       }
//       return answer;
//     } else {
//       return "number has to be positive.";
//     }
//   }
//   let n = 6;
//   answer = factorial(n);
//   console.log("Factorial of " + n + " : " + answer);


//-----------------------------------------------------Reverse String
// function reverseString(string){
//     let reverse = '';
//     for(let i = string.length-1;i>=0;i--){
//     reverse += string[i]
//     };
//      console.log(reverse);
// }
// reverseString('Vienas');
//-------------------------------------------------Prime number
//pirminis 2
//ne pirminis 4
// const isPrime = num => {
//     for (let i = 2; i < num; i++)
//         if (num % i == 0) return false;
//     return num >= 2;
// }
// console.log(isPrime(2));
//-------------------------------------------------Count vowels
//a, e, i, o, u, y.
// let vowelsSum = 0
// function vowels(string) {
//     for (let i = 0; i < string.length; i++) {
//         if (string[i] == 'a'
//             || string[i] == 'e'
//             || string[i] == 'i'
//             || string[i] == 'o'
//             || string[i] == 'u'
//             || string[i] == 'y') {
//             vowelsSum++
//         }
//     };
//     console.log('Vowels sum:', vowelsSum);
// }
// vowels('aaeeiioouuyy');
//-----------------------------------------------------Sum of squares

// function squares(a) {
//     for (let i = 1; i < a + 1; i++) {
//         kvsuma = (i * i) + (i * i)
//     } return kvsuma
// }

// console.log('Kvadratų suma:', squares(2));
//--------------------------------------------Multiplication table

// function multi(a) {
//     let result = '\n';
//     for (let i = 1; i < a + 1; i++) {
//         for (let j = 1; j < a + 1; j++) {
//             result += (i * j) + ' ';
//             // console.log(result);
//         }
//         result += '\n'
//     } return result
// }

// console.log(multi(4));