// // type alias에 함수 type 저장해서 쓰는 법
// // 1. 함수 타입은 () => {}
// // 2. 함수표현식에만 type alias 사용가능
// // string을 받고 number을 리턴
// type 함수타입 = (a: string) => number;
// let 함수: 함수타입 = function (a) {
//   return 10;
// };
// // object안에 함수 만들 수 있음
// // object안의 함수 타입 지정
// type Member = {
//   name: string;
//   age: number;
//   plusOne: (x: number) => number;
//   changeName: () => void;
// };
// let 회원정보: Member = {
//   name: 'kim',
//   age: 25,
//   plusOne(a) {
//     return a + 1;
//   },
//   changeName: () => {},
// };
// /*
// (숙제2) 다음 함수2개를 만들어보고 타입까지 정의해보십시오.
// - cutZero()라는 함수를 만듭시다.
// 이 함수는 문자를 하나 입력하면 맨 앞에 '0' 문자가 있으면 제거하고 문자 type으로 return 해줍니다.
// - removeDash()라는 함수를 만듭시다.
// 이 함수는 문자를 하나 입력하면 대시기호 '-' 가 있으면 전부 제거해주고 그걸 숫자 type으로 return 해줍니다.
// - 함수에 타입지정시 type alias를 꼭 써보도록 합시다.
//  */
// type cutZeroType = (str: string) => string;
// const cutZero: cutZeroType = function (str) {
//   if (str[0] === '0') {
//     return str.slice(1);
//   } else {
//     return str;
//   }
// };
// console.log(cutZero('0string'));
// console.log(cutZero('string'));
// type removeDashType = (str: string) => number;
// const removeDash: removeDashType = function (str) {
//   let result = str.replace(/-/g, '');
//   return parseFloat(result);
// };
// console.log(removeDash('12-234'));
// console.log(removeDash('-123'));
// console.log(removeDash('12'));
// /*
// (숙제3) 함수에 함수를 집어넣고 싶습니다.
// 숙제2에서 만든 함수들을 파라미터로 넣을 수 있는 함수를 제작하고 싶은 것입니다.
// 이 함수는 파라미터 3개가 들어가는데 첫째는 문자, 둘째는 함수, 셋째는 함수를 집어넣을 수 있습니다.
// 이 함수를 실행하면
// 1. 첫째 파라미터를 둘째 파라미터 (함수)에 파라미터로 집어넣어줍니다.
// 2. 둘째 파라미터 (함수)에서 return된 결과를 셋째 파라미터(함수)에 집어넣어줍니다.
// 3. 셋째 파라미터 (함수)에서 return된 결과를 콘솔창에 출력해줍니다.
// 이 함수는 어떻게 만들면 될까요?
// 둘째 파라미터엔 cutZero, 셋째 파라미터엔 removeDash 라는 함수들만 입력할 수 있게 파라미터의 타입도 지정해봅시다.
//  */
// type fnc1Type = (a: string) => string;
// type fnc2Type = (a: string) => number;
// function a(s: string, fnc1: fnc1Type, fnc2: fnc2Type) {
//   let result = fnc1(s);
//   let result2 = fnc2(result);
//   console.log(result2);
// }
// a('010-1111-2222', cutZero, removeDash);
