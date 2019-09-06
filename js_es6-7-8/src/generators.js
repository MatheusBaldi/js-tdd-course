/* eslint-disable no-console */
function* genNames() {
  yield 'Marvin';
  yield 'Thomas';
  yield 'Johnson';
}

const names = genNames();

console.log(names.next());
console.log(names.next());
console.log(names.next());
console.log(names.next());
