function a(first, second, callback) {
  return callback(first, second);
}

a(1, 2, function(){});
// ? 매개변수 자리에 함수가 들어간다.
// * a 함수는 세번째 매개변수에 함수가 들어가기로 약속되어있다.
// * a 함수선언할 때는 어떤 로직이 될 지 모른다.
// * a 함수 '호출'할 떄는 로직을 결정해주어야 한다.


module.exports = a;