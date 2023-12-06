// console.log('Welcome to DOM!');

// const h1 = document.querySelector('h1');

// h1.style.color = 'crimson';
// h1.style.fontSize = '4em'; // font-size => fontSize
// h1.style.textAlign = 'center';
// // h1.style.letterSpacing = '-0.3em';

// // let times = 3;

// // const si = setInterval(_ => {
// //     h1.style.backgroundColor = h1.style.backgroundColor === 'crimson' ? 'black' : 'crimson';
// //     times--;
// //     if (times === 0) {
// //         clearInterval(si);
// //     }
// // }
// //     , 1000);

// // setTimeout(_ => {
// //     h1.style.backgroundColor = 'pink';
// // }
// //     , 5000);

// // setInterval(_ => {
// //     h1.style.backgroundColor = h1.style.backgroundColor === 'crimson' ? 'black' : 'crimson';
// //   }
// //   , 300);

// setTimeout(_ => {
//   let text = h1.innerText; // getter
//   console.log(text);
//   // replace Object to Racoon
//   text = text.replace('Object', 'Racoon');
//   h1.innerText = text; // setter
// }, 3000);

// let html = h1.innerHTML; // getter

// console.log(html);

// // h1.innerText = 'Racoon City';

// // const word = 'Racoon City     ';
// // const letters = word.split('');
// // const spans = letters.map(letter => `<span>${letter}</span>`);
// // const line = spans.join('');
// // const divLine = document.querySelector('.line');
// // divLine.innerHTML = line;

// // setInterval(_ => {
// //     // spans.unshift(spans.pop());
// //     spans.push(spans.shift());
// //     divLine.innerHTML = spans.join('');
// // }, 300);

// // console.log(line);

// h21 = document.querySelectorAll('h2');

// h21.forEach((h2, i) => {
//   console.log(h2.innerText);
//   h2.classList.add('big');
//   h2.classList.remove('blue');
//   h2.setAttribute('href', i);
// });

// const img = document.querySelector('img');

// setInterval(_ => {
//   img.setAttribute(
//     'src',
//     img.getAttribute('src') === 'racoon.jpg' ? 'racoon2.jpg' : 'racoon.jpg'
//   );
// }, 2000);
//-------------------------------------------buttons
// const button = document.querySelector('button');

// button.addEventListener('click', () => {
//   console.log('You clicked me');
// });

// button.addEventListener('click', () => {
//   console.log('not clicked me');
// });

// button.addEventListener('mouseover', () => {
//   console.log('mouse over');
// });

// button.addEventListener('mouseout', () => {
//   console.log('mouse out');
// });

// const buttons = document.querySelectorAll('.container button');

// buttons.forEach(button => {
//   button.addEventListener('click', () => {
//     const text = button.innerText;
//     console.log(`You clicked${text}`);
//   });
// });

// const h1 = document.querySelector('h1');
// const what = document.querySelector('.clickme');

// what.addEventListener('click', _ => {
//   console.log(h1.innerText);
// });

// const input = document.querySelector('input');
// const submit = document.querySelector('button.submit');

// submit.addEventListener('click', _ => {
//   console.log(input.value);
//   input.value = '';
// });

//for of
// const buttons = document.querySelectorAll('.container button');
// for (const button of buttons) {
//     button.addEventListener('click', _ => {
//         const text = button.innerText;
//         console.log(`You clicked ${text}!`);
//     });
// }
