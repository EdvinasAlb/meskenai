const form = document.querySelector('form');
const button = form.querySelector('button');

const inputs = form.querySelectorAll('input');
const select = form.querySelectorAll('select');
const texterea = form.querySelectorAll('textarea');

const data = {};

button.addEventListener('click', _ => {
  inputs.forEach(input => {
    data[input.name] = input.value;
  });
  select.forEach(input => {
    data[input.name] = input.value;
  });
  texterea.forEach(input => {
    data[input.name] = input.value;
  });

  console.log(data);
});
