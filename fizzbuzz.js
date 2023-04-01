function fizzBuzz(phoneNumberSum) {
  let output = [];
  for (let i = 1; i <= phoneNumberSum; i++) {
    if (i % 3 === 0 && i % 4 === 0) {
      output.push('FizzBuzz');
    } else if (i % 3 === 0) {
      output.push('Fizz');
    } else if (i % 4 === 0) {
      output.push('Buzz');
    } else {
      output.push(i.toString());
    }
  }
  return output.join(' ');
}