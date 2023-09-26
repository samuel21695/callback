function a(first, second, callback) {
  return callback(first, second);
}

let minusValue = a(1, 2, function(first, second) {
  return first - second;
});

let plusValue = a(function(first, second) {
  return first + second;
});

let divideValue = a(function(first, second) {
  return first / second;
});

console.log(minusValue)