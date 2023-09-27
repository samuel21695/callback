// callback function syntax
// function prac(first, callback) {
//   return callback(first);
// }

function pracTwo(first, callback) {
  if(typeof(first) === 'string') {
    return callback(first);
  } else {
    console.error("이 타입은 지원하지 않습니다.")
  }
}

let print = pracTwo("hello", function(eventTarget) {
  return eventTarget + "입니다.";
})

console.log(print)
