function fizzBuzz(phoneNumber) {
  let total = 0;
  phoneNumber.toString().split('').forEach(digit => {
    total += parseInt(digit);
  });
  for (let i = 1; i <= total; i++) {
    if (i % 3 === 0 && i % 4 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 4 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}
function main() {
  const phoneNumberStr = prompt('Enter your phone number:');
  const phoneNumber = phoneNumberStr.split('').reduce((sum, digit) => {
    return sum + parseInt(digit);
  }, 0);
  fizzBuzz(phoneNumber);
}
main();
