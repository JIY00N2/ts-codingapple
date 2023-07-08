// prototype을 쓰면 자식 object에게 데이터를 물려줄 수 있음
// prototype은 유전자다
function 기계() {
  this.q = 'strike';
  this.w = 'snowball';
}

기계.prototype.name = 'kim';

var nunu = new 기계(); // 자식
nunu.name; // 'kim'

// nunu가 name을 가지고 있지 않으면 -> nunu 부모 유전자를 찾음
// 거기서 name이 있으면 출력

// object에서 자료를 뽑을 때 일어나는 일
// 1. 직접 자료를 가지고 있으면 출력
// 2. 없으면 부모 유전자에서 찾음
// 3. 없으면 부모의 부모 유전자까지 찾음...

// 모든 array 자료에서 쓸 수 있는 함수 추가하기?
Array.prototype.new함수 = function () {};
var array = [1, 2, 3];
array.new함수();
