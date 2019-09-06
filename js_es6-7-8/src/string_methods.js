/* eslint-disable no-console */
const text = 'Lorem ipsum dolot sit amet';

console.log('startsWith', text.startsWith('Lorem'));
console.log('startsWith', text.startsWith('rem', 2));
console.log('endsWith', text.endsWith('ame'));
console.log('endsWith', text.endsWith('ame', 25));

console.log('includes', text.includes('ipsum'));

console.log('repeat', 'lol'.repeat(10));
