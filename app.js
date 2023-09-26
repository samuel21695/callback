// function sachick(firstNumber, secondNumber, calc) {
//   // 사칙연산을 매개변수로
//   return firstNumber calc secondNumber;
// }

function sachick(firstNumber, secondNumber, callback) {
  // 사칙연산을 매개변수로
  return callback(firstNumber, secondNumber);
}

function originalSachick(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}
console.log(originalSachick(7, 7))

// 콜백함수를 달아버리면 
const a = sachick(1, 2, function(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
})

const b = sachick(2, 3 ,function(firstNumber, secondNumber) {
  return firstNumber - secondNumber;
})

console.log(a);
console.log(b);