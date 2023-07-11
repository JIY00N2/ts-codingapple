// // ...rest 파라미터 개념
// // 다른 파라미터들 보다 맨 뒤에 있어야함
// function 함수(num, ...a) {
//   console.log(a);
// }
// 함수(1, 5, 4, 4, 6, 6); // 몇개의 파라미터가 들어올지 아직 모를 때
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// rest 파라미터 타입 지정 가능
function 함수() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    console.log(a);
}
함수(1, 5, 4, 4, 6, 6);
// Q. rest 파리미터에 string or boolean or number 가능하다면?
function 함수1() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    console.log(a);
}
함수1(1, 5, 4, 4, 6, 6);
// ... Spread operator는 괄호 벗겨주세요 문법
var arr = [1, 2, 3];
var arr2 = [4, 5];
var arr3 = __spreadArray(__spreadArray([], arr, true), arr2, true); // [1,2,3,4,5]
// destructuring 개념
var _a = ['hi', 123], a = _a[0], b = _a[1];
var _b = { student: true, age: 20 }, student = _b.student, age = _b.age;
// 함수 파라미터에 destructuring 가능
// 파라미터 만들기 === 변수 만들기
var obj = { name: 'lee', height: 163 };
function 함수2(_a) {
    var name = _a.name, height = _a.height;
    console.log(name, height);
}
함수2({ name: 'lee', height: 163 });
/*
(숙제1) 숫자 여러개를 입력하면 최댓값을 return 해주는 함수를 만들어봅시다.
최댓값(6,3,7,2) 이렇게 쓰면 7이 return 되어야합니다.
(조건1) 넣을 수 있는 숫자 갯수는 제한없음, 0 이상의 정수만 가능합니다.
(조건2) Math.max() 사용금지 반복문이나 쓰셈
*/
function returnMaxNum() {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
    }
    var max = 0;
    arr.forEach(function (n) {
        if (max < n) {
            max = n;
        }
    });
    return max;
}
returnMaxNum(6, 3, 7, 2);
function fnc(_a) {
    var user = _a.user, comment = _a.comment, admin = _a.admin;
    console.log(user, comment, admin);
}
fnc({ user: 'kim', comment: [3, 5, 4], admin: false });
function fnc2(_a) {
    var aa = _a[0], bb = _a[1], cc = _a[2];
    console.log(aa, bb, cc);
}
fnc2([40, 'wine', false]);
