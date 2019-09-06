/* eslint-disable no-console */
function dedo(text, ...values) {
  return text.reduce((accumulator, part, i) => `${accumulator} ${values[i - 1]} ${part}`);
}
function ueum(text, ...values) {
  return `${text} ${(10 + 10)} ${values[0]}`;
}

let saske = 'emo';
let narto = 'laranja';

console.log(dedo`sasuke ${saske} naruto ${narto} djsaldsjd`);

saske = 'jerjo';
narto = 'vrau';

console.log(dedo`sasuke ${saske} naruto ${narto} djsaldsjd`);

console.log(ueum`djasidasjod ${narto}`);
