function numberSquarer() {
  let input = prompt('Enter a number, and I will give you a square!');
  let result = 0;

  result = Number(input) * Number(input);

  alert(result);
}

function twoNumbers() {
  let firstInput = prompt('Enter a number!')
  let secondInput = prompt('Multiply that number by:');
  let result = 0;

  result = Number(firstInput) * Number(secondInput);

  alert(result);
}
