/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-restricted-syntax */
const txt = 'Ireland'; // iterable
const it = txt[Symbol.iterator]();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next()); // done vira true quando encontra value undefined

for (letter of txt) {
  console.log(letter);
  if (letter === 'a') break;
}
