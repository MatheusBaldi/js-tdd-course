function fizzBuzz(num) {
  let result = '';
  if (num % 3 === 0) result += 'Fizz';
  if (num % 5 === 0) result += 'Buzz';
  if (result === '') result = num;

  return result;
}

export default fizzBuzz;
