function a(number) {
  if(typeof(number) === 'number') {
    return `${10 / number}`;
  }
}

console.log(a(2))
const Type = typeof(a(2))
Type = 'string'
console.log(Type)
